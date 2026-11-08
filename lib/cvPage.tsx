import type { Metadata } from "next";

import CvPage from "@/components/CvPage";
import { getContent, type Locale } from "@/data";
import { buildMetadata } from "@/lib/metadata";

// Shared logic for /cv and /ar/cv.

export function cvMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  const base = buildMetadata(locale);
  const title = `${locale === "ar" ? "السيرة الذاتية" : "CV"} — ${content.meta.siteName}`;
  const path = `${content.base}/cv`;
  return {
    ...base,
    title,
    description: content.cv.summary,
    alternates: { canonical: path, languages: { en: "/cv", ar: "/ar/cv" } },
    openGraph: { ...base.openGraph, title, description: content.cv.summary, url: path },
  };
}

export function CvRoute({ locale }: { locale: Locale }) {
  return <CvPage content={getContent(locale)} />;
}
