import localFont from "next/font/local";

// Fonts are self-hosted (files in app/fonts) so builds don't depend on
// reaching Google Fonts, which kept timing out.

/** Inter (Latin, variable weight) — English text, and Latin words on the Arabic page. */
export const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

/**
 * IBM Plex Sans Arabic (Arabic glyphs only; Latin falls back to Inter).
 * Only 400 and 700: every preloaded weight competes with the first images
 * on phones, and the browser maps light/medium/semibold to these two.
 */
export const plexArabic = localFont({
  src: [
    { path: "./fonts/plex-arabic-400.woff2", weight: "400" },
    { path: "./fonts/plex-arabic-700.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-arabic",
  // No generated Arial fallback: Latin characters should fall through to Inter.
  adjustFontFallback: false,
  fallback: [],
});
