export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "React / Next.js Frontend Developer",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Modern UI & Performance",
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
      "Next.js, React, Tailwind CSS, Bootstrap, Shadcn UI, SASS, Git & GitHub",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Problem-Solver & Innovator",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on exciting front-end projects",
    description:
      "Working on real-world React/Next.js apps focused on UX, SEO, and speed.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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

// const iconPaths = {
//   React: "/re.svg",
//   Tailwind: "tail.svg",
//   TypeScript: "/ts.svg",
//   Bootstrap: "/bootstrap.svg",
//   SCSS: "/scss.svg",
//   JavaScript: "/javascript.png",
//   Vite: "/vite.svg",
//   HTML: "/html.svg",
//   CSS: "/css.svg",
//   YouTube: "/youtube.svg",
// };
export const projects = [
  // 1️⃣ University Housing System
  {
    id: 1,
    title: "University Housing System (Graduation Project)",
    des: "Built the entire frontend using React.js, Redux Toolkit, and SCSS with full Arabic support and role-based dashboards.",
    img: "/HousingSystem.png",
    iconLists: ["/re.svg", "/redux.svg", "/scss.svg"],
    link: "https://e3maralazhar.vercel.app/",
  },

  // 2️⃣ Exeem Platform
  {
    id: 2,
    title: "Exeem Platform",
    des: "A multi-purpose platform focused on social media for missing people search & awareness. Developed and launched 5+ production-ready websites using Next.js and React.js, improved website performance by reducing load time by 30% through code optimization and SEO best practices, and built 20+ reusable UI components with SCSS, Tailwind CSS, and Shadcn UI library. Collaborated with a 5-member team to deliver high-quality, user-friendly digital platforms. Projects include: Exeem Main Website, Exeem Social Media, Exeem Services, Exeem Library, Exeem Missing Platform.",
    img: "/ExeemPlatform.png", // 🔹 ضع صورة مناسبة هنا
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/scss.svg",
      "/tailwind.svg",
      "/shadcn.png",
    ],
    link: "https://exeemegypt.vercel.app/",
  },

  // 3️⃣ Dr. Hamada Soliman Campaign Website
  {
    id: 3,
    title: "Dr. Hamada Soliman Campaign Website",
    des: "Official election campaign website showcasing candidate profile and campaign activities.",
    img: "/HamadaSoliman.png", // 🔹 ضع صورة مناسبة هنا
    iconLists: ["/next.svg", "/re.svg", "/scss.svg"],
    link: "https://hamadasoliman.vercel.app/",
  },

  // 4️⃣ Route Academy Exam Achievement
  {
    id: 4,
    title: "Route Academy Exam Achievement - Top Scorer",
    des: "Secured the highest score of 104/100 in the Route Academy exam, showcasing exceptional web development expertise and problem-solving skills.",
    img: "/Exam.jpg",
    iconLists: [
      "/bootstrap.svg",
      "/javascript.png",
      "/scss.svg",
      "/html.svg",
      "/css.svg",
    ],
    link: "https://bit.ly/3YP3rOI",
  },

  // 5️⃣ Electrified Project
  {
    id: 5,
    title: "Electrified Project - Dynamic Learning Website",
    des: "A website designed for learning purposes, showcasing dynamic components and responsive design.",
    img: "/Electrified.jpg",
    iconLists: [
      "/re.svg",
      "/bootstrap.svg",
      "/scss.svg",
      "/javascript.png",
      "/html.svg",
      "/css.svg",
    ],
    link: "https://electrifiedproject.vercel.app/",
  },

  // 6️⃣ Graduation Project: Film Details Section
  {
    id: 6,
    title: "Graduation Project - Film Details Section",
    des: "Part of the Digital Egypt Pioneers Initiative, focusing on designing a responsive Film Details section with customizable components.",
    img: "/FilmDetails.jpg",
    iconLists: ["/re.svg", "/vite.svg", "/bootstrap.svg", "/scss.svg"],
    link: "https://movies-app-zeta-one.vercel.app/",
  },

  // 7️⃣ Bookmark Management App
  {
    id: 7,
    title: "Bookmark Management App - Easy Bookmarking",
    des: "A CRUD application with validation, allowing users to manage bookmarks efficiently and visit sites directly.",
    img: "/BookmarkApp.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.png"],
    link: "https://abdomahmoudgit.github.io/assignment9Route/",
  },
];

export const testimonials = [
  {
    quote:
      "I worked with Abdelrahman on our graduation project, where he was responsible for the frontend development. Honestly, he is a highly dedicated and skilled developer who understands his work well and executes tasks efficiently. He tackles challenges with practical and quick solutions while always striving to enhance the final product. Based on my experience working with him, I'd rate him 4.9 out of 5, and I highly recommend him for any team in need of a proficient frontend developer.",
    name: "Eng. Ahmed Yasser",
    title: "Frontend Engineer",
    img: "/ahmedyaser.jpg",
  },
  {
    quote:
      "Eng. Abdelrahman is incredibly disciplined in his work and demonstrates strong leadership within the team. He is highly cooperative and never hesitates to share his knowledge with others. In fact, he has conducted full sessions explaining topics we were unfamiliar with. May Allah bless him and grant him success. ❤️❤️❤️",
    name: "Eng. Abdullah Mohamed",
    title: "Frontend Engineer",
    img: "/AbdullahMohamed.jpg",
  },
  {
    quote:
      "One of Abdelrahman's greatest strengths is his ability to listen attentively and absorb knowledge from everyone around him. He has an incredible passion for learning and continuously seeks to expand his expertise from every possible source. His adaptability and curiosity make him a well-rounded developer. His dedication to improvement and staying ahead in the field allows him to make well-informed decisions in both his professional and personal life.",
    name: "Eng. Abdullah Samir",
    title: "Backend Engineer",
    img: "/profile.svg",
  },
  {
    quote:
      "Working with Abdelrahman has been a fantastic experience. He is truly one of the best! When it comes to leadership, he is absolutely top-notch. His ability to organize and structure everything is remarkable. If he ever considers pursuing a leadership role, I highly recommend it—he has all the qualities of a great leader. His communication skills, organization, and ability to create engaging content are outstanding. Honestly, hats off to him! This is not just a compliment; it's based on my firsthand experience working with him.",
    name: "Youssef Shaaban",
    title: "Full Stack Developer",
    img: "/yousifshaban.jpg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];
export const companies = [
  {
    id: 1,
    name: "Exeem",
    img: "/Exeem.png",
  },
  {
    id: 2,
    name: "Al-azhar University",
    img: "/AU.jpg",
  },
  {
    id: 3,
    name: "Route Academy",
    img: "/Route.jpg",
  },
  {
    id: 4,
    name: "DEPI",
    img: "/depiEN.png",
  },

  {
    id: 5,
    name: "Azhar University Hostel",
    img: "/Unihousing.jpg",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Next.js Developer",
    company: "Exeem – Cairo, Egypt – Remote",
    period: "Feb 2025 – Sep 2025 (7 months)",
    desc: "Developed and launched 5+ production-ready websites using Next.js and React.js. Improved website performance by reducing load time by 30% through code optimization and SEO best practices. Built 20+ reusable UI components with SCSS, Tailwind CSS, and Shadcn UI library. Collaborated with a 5-member team to deliver high-quality, user-friendly digital platforms.",
    projects: [
      "Exeem Main Website",
      "Exeem Social Media",
      "Exeem Services",
      "Exeem Library",
      "Exeem Missing Platform",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    company: "Remote – Egypt",
    period: "Jun 2025 – Aug 2025",
    desc: "Designed and developed the official election campaign website for Dr. Hamada Soliman. Ensured 100% responsive design and optimized SEO for higher visibility.",
    projects: ["Hamada Soliman Campaign Website"],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    company: "Route Academy – Cairo, Egypt",
    period: "Sep 2024 – Mar 2025",
    desc: "Built dynamic UI components with React.js, enhancing responsiveness across devices. Improved user experience by applying modern CSS techniques and accessibility standards. Completed a Frontend Development Diploma and scored 104/100 (Top Scorer) in mid-program exam.",
    certificate: "View Certificate",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "React Developer Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI) – Cairo, Egypt",
    period: "Apr 2024 – Oct 2024",
    desc: "Gained solid hands-on experience in React.js through intensive training & real projects. Led a team of 12 developers as Team Leader. Built a Movie Recommendation App using React.js.",
    certificates: [
      "Team Leader Excellence Certificate",
      "React Web Developer Certificate",
      "Advanced Business English Certificate (Berlitz Egypt under MCIT)",
    ],
    projects: ["Movie Recommendation App"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/abdolrahman-alazhary",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/Abdomahmoudgit",
  },
  {
    id: 3,
    img: "/whatsapp.png",
    link: "https://wa.me/201095664239",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://instagram.com/abdolrahmanmahmoud1542",
  },
  {
    id: 5,
    img: "/link.svg",
    link: "https://abdolrahman.dev",
  },
  // {
  //   id: 6,
  //   img: "/Facebook.svg",
  //   link: "https://www.facebook.com/profile.php?id=61574939255961",
  // },
];
