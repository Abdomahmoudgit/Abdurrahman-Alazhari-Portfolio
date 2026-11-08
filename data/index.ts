import ar from "./ar";
import en from "./en";
import type { Content, Locale } from "./types";

export * from "./shared";
export type * from "./types";

const contents: Record<Locale, Content> = { en, ar };

/** All site copy for one language. English is at "/", Arabic at "/ar". */
export function getContent(locale: Locale): Content {
  return contents[locale];
}

export const locales: Locale[] = ["en", "ar"];
