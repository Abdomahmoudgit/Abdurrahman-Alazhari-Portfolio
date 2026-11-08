import Anthropic from "@anthropic-ai/sdk";

import { buildAssistantPrompt } from "@/lib/assistantPrompt";
import { createRateLimiter, parseChatRequest } from "@/lib/chatValidation";

// Portfolio chat assistant: answers visitors' questions about the owner using
// Claude, streamed back as plain text. Needs ANTHROPIC_API_KEY (Vercel env).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-opus-5-5";
const isAllowed = createRateLimiter(10, 10 * 60 * 1000); // 10 requests / 10 min per IP

// System prompts are built once per locale and reused (byte-stable => cacheable).
const prompts = { en: buildAssistantPrompt("en"), ar: buildAssistantPrompt("ar") };

let client: Anthropic | null = null;
function getClient() {
  client ??= new Anthropic(); // reads ANTHROPIC_API_KEY
  return client;
}

const text = (body: string, status: number) =>
  new Response(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8" } });

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) return text("Assistant is not configured", 503);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!isAllowed(ip)) return text("Too many messages — please try again in a few minutes.", 429);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return text("Invalid JSON", 400);
  }
  const parsed = parseChatRequest(body);
  if ("error" in parsed) return text(parsed.error, 400);

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const response = getClient().beta.messages.stream(
          {
            model: MODEL,
            max_tokens: 1024,
            // Chat: low effort keeps answers fast and cheap (thinking can't be disabled on Opus 5.5).
            output_config: { effort: "low" },
            // Re-run on a fallback model server-side if a safety classifier declines.
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
            system: [
              {
                type: "text",
                text: prompts[parsed.locale],
                cache_control: { type: "ephemeral" },
              },
            ],
            messages: parsed.messages,
          },
          { signal: req.signal }
        );

        for await (const event of response) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }

        const final = await response.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode(
              parsed.locale === "ar"
                ? "عذرًا، لا أستطيع المساعدة في ذلك. يمكنك التواصل مع عبدالرحمن مباشرة عبر واتساب."
                : "Sorry, I can't help with that. You can reach Abdurrahman directly on WhatsApp."
            )
          );
        }
        if (process.env.NODE_ENV !== "production") {
          const u = final.usage;
          console.log(
            `[chat] in=${u.input_tokens} cache_read=${u.cache_read_input_tokens ?? 0} cache_write=${u.cache_creation_input_tokens ?? 0} out=${u.output_tokens}`
          );
        }
        controller.close();
      } catch (err) {
        if (req.signal.aborted) {
          controller.close();
          return;
        }
        if (err instanceof Anthropic.RateLimitError) {
          console.error("[chat] Anthropic rate limit");
        } else if (err instanceof Anthropic.APIError) {
          console.error(`[chat] Anthropic API error ${err.status}: ${err.message}`);
        } else {
          console.error("[chat] unexpected error", err);
        }
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
