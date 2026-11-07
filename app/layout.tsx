import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Abdurrahman Al-Azhari — Frontend Engineer | React.js & Next.js";
const description =
  "Frontend Engineer building production web applications with React.js and Next.js — reusable dashboard interfaces, REST/GraphQL APIs, React Query and Redux Toolkit.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdolrahman.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/mineImage.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Chat widget loads after the page is idle so it doesn't block rendering */}
        <Script
          src="https://code.tidio.co/0cnpek0ojsi8du8p5oadlmxnun4mnnlr.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
