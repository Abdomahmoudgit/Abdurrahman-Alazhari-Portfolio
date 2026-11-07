import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, siteUrl, skills, socialMedia } from "@/data";

// Below-the-fold client sections are split into their own chunks.
// (Skills is a server component with no client JS, so it's imported directly.)
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdurrahman Al-Azhari",
  jobTitle: "Frontend Engineer",
  url: siteUrl,
  image: `${siteUrl}/mineImage.webp`,
  email: "mailto:abdolrahmanalazhary@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Al-Azhar University",
  },
  knowsAbout: skills.flatMap((s) => s.items),
  sameAs: socialMedia
    .filter((s) => !s.link.includes("wa.me"))
    .map((s) => s.link),
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Skills />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
