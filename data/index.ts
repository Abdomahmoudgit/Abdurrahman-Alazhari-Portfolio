export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "React Developer passionate about crafting great user experiences",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experienced in building modern UIs with the latest technologies",
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
    description: `React, Next.js, Tailwind, Bootstrap, SASS`,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I love solving problems and building innovative solutions",
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
    description: "Bringing ideas to life with code",
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
  // First project
  {
    id: 1,
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

  // Second project - Electrified Project
  {
    id: 2,
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

  // Fourth project - Graduation Project: Film Details Section
  {
    id: 3,
    title: "Graduation Project - Film Details Section",
    des: "Part of the Digital Egypt Pioneers Initiative, focusing on designing a responsive Film Details section with customizable components.",
    img: "/FilmDetails.jpg",
    iconLists: ["/re.svg", "/vite.svg", "/bootstrap.svg", "/scss.svg"],
    link: "https://movies-app-zeta-one.vercel.app/",
  },
  // Third project - Bookmark Management App
  {
    id: 4,
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
      "I worked with Abdelrahman on our graduation project, where he was responsible for the frontend development. Honestly, he is a highly dedicated and skilled developer who understands his work well and executes tasks efficiently. He tackles challenges with practical and quick solutions while always striving to enhance the final product. Based on my experience working with him, I’d rate him 4.9 out of 5, and I highly recommend him for any team in need of a proficient frontend developer.",
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
      "One of Abdelrahman’s greatest strengths is his ability to listen attentively and absorb knowledge from everyone around him. He has an incredible passion for learning and continuously seeks to expand his expertise from every possible source. His adaptability and curiosity make him a well-rounded developer. His dedication to improvement and staying ahead in the field allows him to make well-informed decisions in both his professional and personal life.",
    name: "Eng. Abdullah Samir",
    title: "Backend Engineer",
    img: "/profile.svg",
  },
  {
    quote:
      "Working with Abdelrahman has been a fantastic experience. He is truly one of the best! When it comes to leadership, he is absolutely top-notch. His ability to organize and structure everything is remarkable. If he ever considers pursuing a leadership role, I highly recommend it—he has all the qualities of a great leader. His communication skills, organization, and ability to create engaging content are outstanding. Honestly, hats off to him! This is not just a compliment; it’s based on my firsthand experience working with him.",
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
    name: "Al-azhar University",
    img: "/AU.jpg",
  },
  {
    id: 2,
    name: "Route Academy",
    img: "/Route.jpg",
  },
  {
    id: 3,
    name: "DEPI",
    img: "/depiEN.png",
  },
  {
    id: 4,
    name: "Edraak",
    img: "/EDraak.jpg",
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
    title: "Frontend Developer Intern",
    company: "Route Academy",
    desc: "Developed and enhanced user interfaces using React.js and modern CSS. Collaborated on responsive designs with SASS and Bootstrap. Used Git for version control to streamline teamwork.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Digital Egypt Pioneers Initiative",
    desc: "Built interactive React apps with a focus on clean, maintainable code. Designed front-end components for a university housing system. Improved navigation using React Router.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
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
    img: "/youtup.svg",
    link: "https://youtube.com/@abdolrahmanmahmoud1542?si=XyYks2sOJ9rCkZMj",
  },
  {
    id: 5,
    img: "/Facebook.svg",
    link: "https://www.facebook.com/AbdurrahmanM.Alazhari/",
  },
  {
    id: 6,
    img: "/Facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61574939255961",
  },
];
