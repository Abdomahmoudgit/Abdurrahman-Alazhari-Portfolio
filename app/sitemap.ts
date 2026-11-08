import type { MetadataRoute } from "next";
import { getContent, siteUrl } from "@/data";

// Home pages (EN + AR) and every project page in both languages.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = getContent("en").projects.map((p) => p.slug);

  const page = (enPath: string, priority: number): MetadataRoute.Sitemap => {
    const arPath = enPath === "/" ? "/ar" : `/ar${enPath}`;
    const languages = { en: `${siteUrl}${enPath === "/" ? "" : enPath}`, ar: `${siteUrl}${arPath}` };
    return [
      { url: languages.en, lastModified: now, changeFrequency: "monthly", priority, alternates: { languages } },
      { url: languages.ar, lastModified: now, changeFrequency: "monthly", priority, alternates: { languages } },
    ];
  };

  return [...page("/", 1), ...slugs.flatMap((s) => page(`/projects/${s}`, 0.7))];
}
