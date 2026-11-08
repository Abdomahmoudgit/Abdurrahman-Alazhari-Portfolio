import type { Content } from "./types";
import {
  companyLogos,
  experienceThumbnails,
  gridLayout,
  links,
  projectBase,
  skillItems,
  testimonialImages,
} from "./shared";

// English site copy. Arabic lives in data/ar.ts with the same shape.

// Same order as projectBase in data/shared.ts.
const projectText = [
  {
    title: "Home Agent — Smart Home Company Platform",
    des: "Production Arabic (RTL) website for a smart-home installation company, with an admin dashboard that works as both a CMS and a sales CRM. Built with Next.js 15, TypeScript and Supabase.",
    details: {
      overview:
        "Home Agent installs smart-home systems in Egypt. The public site is fully Arabic (RTL) and presents packages and a product catalog, lets visitors book an inspection, recommends a package through a 5-question quiz, and includes an interactive smart-home demo. Behind it, an admin dashboard lets the business run the site and its sales without a developer.",
      role: "I built and shipped the whole platform: the public website, the admin dashboard, the Supabase backend and the deployment on Cloudflare Workers via OpenNext.",
      features: [
        "Admin CMS for all site content: products, packages, projects, FAQs, site settings and media uploads",
        "Lead-management CRM with a 9-stage sales pipeline, activity notes, filters and conversion reports (inspection and sales rates)",
        "Role-based access (admin / marketing) with Supabase Auth and Row Level Security — visitors can submit requests without logging in, but only staff can read or edit data",
        "Real-time alerts for new inspection requests via Telegram and email, designed so a failed alert never blocks saving the request",
        "Covered with unit tests (Vitest) and end-to-end tests (Playwright)",
      ],
    },
  },
  {
    title: "University Housing Management System",
    des: "Role-based dashboard (Student / Supervisor / Admin) with full Arabic RTL support. Scalable architecture with reusable components; state and API data managed with Redux Toolkit and React Query.",
    details: {
      overview:
        "A management system for Al-Azhar University's student housing, built as my graduation project. It gives students, supervisors and admins their own dashboards to handle housing workflows, fully in Arabic.",
      role: "I built the entire frontend: the architecture, reusable components, role-based dashboards and the API integration.",
      features: [
        "Role-based dashboards for Students, Supervisors and Admins",
        "Full Arabic right-to-left (RTL) interface",
        "Scalable frontend architecture built on reusable components",
        "Application state managed with Redux Toolkit and server data with React Query",
      ],
    },
  },
  {
    title: "Exeem Platform",
    des: "Multi-purpose platform for missing-people search & awareness. Built 5+ production websites with Next.js and React.js and 20+ reusable components with Tailwind CSS, SCSS, and shadcn/ui.",
    details: {
      overview:
        "Exeem is a multi-purpose platform focused on searching for missing people and raising awareness. It spans several production websites, including the main site, social media, services, library and the missing-people platform.",
      role: "As a Frontend Developer at Exeem, I translated requirements into responsive, reusable interfaces across 5+ production projects.",
      features: [
        "5+ production websites built with Next.js and React.js",
        "20+ reusable, responsive UI components with Tailwind CSS, SCSS and shadcn/ui",
        "Better performance by reducing unnecessary Client Components and using Next.js Server Components",
        "Consistent UI patterns shared across the platform's sites",
      ],
    },
  },
  {
    title: "Hamada Soliman Campaign Website",
    des: "Fully responsive, SEO-optimized campaign website built from scratch with Next.js, focused on performance, accessibility, and production readiness.",
    details: {
      overview:
        "The official election campaign website for Dr. Hamada Soliman, presenting the candidate's profile and campaign activities.",
      role: "I designed and developed the website from scratch as a freelance project.",
      features: [
        "Fully responsive layout for phones, tablets and desktops",
        "SEO-optimized pages for better search visibility",
        "Focus on performance, accessibility and production readiness",
      ],
    },
  },
  {
    title: "Movie Recommendation App",
    des: "Built the movie details experience, implementing key UI sections and integrating movie data through APIs. Also coordinated development tasks across the team.",
    details: {
      overview:
        "A movie recommendation web app built as a team project during the Digital Egypt Pioneers Initiative (DEPI) React training.",
      role: "I built the movie details experience and supported project management by coordinating development tasks across the team.",
      features: [
        "Movie details page with the key UI sections",
        "Movie data integrated through external APIs",
        "Responsive layout with Bootstrap",
      ],
    },
  },
  {
    title: "Daniels — Route Mid-Exam (Top Scorer 104/100)",
    des: "Fully responsive portfolio website with reusable UI components and interactive carousels. Achieved Top Scorer (104/100) in the Web Development Program.",
    details: {
      overview:
        "A responsive portfolio website built for the Route IT Training Center mid-program exam.",
      role: "I built the whole website with HTML, CSS and Bootstrap.",
      features: [
        "Fully responsive layout",
        "Reusable UI components and interactive carousel elements",
        "Achieved Top Scorer (104/100) in the Web Development Program",
      ],
    },
  },
];

const gridText: Record<number, { title: string; description: string }> = {
  1: { title: "Building production web apps for real clients", description: "" },
  2: { title: "Collaborating with frontend & backend teams in Agile/Scrum", description: "" },
  3: {
    title: "Tested & production-ready",
    description: "Typed end to end, unit-tested with Vitest and covered by Playwright E2E tests.",
  },
  4: { title: "Maintainable UI architecture & frontend performance", description: "" },
  5: {
    title: "Building reusable dashboard interfaces",
    description:
      "REST & GraphQL APIs, server and client state with React Query and Redux Toolkit.",
  },
  6: { title: "Let's collaborate on a project!", description: "" },
};

const en: Content = {
  locale: "en",
  dir: "ltr",
  base: "",
  meta: {
    title: "Abdurrahman Al-Azhari — Frontend Engineer | React.js & Next.js",
    description:
      "Frontend Engineer building production web applications with React.js and Next.js — reusable dashboard interfaces, REST/GraphQL APIs, React Query and Redux Toolkit.",
    siteName: "Abdurrahman Al-Azhari",
  },
  nav: [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ],
  ui: {
    switchLangLabel: "ع",
    switchLangAria: "عرض الموقع بالعربي",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    heroGreeting: "Hi! I'm Abdurrahman Al-Azhari, a professional",
    heroTyped: ["React.js Developer.", "Next.js Developer.", "Full-Stack Developer.", "Computer Engineer."],
    heroTagline: "React.js · Next.js · TypeScript · Supabase",
    heroHeadline: "Building modern, responsive, and interactive user interfaces.",
    heroHeadlineAccentFrom: 4,
    showWork: "Show my work",
    downloadCv: "Download My CV",
    copyEmail: "Copy my email address",
    emailCopied: "Email is Copied!",
    stackLeft: ["TypeScript", "Vitest", "Playwright"],
    stackRight: ["Zod", "Supabase", "Cloudflare"],
    liveSite: "Live Site",
    github: "GitHub",
    details: "Details",
    backToProjects: "Back to projects",
    overview: "Overview",
    myRole: "My role",
    keyFeatures: "Key features",
    techStack: "Tech stack",
    prevProject: "Previous project",
    nextProject: "Next project",
    copyright: "Abdurrahman Al-Azhari",
    chat: {
      open: "Ask about Abdurrahman",
      close: "Close chat",
      title: "Ask me anything",
      subtitle: "AI assistant · answers from Abdurrahman's portfolio",
      greeting:
        "Hi! I can answer questions about Abdurrahman's experience, projects and skills. What would you like to know?",
      suggestions: [
        "What did he build for Home Agent?",
        "What's his tech stack?",
        "Is he available for freelance work?",
      ],
      placeholder: "Type your question…",
      send: "Send",
      thinking: "Thinking…",
      error: "Something went wrong. You can reach Abdurrahman directly on WhatsApp.",
      unavailable: "The assistant is offline right now — message Abdurrahman on WhatsApp instead.",
      whatsapp: "Chat on WhatsApp",
      whatsappMessage: "Hi Abdurrahman, I saw your portfolio and I'd like to talk about working together.",
      whatsappProjectMessage: "Hi Abdurrahman, I saw your project \"{project}\" on your portfolio and I'd like to talk.",
      disclaimer: "AI answers can be wrong — confirm details with Abdurrahman.",
    },
  },
  headings: {
    projects: { before: "A glimpse of my ", accent: "latest projects" },
    testimonials: { before: "What I've ", accent: "accomplished so far" },
    experience: { before: "My ", accent: "work experience" },
    skills: { before: "My ", accent: "skills & education" },
    approach: { before: "My ", accent: "approach" },
    contact: { before: "Ready to take ", accent: "your", after: " digital presence to the next level?" },
  },
  blog: {
    nav: "Blog",
    title: "Blog",
    intro: "Notes on the things I build — architecture decisions, lessons learned and what I'd do differently.",
    empty: "No posts yet — check back soon.",
    readMore: "Read article",
    backToBlog: "All articles",
    minRead: "{n} min read",
    draft: "Draft",
  },
  cv: {
    title: "Frontend Engineer | React.js & Next.js",
    summary:
      "Frontend Engineer with hands-on experience building production web applications using React.js and Next.js. Skilled in developing reusable dashboard interfaces, integrating REST/GraphQL APIs, and managing server and client state with React Query and Redux Toolkit. Recently shipped a full-stack platform with Next.js 15, Supabase and Cloudflare. Focused on maintainable UI architecture, responsive design, testing and frontend performance.",
    location: "Cairo, Egypt",
    labels: {
      summary: "Summary",
      experience: "Experience",
      projects: "Projects",
      skills: "Technical skills",
      education: "Education & training",
      print: "Print / Save as PDF",
      downloadPdf: "Download PDF",
      backHome: "Back to portfolio",
      viewOnline: "View CV online",
    },
  },
  contactIntro:
    "Let's connect and explore how I can help you build high-quality, responsive, and scalable web solutions.",
  getInTouch: "Let's get in touch",
  form: {
    name: "Your name",
    email: "Your email",
    message: "Message",
    messagePlaceholder: "Tell me about your project…",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks! Your message was sent — I'll reply soon.",
    error: "Something went wrong. Please email me at",
  },
  gridItems: Object.entries(gridLayout).map(([id, layout]) => ({
    id: Number(id),
    ...layout,
    ...gridText[Number(id)],
  })),
  projects: projectBase.map((p, i) => ({ ...p, iconLists: [...p.iconLists], tech: [...p.tech], ...projectText[i] })),
  testimonials: [
    {
      quote:
        "I worked with Abdelrahman on our graduation project, where he was responsible for the frontend development. Honestly, he is a highly dedicated and skilled developer who understands his work well and executes tasks efficiently. He tackles challenges with practical and quick solutions while always striving to enhance the final product. Based on my experience working with him, I’d rate him 4.9 out of 5, and I highly recommend him for any team in need of a proficient frontend developer.",
      name: "Eng. Ahmed Yasser",
      title: "Frontend Engineer",
      img: testimonialImages[0],
    },
    {
      quote:
        "Eng. Abdelrahman is incredibly disciplined in his work and demonstrates strong leadership within the team. He is highly cooperative and never hesitates to share his knowledge with others. In fact, he has conducted full sessions explaining topics we were unfamiliar with. May Allah bless him and grant him success. ❤️❤️❤️",
      name: "Eng. Abdullah Mohamed",
      title: "Frontend Engineer",
      img: testimonialImages[1],
    },
    {
      quote:
        "One of Abdelrahman’s greatest strengths is his ability to listen attentively and absorb knowledge from everyone around him. He has an incredible passion for learning and continuously seeks to expand his expertise from every possible source. His adaptability and curiosity make him a well-rounded developer. His dedication to improvement and staying ahead in the field allows him to make well-informed decisions in both his professional and personal life.",
      name: "Eng. Abdullah Samir",
      title: "Backend Engineer",
      img: testimonialImages[2],
    },
    {
      quote:
        "Working with Abdelrahman has been a fantastic experience. He is truly one of the best! When it comes to leadership, he is absolutely top-notch. His ability to organize and structure everything is remarkable. If he ever considers pursuing a leadership role, I highly recommend it—he has all the qualities of a great leader. His communication skills, organization, and ability to create engaging content are outstanding. Honestly, hats off to him! This is not just a compliment; it’s based on my firsthand experience working with him.",
      name: "Youssef Shaaban",
      title: "Full Stack Developer",
      img: testimonialImages[3],
    },
  ],
  companies: [
    "Home Agent",
    "Qumra Cloud",
    "Exeem",
    "Elevate Tech Academy",
    "Route IT Training Center",
    "DEPI",
    "Al-Azhar University",
  ].map((name, i) => ({ id: i + 1, name, img: companyLogos[i] })),
  workExperience: [
    {
      id: 5,
      title: "Full-Stack Next.js Developer (Freelance)",
      company: "Home Agent – Fayoum, Egypt",
      period: "Oct 2026 – Nov 2026",
      desc: "Built and shipped homeagenteg.com, a production Arabic (RTL) website for a smart-home company, plus an admin dashboard that works as a CMS and a lead CRM with a 9-stage sales pipeline and conversion reports. Implemented role-based access with Supabase Auth and Row Level Security, Telegram and email lead alerts, and Vitest + Playwright tests; deployed on Cloudflare Workers.",
      thumbnail: experienceThumbnails[0],
    },
    {
      id: 1,
      title: "Next.js Developer",
      company: "Qumra Cloud – Remote (Egypt)",
      period: "Oct 2025 – Jan 2026",
      desc: "Built core React/Next.js dashboard modules for Products, Orders, Notifications, and Offers. Built 30+ reusable UI components with TypeScript, Tailwind CSS, and shadcn/ui. Integrated REST/GraphQL APIs with React Query (queries, mutations, pagination, caching) in an Agile/Scrum team using ClickUp.",
      thumbnail: experienceThumbnails[1],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Exeem – Cairo, Egypt (Remote)",
      period: "Jan 2025 – Sep 2025",
      desc: "Delivered 5+ production projects with Next.js and React.js. Improved performance by reducing unnecessary Client Components and leveraging Next.js Server Components. Developed 20+ reusable, responsive UI components with Tailwind CSS, SCSS, and shadcn/ui.",
      thumbnail: experienceThumbnails[2],
    },
    // Training (Route, DEPI, Elevate) lives only in `education` to avoid repeating it.
  ],
  skills: [
    { group: "Frontend", items: skillItems.frontend },
    { group: "State & APIs", items: skillItems.state },
    { group: "Tools", items: skillItems.tools },
  ],
  education: [
    {
      id: 1,
      title: "B.Sc. in Computer Science & Engineering",
      place: "Al-Azhar University, Faculty of Engineering — Cairo",
      period: "2020 – 2025",
      highlight: "Grade: Very Good · Graduation Project: Excellent",
    },
    {
      id: 2,
      title: "Frontend Development Bootcamp",
      place: "Elevate Tech Academy — Online",
      period: "Feb 2026 – Jul 2026",
      highlight: "Next.js · Clean Architecture · APIs · Git · Agile/Scrum",
    },
    {
      id: 3,
      title: "Frontend Development Diploma",
      place: "Route IT Training Center — Cairo",
      period: "Sep 2024 – Mar 2025",
      highlight: "React.js · Responsive UI · Top Scorer (104/100)",
    },
    {
      id: 4,
      title: "React Developer Training",
      place: "Digital Egypt Pioneers Initiative (DEPI) — Cairo",
      period: "2023 – 2024",
      highlight: "React.js · Team Leader · Built the Movie Recommendation App",
    },
  ],
  approach: [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      des: "We start by defining project goals, target users, and key features. I focus on user experience, ensuring a smooth and scalable structure before diving into development.",
    },
    {
      phase: "Phase 2",
      title: "Development & Progress Update",
      des: "With a clear roadmap, I bring ideas to life using React and modern front-end tools. You'll get regular updates, ensuring alignment with the project vision.",
    },
    {
      phase: "Phase 3",
      title: "Testing & Launch",
      des: "Before launch, I optimize performance, ensure responsiveness, and fix any issues. The result? A smooth, high-quality web experience ready for users.",
    },
  ],
  socialMedia: [
    { id: 1, key: "linkedin", label: "LinkedIn", link: links.linkedin },
    { id: 2, key: "github", label: "GitHub", link: links.github },
    { id: 3, key: "whatsapp", label: "WhatsApp", link: links.whatsapp },
    { id: 4, key: "youtube", label: "YouTube", link: links.youtube },
    { id: 5, key: "facebook", label: "Facebook", link: links.facebook },
  ],
};

export default en;
