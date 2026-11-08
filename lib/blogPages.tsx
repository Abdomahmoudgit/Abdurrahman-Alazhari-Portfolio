import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import PageTopBar from "@/components/PageTopBar";
import { getContent, type Locale } from "@/data";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";

// Shared blog pages for /blog, /blog/[slug] and their /ar versions.

const other = (locale: Locale) => (locale === "ar" ? "" : "/ar");

export function blogIndexMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const base = buildMetadata(locale);
  const title = `${c.blog.title} — ${c.meta.siteName}`;
  const path = `${c.base}/blog`;
  return {
    ...base,
    title,
    description: c.blog.intro,
    alternates: { canonical: path, languages: { en: "/blog", ar: "/ar/blog" } },
    openGraph: { ...base.openGraph, title, description: c.blog.intro, url: path },
    // Don't index an empty blog.
    robots: getPosts(locale).length ? undefined : { index: false, follow: true },
  };
}

export function BlogIndex({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const posts = getPosts(locale);

  return (
    <main className="min-h-screen bg-page text-fg px-5 sm:px-10 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <PageTopBar
          ui={c.ui}
          backHref={c.base || "/"}
          backLabel={c.cv.labels.backHome}
          otherLocaleHref={`${other(locale)}/blog`}
        />
        <h1 className="mt-8 text-4xl md:text-5xl font-bold">{c.blog.title}</h1>
        <p className="mt-3 text-fg-muted leading-relaxed rtl:leading-loose">{c.blog.intro}</p>

        <div className="mt-10 space-y-6">
          {posts.length === 0 && <p className="text-fg-soft">{c.blog.empty}</p>}
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`${c.base}/blog/${p.slug}`}
              className="group block rounded-3xl border border-line/10 p-6 md:p-8 card-surface hover:border-purple/50 transition-colors"
            >
              <p className="flex flex-wrap items-center gap-x-3 text-sm text-fg-soft">
                <time dateTime={p.date}>{formatDate(p.date, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>{c.blog.minRead.replace("{n}", String(p.readingMinutes))}</span>
                {p.draft && (
                  <span className="rounded-full bg-purple/15 px-2 py-0.5 text-xs font-semibold text-purple">
                    {c.blog.draft}
                  </span>
                )}
              </p>
              <h2 className="mt-2 text-2xl font-bold group-hover:text-purple transition-colors">{p.title}</h2>
              <p className="mt-2 text-fg-muted leading-relaxed rtl:leading-loose">{p.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-purple">{c.blog.readMore} →</span>
            </Link>
          ))}
        </div>
      </div>
      <ChatWidgetLoader t={c.ui.chat} locale={locale} />
    </main>
  );
}

export function blogPostParams(locale: Locale) {
  return getPosts(locale).map((p) => ({ slug: p.slug }));
}

export function blogPostMetadata(locale: Locale, slug: string): Metadata {
  const c = getContent(locale);
  const post = getPost(locale, slug);
  if (!post) return {};
  const base = buildMetadata(locale);
  const title = `${post.meta.title} — ${c.meta.siteName}`;
  const path = `${c.base}/blog/${slug}`;
  return {
    ...base,
    title,
    description: post.meta.description,
    alternates: { canonical: path, languages: { en: `/blog/${slug}`, ar: `/ar/blog/${slug}` } },
    openGraph: {
      ...base.openGraph,
      type: "article",
      title,
      description: post.meta.description,
      url: path,
      publishedTime: post.meta.date,
    },
    robots: post.meta.draft ? { index: false, follow: false } : undefined,
  };
}

export async function BlogPost({ locale, slug }: { locale: Locale; slug: string }) {
  const c = getContent(locale);
  const post = getPost(locale, slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return (
    <main className="min-h-screen bg-page text-fg px-5 sm:px-10 py-10 md:py-16">
      <article className="max-w-3xl mx-auto">
        <PageTopBar
          ui={c.ui}
          backHref={`${c.base}/blog`}
          backLabel={c.blog.backToBlog}
          otherLocaleHref={`${other(locale)}/blog/${slug}`}
        />
        <p className="mt-8 flex flex-wrap items-center gap-x-3 text-sm text-fg-soft">
          <time dateTime={post.meta.date}>{formatDate(post.meta.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>{c.blog.minRead.replace("{n}", String(post.meta.readingMinutes))}</span>
          {post.meta.draft && (
            <span className="rounded-full bg-purple/15 px-2 py-0.5 text-xs font-semibold text-purple">
              {c.blog.draft}
            </span>
          )}
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight rtl:leading-snug">{post.meta.title}</h1>
        <p className="mt-4 text-lg text-fg-muted leading-relaxed rtl:leading-loose">{post.meta.description}</p>
        <div className="prose-post mt-10">{content}</div>
      </article>
      <ChatWidgetLoader t={c.ui.chat} locale={locale} />
    </main>
  );
}
