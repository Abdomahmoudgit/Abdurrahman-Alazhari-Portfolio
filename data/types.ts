export type Locale = "en" | "ar";

/** A heading split so the middle part can be highlighted in the accent color. */
export type Heading = { before: string; accent: string; after?: string };

export type SocialKey = "linkedin" | "github" | "whatsapp" | "youtube" | "facebook";

export type GridItem = {
  id: number; // BentoGridItem renders special content by id (2 globe, 3 stack, 5 image, 6 email)
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  tech: string[];
  link: string;
  github?: string; // only for projects with a public repo
  details: {
    overview: string;
    role: string;
    features: string[];
  };
};

export type Content = {
  locale: Locale;
  dir: "ltr" | "rtl";
  /** URL prefix for this locale ("" for English, "/ar" for Arabic) */
  base: string;
  meta: { title: string; description: string; siteName: string };
  nav: { name: string; link: string }[];
  ui: {
    switchLangLabel: string; // text on the language button
    switchLangAria: string;
    themeToLight: string;
    themeToDark: string;
    heroGreeting: string;
    heroTyped: string[];
    heroTagline: string;
    heroHeadline: string;
    /** words from this index on are drawn in the accent color */
    heroHeadlineAccentFrom: number;
    showWork: string;
    downloadCv: string;
    copyEmail: string;
    emailCopied: string;
    stackLeft: string[];
    stackRight: string[];
    liveSite: string;
    github: string;
    details: string;
    backToProjects: string;
    overview: string;
    myRole: string;
    keyFeatures: string;
    techStack: string;
    prevProject: string;
    nextProject: string;
    copyright: string;
    chat: {
      open: string; // floating button label
      close: string;
      title: string;
      subtitle: string;
      greeting: string;
      suggestions: string[];
      placeholder: string;
      send: string;
      thinking: string;
      error: string;
      unavailable: string; // shown when the API isn't configured
      whatsapp: string; // WhatsApp button label
      whatsappMessage: string; // prefilled WhatsApp text
      whatsappProjectMessage: string; // prefilled text on a project page; {project} is replaced
      disclaimer: string;
    };
  };
  headings: {
    projects: Heading;
    testimonials: Heading;
    experience: Heading;
    skills: Heading;
    approach: Heading;
    contact: Heading;
  };
  /** Blog (/blog, /ar/blog). Posts are MDX files in content/blog/{locale}/. */
  blog: {
    nav: string;
    title: string;
    intro: string;
    empty: string;
    readMore: string;
    backToBlog: string;
    minRead: string; // "{n} min read"
    draft: string; // badge shown on drafts (dev only)
  };
  /** The printable CV page (/cv, /ar/cv). */
  cv: {
    title: string; // job title under the name
    summary: string;
    location: string;
    labels: {
      summary: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      print: string;
      downloadPdf: string;
      backHome: string;
      viewOnline: string; // Hero link to /cv
    };
  };
  contactIntro: string;
  getInTouch: string;
  form: {
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
  };
  gridItems: GridItem[];
  projects: Project[];
  testimonials: { quote: string; name: string; title: string; img: string }[];
  companies: { id: number; name: string; img?: string }[];
  workExperience: {
    id: number;
    title: string;
    company: string;
    period: string;
    desc: string;
    thumbnail: string;
  }[];
  skills: { group: string; items: string[] }[];
  education: {
    id: number;
    title: string;
    place: string;
    period: string;
    highlight: string;
  }[];
  approach: { phase: string; title: string; des: string }[];
  socialMedia: { id: number; key: SocialKey; label: string; link: string }[];
};
