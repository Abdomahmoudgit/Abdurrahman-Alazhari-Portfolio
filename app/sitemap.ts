import type { MetadataRoute } from "next";
import { getContent, siteUrl } from "@/data";
import { getPosts } from "@/lib/blog";

// Home, CV, project pages and published blog posts, in both languages.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = getContent("en").projects.map((p) => p.slug);
  // Only posts published in both languages (drafts are excluded in production).
  const arPosts = new Set(getPosts("ar").map((p) => p.slug));
  const posts = getPosts("en").filter((p) => arPosts.has(p.slug));

  const page = (enPath: string, priority: number): MetadataRoute.Sitemap => {
    const arPath = enPath === "/" ? "/ar" : `/ar${enPath}`;
    const languages = { en: `${siteUrl}${enPath === "/" ? "" : enPath}`, ar: `${siteUrl}${arPath}` };
    return [
      { url: languages.en, lastModified: now, changeFrequency: "monthly", priority, alternates: { languages } },
      { url: languages.ar, lastModified: now, changeFrequency: "monthly", priority, alternates: { languages } },
    ];
  };

  return [
    ...page("/", 1),
    ...page("/cv", 0.8),
    ...slugs.flatMap((s) => page(`/projects/${s}`, 0.7)),
    ...(posts.length ? page("/blog", 0.6) : []),
    ...posts.flatMap((p) => page(`/blog/${p.slug}`, 0.6)),
  ];
}
