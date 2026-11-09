import { ApiError, GoogleGenAI } from "@google/genai";

import { buildAssistantPrompt } from "@/lib/assistantPrompt";
import { createRateLimiter, parseChatRequest } from "@/lib/chatValidation";

// Portfolio chat assistant: answers visitors' questions about the owner using
// Google Gemini (free tier), streamed back as plain text.
// Needs GEMINI_API_KEY (free from https://aistudio.google.com/apikey).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// "-latest" alias = newest Flash-Lite model, which has the most generous free
// daily quota. Override with GEMINI_MODEL if Google changes the free models.
const MODEL = process.env.GEMINI_MODEL || "gemini-flash-lite-latest";
const isAllowed = createRateLimiter(10, 10 * 60 * 1000); // 10 requests / 10 min per IP

// System prompts are built once per locale from the site data.
const prompts = { en: buildAssistantPrompt("en"), ar: buildAssistantPrompt("ar") };

let client: GoogleGenAI | null = null;
function getClient() {
  client ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return client;
}

const text = (body: string, status: number) =>
  new Response(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8" } });

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) return text("Assistant is not configured", 503);

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

  // Start the request before streaming so quota / auth errors become proper status codes.
  let response: AsyncGenerator<{ text?: string }>;
  try {
    response = await getClient().models.generateContentStream({
      model: MODEL,
      contents: parsed.messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      config: {
        systemInstruction: prompts[parsed.locale],
        maxOutputTokens: 800,
        temperature: 0.4,
        abortSignal: req.signal,
      },
    });
  } catch (err) {
    if (err instanceof ApiError && err.status === 429) {
      // Free-tier daily quota reached: the widget then points to WhatsApp.
      console.error("[chat] Gemini quota reached");
      return text("Assistant is busy", 503);
    }
    console.error("[chat] Gemini error", err instanceof ApiError ? `${err.status}: ${err.message}` : err);
    return text("Assistant error", 500);
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of response) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
        controller.close();
      } catch (err) {
        if (req.signal.aborted) {
          controller.close();
          return;
        }
        console.error("[chat] stream error", err);
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
