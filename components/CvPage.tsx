import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";

import type { Content } from "@/data";
import { contactEmail, cvPath, links, siteUrl } from "@/data/shared";
import PrintButton from "./PrintButton";
import ThemeToggle from "./ui/ThemeToggle";

/**
 * Printable CV built from the same data as the site (/cv and /ar/cv).
 * On screen it follows the theme; when printed it's a plain white A4 page.
 */
export default function CvPage({ content }: { content: Content }) {
  const { cv, base, ui } = content;
  const L = cv.labels;
  const contacts = [
    { label: contactEmail, href: `mailto:${contactEmail}` },
    { label: "+20 109 566 4239", href: links.whatsapp },
    { label: "linkedin.com/in/abdolrahman-alazhary", href: links.linkedin },
    { label: "github.com/Abdomahmoudgit", href: links.github },
    { label: siteUrl.replace("https://", ""), href: siteUrl + (base || "") },
  ];

  return (
    <main className="min-h-screen bg-page text-fg px-5 sm:px-10 py-8 md:py-12 print:bg-white print:text-black print:p-0">
      {/* Toolbar (hidden when printing) */}
      <div className="max-w-3xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href={base || "/"}
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-purple"
        >
          <FaArrowLeft className="rtl:-scale-x-100" />
          {L.backHome}
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line/15 px-4 py-2 text-sm hover:border-purple"
          >
            <FaDownload />
            {L.downloadPdf}
          </a>
          <PrintButton label={L.print} />
          <ThemeToggle toLight={ui.themeToLight} toDark={ui.themeToDark} />
        </div>
      </div>

      <article className="cv-sheet max-w-3xl mx-auto rounded-3xl border border-line/10 card-surface p-6 sm:p-10 print:max-w-none print:rounded-none print:border-0 print:bg-none print:p-0 print:shadow-none">
        <header className="text-center border-b border-line/15 pb-6 print:border-black/30">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight rtl:tracking-normal">
            {content.locale === "ar" ? "عبدالرحمن الأزهري" : "Abdurrahman Al-Azhari"}
          </h1>
          <p className="mt-2 text-purple print:text-black font-medium">{cv.title}</p>
          <p className="mt-1 text-sm text-fg-soft print:text-black/70">{cv.location}</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm" dir="ltr">
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="text-fg-muted hover:text-purple print:text-black underline-offset-2 hover:underline">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <Section title={L.summary}>
          <p className="text-fg-muted print:text-black leading-relaxed rtl:leading-loose">{cv.summary}</p>
        </Section>

        <Section title={L.experience}>
          {content.workExperience.map((w) => (
            <div key={w.id} className="mb-5 last:mb-0 break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-bold">{w.title}</h3>
                <span className="text-sm text-fg-soft print:text-black/70">{w.period}</span>
              </div>
              <p className="text-sm text-purple print:text-black/80">{w.company}</p>
              <p className="mt-1 text-sm text-fg-muted print:text-black leading-relaxed rtl:leading-loose">{w.desc}</p>
            </div>
          ))}
        </Section>

        <Section title={L.projects}>
          {content.projects.map((p) => (
            <div key={p.slug} className="mb-5 last:mb-0 break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-bold">
                  <a href={`${siteUrl}${base}/projects/${p.slug}`} className="hover:text-purple">
                    {p.title}
                  </a>
                </h3>
                <a href={p.link} className="text-sm text-fg-soft hover:text-purple print:text-black/70" dir="ltr">
                  {p.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>
              <p className="text-xs text-purple print:text-black/80 rtl:text-right" dir="ltr">
                {p.tech.join(" · ")}
              </p>
              <ul className="mt-1 list-disc ps-5 text-sm text-fg-muted print:text-black leading-relaxed">
                {p.details.features.slice(0, 2).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title={L.skills}>
          <dl className="space-y-2 text-sm">
            {content.skills.map((s) => (
              <div key={s.group} className="sm:flex gap-3">
                <dt className="font-semibold sm:w-44 shrink-0">{s.group}</dt>
                <dd className="text-fg-muted print:text-black rtl:text-right" dir="ltr">
                  {s.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title={L.education}>
          {content.education.map((e) => (
            <div key={e.id} className="mb-4 last:mb-0 break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-bold">{e.title}</h3>
                <span className="text-sm text-fg-soft print:text-black/70">{e.period}</span>
              </div>
              <p className="text-sm text-purple print:text-black/80">{e.place}</p>
              <p className="text-sm text-fg-muted print:text-black">{e.highlight}</p>
            </div>
          ))}
        </Section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 print:mt-5">
      <h2 className="mb-3 border-b border-line/15 pb-1 text-sm font-bold uppercase tracking-wider rtl:tracking-normal text-purple print:text-black print:border-black/30">
        {title}
      </h2>
      {children}
    </section>
  );
}
