import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "./provider";
import type { Locale } from "@/data";

/**
 * Shared <html>/<body> for both root layouts: app/(en)/layout.tsx ("/")
 * and app/(ar)/ar/layout.tsx ("/ar"). Only lang, dir and font differ.
 */
export default function RootShell({
  locale,
  fontClassName,
  children,
}: {
  locale: Locale;
  fontClassName: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={fontClassName}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Vercel visitor analytics + real-user performance metrics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
