// Language-neutral values shared by data/en.ts and data/ar.ts.

export const siteUrl = "https://abdurrahmanalazhari.vercel.app";
export const contactEmail = "abdolrahmanalazhary@gmail.com";
export const cvPath = "/Abdurrahman-Alazhari-CV.pdf";
// Web3Forms public access key for the contact form (safe to expose; it only
// lets people send messages to the owner's inbox). Empty = show mailto button.
export const web3formsKey = "be8efcba-f2ce-4863-8c7f-e625cbc7b255";

export const links = {
  linkedin: "https://www.linkedin.com/in/abdolrahman-alazhary",
  github: "https://github.com/Abdomahmoudgit",
  whatsapp: "https://wa.me/201095664239",
  youtube: "https://youtube.com/@abdolrahmanmahmoud1542?si=XyYks2sOJ9rCkZMj",
  facebook: "https://www.facebook.com/AbdurrahmanM.Alazhari/",
};

/** Layout/image settings for the bento grid, keyed by grid item id. */
export const gridLayout = {
  1: {
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  2: {
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  3: {
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  4: {
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },
  5: {
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute end-0 bottom-0 md:w-96 w-60 hidden md:block opacity-40 dark:opacity-100",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  6: {
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
} as const;

/** Language-neutral project data, in display order. */
export const projectBase = [
  {
    id: 1,
    slug: "university-housing-system",
    img: "/HousingSystem.webp",
    iconLists: ["/re.svg", "/redux.svg", "/bootstrap.svg"],
    tech: ["React.js", "Redux Toolkit", "React Query", "Bootstrap"],
    link: "https://e3maralazhar.vercel.app/",
  },
  {
    id: 2,
    slug: "exeem-platform",
    img: "/ExeemPlatform.webp",
    iconLists: ["/next.svg", "/re.svg", "/tailwind.svg", "/scss.svg", "/shadcn.png"],
    tech: ["Next.js", "React.js", "Tailwind CSS", "SCSS", "shadcn/ui"],
    link: "https://exeemegypt.vercel.app/",
  },
  {
    id: 3,
    slug: "hamada-soliman-campaign",
    img: "/HamadaSoliman.webp",
    iconLists: ["/next.svg", "/re.svg", "/scss.svg"],
    tech: ["Next.js", "SEO", "Responsive Design"],
    link: "https://hamadasoliman.vercel.app/",
  },
  {
    id: 4,
    slug: "movie-recommendation-app",
    img: "/FilmDetails.webp",
    iconLists: ["/re.svg", "/javascript.png", "/bootstrap.svg", "/vite.svg"],
    tech: ["React.js", "API Integration", "JavaScript", "Bootstrap"],
    link: "https://movies-app-zeta-one.vercel.app/",
    github: "https://github.com/Abdomahmoudgit/Movies-App",
  },
  {
    id: 5,
    slug: "daniels-route-exam",
    img: "/Exam.webp",
    iconLists: ["/html.svg", "/css.svg", "/bootstrap.svg"],
    tech: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
    link: "https://bit.ly/3YP3rOI",
    github: "https://github.com/Abdomahmoudgit/Bootstrap-Exam",
  },
] as const;

export const testimonialImages = [
  "/ahmedyaser.webp",
  "/AbdullahMohamed.webp",
  "/profile.webp",
  "/yousifshaban.webp",
];

export const experienceThumbnails = ["/exp1.svg", "/exp2.svg", "/exp3.webp", "/exp4.svg"];

export const companyLogos: (string | undefined)[] = [
  undefined, // Qumra Cloud (no logo yet)
  "/Exeem.png",
  undefined, // Elevate Tech Academy (no logo yet)
  "/Route.webp",
  "/depiEN.webp",
  "/AU.webp",
];

export const skillItems = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS",
    "shadcn/ui",
  ],
  state: ["Redux Toolkit", "React Query", "REST APIs", "GraphQL", "React Hook Form", "Zod"],
  tools: ["Git", "GitHub", "Vite", "Postman", "Swagger", "Figma", "Agile/Scrum", "Jira"],
};
