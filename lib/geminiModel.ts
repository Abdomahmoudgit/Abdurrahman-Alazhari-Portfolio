// Picks which Gemini model the chat assistant uses.
// Model names change often (and aliases like "gemini-flash-lite-latest" may not
// exist), so instead of hard-coding one we ask the API which models this key
// can use and choose the best free-tier-friendly one.

export type ModelInfo = { name?: string; supportedActions?: string[] };

// Variants that are not plain text chat models, or not stable.
const EXCLUDE = /(preview|exp|tts|image|embedding|audio|live|thinking|vision|learnlm|aqa|imagen|veo|gemma)/i;

/** "models/gemini-3.5-flash-lite" -> [3, 5]; unknown -> [0]. */
function version(name: string): number[] {
  const m = name.match(/gemini-(\d+(?:\.\d+)*)/);
  return m ? m[1].split(".").map(Number) : [0];
}

function newerFirst(a: string, b: string) {
  const va = version(a);
  const vb = version(b);
  for (let i = 0; i < Math.max(va.length, vb.length); i++) {
    const d = (vb[i] ?? 0) - (va[i] ?? 0);
    if (d) return d;
  }
  return a.length - b.length; // shorter (no suffix like "-001") first
}

/**
 * Chooses the newest stable Flash-Lite model (biggest free quota), then the
 * newest stable Flash model. Returns the bare id (without "models/") or null.
 */
export function pickGeminiModel(models: ModelInfo[]): string | null {
  const usable = models
    .filter((m) => m.name && (m.supportedActions ?? ["generateContent"]).includes("generateContent"))
    .map((m) => m.name!.replace(/^models\//, ""))
    .filter((n) => n.startsWith("gemini-") && !EXCLUDE.test(n));

  const lite = usable.filter((n) => n.includes("flash-lite")).sort(newerFirst);
  if (lite.length) return lite[0];
  const flash = usable.filter((n) => n.includes("flash")).sort(newerFirst);
  return flash[0] ?? null;
}
