import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// NOTE: BentoGridItem renders special content based on `id`
// (2 = globe, 3 = tech-stack lists, 5 = image styling, 6 = copy-email).
export const gridItems = [
  {
    id: 1,
    title: "Frontend Engineer building production apps with React & Next.js",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborating with frontend & backend teams in Agile/Scrum",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "React Query, Redux Toolkit, GraphQL, shadcn/ui, React Hook Form, Zod",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Maintainable UI architecture & frontend performance",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building reusable dashboard interfaces",
    description:
      "REST & GraphQL APIs, server and client state with React Query and Redux Toolkit.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Let's collaborate on a project!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "University Housing Management System",
    des: "Role-based dashboard (Student / Supervisor / Admin) with full Arabic RTL support. Scalable architecture with reusable components; state and API data managed with Redux Toolkit and React Query.",
    img: "/HousingSystem.webp",
    iconLists: ["/re.svg", "/redux.svg", "/bootstrap.svg"],
    link: "https://e3maralazhar.vercel.app/",
  },
  {
    id: 2,
    title: "Exeem Platform",
    des: "Multi-purpose platform for missing-people search & awareness. Built 5+ production websites with Next.js and React.js and 20+ reusable components with Tailwind CSS, SCSS, and shadcn/ui.",
    img: "/ExeemPlatform.webp",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/tailwind.svg",
      "/scss.svg",
      "/shadcn.png",
    ],
    link: "https://exeemegypt.vercel.app/",
  },
  {
    id: 3,
    title: "Hamada Soliman Campaign Website",
    des: "Fully responsive, SEO-optimized campaign website built from scratch with Next.js, focused on performance, accessibility, and production readiness.",
    img: "/HamadaSoliman.webp",
    iconLists: ["/next.svg", "/re.svg", "/scss.svg"],
    link: "https://hamadasoliman.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Recommendation App",
    des: "Built the movie details experience, implementing key UI sections and integrating movie data through APIs. Also coordinated development tasks across the team.",
    img: "/FilmDetails.webp",
    iconLists: ["/re.svg", "/javascript.png", "/bootstrap.svg", "/vite.svg"],
    link: "https://movies-app-zeta-one.vercel.app/",
  },
  {
    id: 5,
    title: "Daniels — Route Mid-Exam (Top Scorer 104/100)",
    des: "Fully responsive portfolio website with reusable UI components and interactive carousels. Achieved Top Scorer (104/100) in the Web Development Program.",
    img: "/Exam.webp",
    iconLists: ["/html.svg", "/css.svg", "/bootstrap.svg"],
    link: "https://bit.ly/3YP3rOI",
  },
];

export const testimonials = [
  {
    quote:
      "I worked with Abdelrahman on our graduation project, where he was responsible for the frontend development. Honestly, he is a highly dedicated and skilled developer who understands his work well and executes tasks efficiently. He tackles challenges with practical and quick solutions while always striving to enhance the final product. Based on my experience working with him, I'd rate him 4.9 out of 5, and I highly recommend him for any team in need of a proficient frontend developer.",
    name: "Eng. Ahmed Yasser",
    title: "Frontend Engineer",
    img: "/ahmedyaser.webp",
  },
  {
    quote:
      "Eng. Abdelrahman is incredibly disciplined in his work and demonstrates strong leadership within the team. He is highly cooperative and never hesitates to share his knowledge with others. In fact, he has conducted full sessions explaining topics we were unfamiliar with. May Allah bless him and grant him success. ❤️❤️❤️",
    name: "Eng. Abdullah Mohamed",
    title: "Frontend Engineer",
    img: "/AbdullahMohamed.webp",
  },
  {
    quote:
      "One of Abdelrahman's greatest strengths is his ability to listen attentively and absorb knowledge from everyone around him. He has an incredible passion for learning and continuously seeks to expand his expertise from every possible source. His adaptability and curiosity make him a well-rounded developer. His dedication to improvement and staying ahead in the field allows him to make well-informed decisions in both his professional and personal life.",
    name: "Eng. Abdullah Samir",
    title: "Backend Engineer",
    img: "/profile.webp",
  },
  {
    quote:
      "Working with Abdelrahman has been a fantastic experience. He is truly one of the best! When it comes to leadership, he is absolutely top-notch. His ability to organize and structure everything is remarkable. If he ever considers pursuing a leadership role, I highly recommend it—he has all the qualities of a great leader. His communication skills, organization, and ability to create engaging content are outstanding. Honestly, hats off to him! This is not just a compliment; it's based on my firsthand experience working with him.",
    name: "Youssef Shaaban",
    title: "Full Stack Developer",
    img: "/yousifshaban.webp",
  },
];

// Companies without `img` render a letter badge instead of a logo.
export const companies: { id: number; name: string; img?: string }[] = [
  { id: 1, name: "Qumra Cloud" },
  { id: 2, name: "Exeem", img: "/Exeem.png" },
  { id: 3, name: "Elevate Tech Academy" },
  { id: 4, name: "Route IT Training Center", img: "/Route.webp" },
  { id: 5, name: "DEPI", img: "/depiEN.webp" },
  { id: 6, name: "Al-Azhar University", img: "/AU.webp" },
];

export const workExperience = [
  {
    id: 1,
    title: "Next.js Developer",
    company: "Qumra Cloud – Remote (Egypt)",
    period: "Oct 2025 – Jan 2026",
    desc: "Built core React/Next.js dashboard modules for Products, Orders, Notifications, and Offers. Built 30+ reusable UI components with TypeScript, Tailwind CSS, and shadcn/ui. Integrated REST/GraphQL APIs with React Query (queries, mutations, pagination, caching) in an Agile/Scrum team using ClickUp.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Exeem – Cairo, Egypt (Remote)",
    period: "Jan 2025 – Sep 2025",
    desc: "Delivered 5+ production projects with Next.js and React.js. Improved performance by reducing unnecessary Client Components and leveraging Next.js Server Components. Developed 20+ reusable, responsive UI components with Tailwind CSS, SCSS, and shadcn/ui.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Development Diploma",
    company: "Route IT Training Center – Cairo, Egypt",
    period: "Sep 2024 – Mar 2025",
    desc: "Intensive React.js and responsive UI training. Achieved Top Scorer (104/100) in the Web Development Program.",
    thumbnail: "/exp3.webp",
  },
  {
    id: 4,
    title: "React Developer Training",
    company: "Digital Egypt Pioneers Initiative (DEPI) – Cairo",
    period: "2023 – 2024",
    desc: "Hands-on React.js training through real projects. Served as Team Leader and built the Movie Recommendation App.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    label: "LinkedIn",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/abdolrahman-alazhary",
  },
  {
    id: 2,
    label: "GitHub",
    Icon: FaGithub,
    link: "https://github.com/Abdomahmoudgit",
  },
  {
    id: 3,
    label: "WhatsApp",
    Icon: FaWhatsapp,
    link: "https://wa.me/201095664239",
  },
  {
    id: 4,
    label: "Instagram",
    Icon: FaInstagram,
    link: "https://instagram.com/abdolrahmanmahmoud1542",
  },
  {
    id: 5,
    label: "Website",
    Icon: FaGlobe,
    link: "https://abdolrahman.dev",
  },
];
