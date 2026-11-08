import type { Locale } from "@/data/types";

// Limits for the public chat endpoint (app/api/chat/route.ts). Kept small so
// one visitor can't run up a large bill.
export const CHAT_LIMITS = {
  maxMessages: 12,
  maxChars: 800,
} as const;

export type ChatMessage = { role: "user" | "assistant"; content: string };
export type ChatRequest = { locale: Locale; messages: ChatMessage[] };

/** Validates the untrusted request body. Returns the clean request or an error string. */
export function parseChatRequest(body: unknown): ChatRequest | { error: string } {
  if (!body || typeof body !== "object") return { error: "Invalid body" };
  const { locale, messages } = body as { locale?: unknown; messages?: unknown };

  if (locale !== "en" && locale !== "ar") return { error: "Invalid locale" };
  if (!Array.isArray(messages) || messages.length === 0) return { error: "No messages" };
  if (messages.length > CHAT_LIMITS.maxMessages) return { error: "Conversation too long" };

  const clean: ChatMessage[] = [];
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i] as { role?: unknown; content?: unknown };
    // Must alternate user / assistant, starting with user.
    const expected = i % 2 === 0 ? "user" : "assistant";
    if (m?.role !== expected) return { error: "Invalid message order" };
    if (typeof m.content !== "string") return { error: "Invalid message" };
    const content = m.content.trim();
    if (!content) return { error: "Empty message" };
    if (content.length > CHAT_LIMITS.maxChars) return { error: "Message too long" };
    clean.push({ role: expected, content });
  }
  if (clean[clean.length - 1].role !== "user") return { error: "Last message must be from the user" };

  return { locale, messages: clean };
}

/** Simple in-memory sliding-window rate limiter (per server instance). */
export function createRateLimiter(limit: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return function isAllowed(key: string, now = Date.now()): boolean {
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= limit) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    // Keep the map from growing forever on a long-lived instance.
    if (hits.size > 5000) hits.clear();
    return true;
  };
}
