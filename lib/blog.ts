import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Locale } from "@/data/types";

// Blog posts are MDX files in content/blog/{en,ar}/<slug>.mdx with frontmatter:
//   title, description, date (YYYY-MM-DD), draft (true hides it in production)

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Drafts are visible in `next dev` only, never in production builds. */
const showDrafts = process.env.NODE_ENV !== "production";

function readPostFile(locale: Locale, file: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, locale, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  const meta: PostMeta = {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
  return { meta, content };
}

/** Posts for a locale, newest first (drafts excluded in production). */
export function getPosts(locale: Locale): PostMeta[] {
  const dir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => readPostFile(locale, f).meta)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** One post's metadata and MDX source, or null if missing / hidden draft. */
export function getPost(locale: Locale, slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_DIR, locale, file))) return null;
  const post = readPostFile(locale, file);
  if (post.meta.draft && !showDrafts) return null;
  return post;
}

export function formatDate(date: string, locale: Locale) {
  const d = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
