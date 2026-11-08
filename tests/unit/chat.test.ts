import { describe, expect, it } from "vitest";

import { buildAssistantPrompt } from "@/lib/assistantPrompt";
import { CHAT_LIMITS, createRateLimiter, parseChatRequest } from "@/lib/chatValidation";
import { getContent } from "@/data";
import { whatsappLink } from "@/lib/whatsapp";

const user = (content: string) => ({ role: "user", content });
const bot = (content: string) => ({ role: "assistant", content });

describe("parseChatRequest", () => {
  it("accepts a valid conversation and trims messages", () => {
    const r = parseChatRequest({ locale: "en", messages: [user("  hi  "), bot("hello"), user("projects?")] });
    expect(r).toEqual({
      locale: "en",
      messages: [
        { role: "user", content: "hi" },
        { role: "assistant", content: "hello" },
        { role: "user", content: "projects?" },
      ],
    });
  });

  it.each([
    ["no body", null],
    ["bad locale", { locale: "fr", messages: [user("hi")] }],
    ["no messages", { locale: "en", messages: [] }],
    ["starts with assistant", { locale: "en", messages: [bot("hi")] }],
    ["two user messages in a row", { locale: "en", messages: [user("a"), user("b")] }],
    ["ends with assistant", { locale: "en", messages: [user("a"), bot("b")] }],
    ["empty message", { locale: "en", messages: [user("   ")] }],
    ["non-string content", { locale: "en", messages: [{ role: "user", content: 42 }] }],
    ["message too long", { locale: "en", messages: [user("x".repeat(CHAT_LIMITS.maxChars + 1))] }],
    [
      "too many messages",
      {
        locale: "ar",
        messages: Array.from({ length: CHAT_LIMITS.maxMessages + 1 }, (_, i) =>
          i % 2 === 0 ? user("q") : bot("a")
        ),
      },
    ],
  ])("rejects: %s", (_name, body) => {
    expect(parseChatRequest(body)).toHaveProperty("error");
  });
});

describe("createRateLimiter", () => {
  it("allows up to the limit inside the window, then resets", () => {
    const allowed = createRateLimiter(3, 1000);
    expect([0, 1, 2].map((t) => allowed("ip", t))).toEqual([true, true, true]);
    expect(allowed("ip", 500)).toBe(false);
    expect(allowed("other-ip", 500)).toBe(true);
    expect(allowed("ip", 1500)).toBe(true);
  });
});

describe("assistant prompt", () => {
  it("is byte-stable so it can be prompt-cached", () => {
    expect(buildAssistantPrompt("en")).toBe(buildAssistantPrompt("en"));
    expect(buildAssistantPrompt("ar")).toBe(buildAssistantPrompt("ar"));
  });

  it("mentions every project and the WhatsApp number", () => {
    for (const locale of ["en", "ar"] as const) {
      const prompt = buildAssistantPrompt(locale);
      for (const p of getContent(locale).projects) expect(prompt).toContain(p.title);
      expect(prompt).toContain("201095664239");
    }
  });
});

describe("whatsappLink", () => {
  it("builds a wa.me link with an encoded message", () => {
    expect(whatsappLink("Hi & hello")).toBe("https://wa.me/201095664239?text=Hi%20%26%20hello");
  });
});
