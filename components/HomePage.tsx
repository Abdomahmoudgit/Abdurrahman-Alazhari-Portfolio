import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Skills from "@/components/Skills";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { contactEmail, getContent, siteUrl, type Locale } from "@/data";
import { getPosts } from "@/lib/blog";

// Below-the-fold client sections are split into their own chunks.
// (Skills is a server component with no client JS, so it's imported directly.)
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

/** The whole one-page site for one language ("/" or "/ar"). */
export default function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  // The Blog link appears once there's at least one published post
  // (desktop only, so the floating navbar still fits on phones).
  const navItems = getPosts(locale).length
    ? [...content.nav, { name: content.blog.nav, link: `${content.base}/blog`, desktopOnly: true }]
    : content.nav;

  // Structured data so search engines understand who this site is about.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdurrahman Al-Azhari",
    alternateName: "عبدالرحمن الأزهري",
    jobTitle: "Frontend Engineer",
    url: siteUrl,
    image: `${siteUrl}/mineImage.webp`,
    email: `mailto:${contactEmail}`,
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Al-Azhar University" },
    knowsAbout: content.skills.flatMap((s) => s.items),
    sameAs: content.socialMedia.filter((s) => s.key !== "whatsapp").map((s) => s.link),
  };

  return (
    <main className="relative bg-page flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
          ui={content.ui}
          otherLocaleHref={locale === "ar" ? "/" : "/ar"}
        />
        <Hero ui={content.ui} cvLabel={content.cv.labels.viewOnline} base={content.base} />
        <Grid items={content.gridItems} ui={content.ui} />
        <RecentProjects
          projects={content.projects}
          heading={content.headings.projects}
          ui={content.ui}
          base={content.base}
        />
        <Clients
          testimonials={content.testimonials}
          companies={content.companies}
          heading={content.headings.testimonials}
          rtl={content.dir === "rtl"}
        />
        <Experience items={content.workExperience} heading={content.headings.experience} />
        <Skills
          skills={content.skills}
          education={content.education}
          heading={content.headings.skills}
        />
        <Approach cards={content.approach} heading={content.headings.approach} />
        <Footer content={content} />
        <ChatWidgetLoader t={content.ui.chat} locale={locale} />
      </div>
    </main>
  );
}
