import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub, FaLocationArrow } from "react-icons/fa6";

import type { Content, Project } from "@/data";
import MagicButton from "./MagicButton";
import ThemeToggle from "./ui/ThemeToggle";

/** Detail page for one project (server component, no client JS). */
export default function ProjectDetail({
  content,
  project,
}: {
  content: Content;
  project: Project;
}) {
  const { ui, base, projects } = content;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const homeProjects = `${base || "/"}#projects`;

  return (
    <main className="min-h-screen bg-page text-fg px-5 sm:px-10 py-10 md:py-16">
      <article className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={homeProjects}
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-purple transition-colors"
          >
            <FaArrowLeft className="rtl:-scale-x-100" />
            {ui.backToProjects}
          </Link>
          <div className="flex items-center gap-4 rounded-xl border border-line/10 px-4 py-2 card-surface">
            {/* Same project in the other language */}
            <a
              href={`${content.locale === "ar" ? "" : "/ar"}/projects/${project.slug}`}
              aria-label={ui.switchLangAria}
              title={ui.switchLangAria}
              className="text-sm font-semibold text-fg/80 hover:text-purple transition-colors"
            >
              {ui.switchLangLabel}
            </a>
            <ThemeToggle toLight={ui.themeToLight} toDark={ui.themeToDark} />
          </div>
        </div>

        <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight rtl:leading-snug">
          {project.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-fg-muted leading-relaxed rtl:leading-loose">
          {project.des}
        </p>

        <div className="mt-8 relative overflow-hidden rounded-3xl border border-line/10 bg-[#13162D]">
          <Image
            src={project.img}
            alt={project.title}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="w-full h-auto max-h-[480px] object-contain"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <MagicButton
            title={ui.liveSite}
            icon={<FaLocationArrow className="rtl:-scale-x-100" />}
            position="right"
            href={project.link}
            newTab
          />
          {project.github && (
            <MagicButton
              title={ui.github}
              icon={<FaGithub />}
              position="left"
              href={project.github}
              newTab
            />
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <section className="md:col-span-2 rounded-3xl border border-line/10 p-6 md:p-8 card-surface">
            <h2 className="text-xl md:text-2xl font-bold">{ui.overview}</h2>
            <p className="mt-3 text-fg-muted leading-relaxed rtl:leading-loose">
              {project.details.overview}
            </p>
            <h2 className="mt-8 text-xl md:text-2xl font-bold">{ui.myRole}</h2>
            <p className="mt-3 text-fg-muted leading-relaxed rtl:leading-loose">
              {project.details.role}
            </p>
          </section>

          <section className="rounded-3xl border border-line/10 p-6 md:p-8 card-surface">
            <h2 className="text-xl md:text-2xl font-bold">{ui.techStack}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="py-2 px-3 text-sm rounded-lg bg-chip text-fg-muted">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-line/10 p-6 md:p-8 card-surface">
          <h2 className="text-xl md:text-2xl font-bold">{ui.keyFeatures}</h2>
          <ul className="mt-4 space-y-3">
            {project.details.features.map((f) => (
              <li key={f} className="flex gap-3 text-fg-muted leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label={ui.backToProjects}>
          <Link
            href={`${base}/projects/${prev.slug}`}
            className="group rounded-2xl border border-line/10 p-5 card-surface hover:border-purple/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm text-fg-soft">
              <FaArrowLeft className="rtl:-scale-x-100" />
              {ui.prevProject}
            </span>
            <span className="mt-1 block font-semibold group-hover:text-purple transition-colors">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`${base}/projects/${next.slug}`}
            className="group rounded-2xl border border-line/10 p-5 card-surface hover:border-purple/50 transition-colors text-end"
          >
            <span className="flex items-center justify-end gap-2 text-sm text-fg-soft">
              {ui.nextProject}
              <FaArrowRight className="rtl:-scale-x-100" />
            </span>
            <span className="mt-1 block font-semibold group-hover:text-purple transition-colors">
              {next.title}
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
