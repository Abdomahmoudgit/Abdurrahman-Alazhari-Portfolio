import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { siteUrl } from "@/data";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Abdurrahman Al-Azhari — Frontend Engineer | React.js & Next.js";
const description =
  "Frontend Engineer building production web applications with React.js and Next.js — reusable dashboard interfaces, REST/GraphQL APIs, React Query and Redux Toolkit.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Abdurrahman Al-Azhari",
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Abdurrahman Al-Azhari", url: siteUrl }],
  alternates: { canonical: "/" },
  // The share image comes from app/opengraph-image.tsx.
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Abdurrahman Al-Azhari",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      </body>
    </html>
  );
}
