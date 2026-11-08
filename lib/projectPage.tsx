import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetail from "@/components/ProjectDetail";
import { getContent, type Locale } from "@/data";
import { buildMetadata } from "@/lib/metadata";

// Shared logic for /projects/[slug] and /ar/projects/[slug].

export function projectStaticParams(locale: Locale) {
  return getContent(locale).projects.map((p) => ({ slug: p.slug }));
}

export function projectMetadata(locale: Locale, slug: string): Metadata {
  const content = getContent(locale);
  const project = content.projects.find((p) => p.slug === slug);
  if (!project) return {};

  const base = buildMetadata(locale);
  const path = `${content.base}/projects/${slug}`;
  const title = `${project.title} — ${content.meta.siteName}`;

  return {
    ...base,
    title,
    description: project.des,
    alternates: {
      canonical: path,
      languages: { en: `/projects/${slug}`, ar: `/ar/projects/${slug}` },
    },
    openGraph: { ...base.openGraph, title, description: project.des, url: path, images: [project.img] },
    twitter: { ...base.twitter, title, description: project.des, images: [project.img] },
  };
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = getContent(locale);
  const project = content.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail content={content} project={project} />;
}
