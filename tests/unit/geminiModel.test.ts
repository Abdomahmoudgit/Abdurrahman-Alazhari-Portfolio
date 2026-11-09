import { describe, expect, it } from "vitest";

import { pickGeminiModel } from "@/lib/geminiModel";

const gen = (name: string) => ({ name: `models/${name}`, supportedActions: ["generateContent"] });

describe("pickGeminiModel", () => {
  it("prefers the newest stable flash-lite model", () => {
    expect(
      pickGeminiModel([
        gen("gemini-2.5-flash-lite"),
        gen("gemini-3.5-flash-lite"),
        gen("gemini-3.8-flash"),
        gen("gemini-3.6-flash-lite-preview-10-2026"),
        gen("gemini-3.8-pro"),
      ])
    ).toBe("gemini-3.5-flash-lite");
  });

  it("falls back to the newest flash when no flash-lite exists", () => {
    expect(pickGeminiModel([gen("gemini-2.5-flash"), gen("gemini-3.8-flash"), gen("gemini-3.8-pro")])).toBe(
      "gemini-3.8-flash"
    );
  });

  it("skips models that can't generate content and non-chat variants", () => {
    expect(
      pickGeminiModel([
        { name: "models/gemini-9-flash-lite", supportedActions: ["embedContent"] },
        gen("gemini-3.5-flash-lite-tts"),
        gen("gemini-3.5-flash-image"),
        gen("gemma-3-27b-it"),
        gen("gemini-3.1-flash-lite"),
      ])
    ).toBe("gemini-3.1-flash-lite");
  });

  it("prefers the plain id over a pinned -001 variant of the same version", () => {
    expect(pickGeminiModel([gen("gemini-3.5-flash-lite-001"), gen("gemini-3.5-flash-lite")])).toBe(
      "gemini-3.5-flash-lite"
    );
  });

  it("returns null when nothing fits", () => {
    expect(pickGeminiModel([gen("gemini-3.8-pro"), gen("text-embedding-004")])).toBeNull();
  });
});
