import {
  web,
  cpp,
  javascript,
  typescript,
  html,
  css,
  next,
  react,
  redux,
  zustand,
  tailwind,
  jotai,
  sql,
  git,
  vscode,
  // gsap,
  motion,
  githubTech,
  clock,
  code,
  computer,
  edfora,
  itjobxs,
  echo,
  vibe,
  pixxel,
  aeris,
  eduno,
  genix,
  skimly,
  foodieExpress,
  busTicketBooking,
  jobPortal,
  cryptoTracker,
  videoCallApp,
  // moviesWatchList,
  zod,
  jest,
  shadcn,
  clerk,
  prisma,
  stripe,
  tRPC,
  inngest,
  convex,
  neon,
  tanstackQuery,
  orama,
  linux,
  vercel,
  jira,
  nextAuth,
  manish,
  ambreesh,
  karan,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMedia = [
  {
    id: "linkedin",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/rajatgangwar41/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    id: "github",
    title: "Github",
    url: "https://github.com/rajatgangwar-41",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-github"
      >
        <path d="M16 22v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.6s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-7 0C5.18 1.37 4 1.74 4 1.74a5.07 5.07 0 0 0-.09 3.6A5.44 5.44 0 0 0 2.41 9.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 7.91 19V22"></path>
      </svg>
    ),
  },
  {
    id: "gmail",
    title: "Gmail",
    url: "mailto:rajat.gangwar41@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mail"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <path d="M22 6l-10 7L2 6"></path>
      </svg>
    ),
  },
  {
    id: "facebook",
    title: "Facebook",
    url: "https://www.facebook.com/rajatgangwar41/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-facebook"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/rajatgangwar41/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-instagram"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  // {
  //   id: "twitter",
  //   title: "Twitter",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2.4"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="feather feather-x"
  //     >
  //       <path d="M18 3L5 21"></path>
  //       <path d="M5 3l13 18"></path>
  //     </svg>
  //   ),
  // },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Projects",
    icon: computer,
    from: 0,
    to: 60,
  },
  {
    title: "Hours",
    icon: clock,
    from: 0,
    to: 2000,
  },
  {
    title: "Lines of Code",
    icon: code,
    from: 0,
    to: 5000,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Edfora",
    icon: edfora,
    iconBg: "#fff",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed and integrated 8 responsive screens, leading to a boost of over 20% in user engagement.",
      "Integrated MathLive library, enabling dynamic rendering of 50+ complex maths equations with 95% accuracy.",
      "Reduced bugs by 40% through Typecript integration and MobX state optimization, improving overall app stability.",
      "Achieved 90% code reuse across projects by developing 15+ modular components, accelerating future development.",
      "Optimized performance using React.memo and code splitting, reducing re-renders by 35%.",
      "Tech Stack: React Native, Typescript, Mobx, Realm",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ITJOBXS",
    icon: itjobxs,
    iconBg: "#E6DEDD",
    date: "June 2025 - Dec 2025",
    points: [
      "Security Enhancement: Purged 600+ fake registrations via automated MySQL queries targeting the non-standard email domains.",
      "Domain Validation System: Engineered real-time email validation using PHP string hashing to verify domain suffixes reducing the spam posts by 87.34%.",
      // "Secure Registration: Integrated Google reCAPTCHA v3 on the registration page to block automated bot signups.",
      "Database Optimization: Solved critical storage overload caused by 20+ daily bot accounts, normalizing the database growth.",
      "Notable Project: Prepdeck",
      "Developed and incorporated responsive UI components for the interview experience platform.",
      "Built interactive frontend features for seamless navigation of company-specific interview archives.",
      "Tech Stack: HTML, CSS, Javascript, Bootstrap, PHP, MySQL",
    ],
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Jotai",
    icon: jotai,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Shadcn UI",
    icon: shadcn,
  },
  {
    name: "Clerk",
    icon: clerk,
  },
  {
    name: "Next Auth",
    icon: nextAuth,
  },
  {
    name: "Jest",
    icon: jest,
  },
  // {
  //   name: "Gsap",
  //   icon: gsap,
  // },
  {
    name: "Motion",
    icon: motion,
  },
  {
    name: "Zod",
    icon: zod,
  },
  {
    name: "Tanstack Query",
    icon: tanstackQuery,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "tRPC",
    icon: tRPC,
  },
  {
    name: "Inngest",
    icon: inngest,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
  {
    name: "Convex",
    icon: convex,
  },
  {
    name: "Neon",
    icon: neon,
  },
  {
    name: "Orama",
    icon: orama,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: githubTech,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Jira",
    icon: jira,
  },
];

const projects = [
  {
    name: "Echo",
    description:
      "Developed an AI-Powered Chatbot Service, a B2B SaaS application enabling businesses to interact with customers via AI chat and voice assistants. Integrated a management dashboard for monitoring conversations, analytics, and customization.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "turborepo",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "sentry",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "vapi",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "convex",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: echo,
    source_code_link: "https://github.com/rajatgangwar-41/Project_Next_BP-Echo",
    live_link: "https://rajatgangwar-echo-web.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Vibe",
    description:
      "Developed an AI-Powered Vibe Coding Platform that generates code based on user prompts. Integrated a live preview sandbox to test and interact with generated code. Provided an intuitive interface for seamless coding and prompt-based automation.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "tRPC",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "inngest",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "e2b",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "neon",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: vibe,
    source_code_link: "https://github.com/rajatgangwar-41/Project_Next_BP-Vibe",
    live_link: "https://rajatgangwar-vibe.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Pixxel",
    description:
      "Developed an AI-Powered Image Editor that allows users to edit and enhance images effortlessly. Integrated AI features for background removal, color correction, and style enhancement. Provided an intuitive interface for easy image uploading.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "imagekit",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "convex",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "fabric",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: pixxel,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_Next_BP-Pixxel",
    live_link: "https://rajatgangwar-pixxel.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Aeris",
    description:
      "Developed an AI-Powered Email Management Platform to organize and manage emails efficiently. Integrated AI-based smart reply suggestions to streamline communication and save user time. Intuitive interface for effortless email management.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "jotai",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "tRPC",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "orama",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "aurinko",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "tanstackquery",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: aeris,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_Next_BP-Aeris",
    live_link: "https://rajatgangwar-aeris.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Eduno",
    description:
      "Developed an interactive dashboard to manage student records, attendance, exams, and teacher data efficiently. Implemented role-based access and a clean UI for streamlined administration and improved decision-making.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "recharts",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "zod",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: eduno,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_Next_BP-Eduno",
    live_link: "https://rajatgangwar-eduno.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Genix",
    description:
      "Developed a versatile AI-powered application that generates code, text, images, music, and videos, providing users with a unified platform for creative and technical tasks. Integrated multiple AI models to support diverse content generation.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "stripe",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "neon",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: genix,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_Next_BP-Genix",
    live_link: "https://rajatgangwar-genix.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Skimly",
    description:
      "Developed a PDF Summarizer Application that processes PDF files and generates concise, easy-to-read summaries, helping users quickly grasp key points from large documents. Integrated a user-friendly interface for seamless summary viewing.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "stripe",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "neon",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: skimly,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_Next_BP-Skimly",
    live_link: "https://rajatgangwar-skimly.vercel.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Foodie Express",
    description:
      "Developed a Food Delivery Platform with real-time restaurant listings, dynamic menu browsing, food ordering service, user authentication, cart management, account management, secure checkout, order tracking, and secure payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "motion",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "redux toolkit",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "rtk query",
        color: "neon-text-gradient",
        borderColor: "border-[#00ff878a]",
      },
      {
        name: "zod",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: foodieExpress,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Foodie_Express",
    live_link: "https://rajatgangwar-foodieexpress.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Bus Ticket Booking",
    description:
      "Developed a bus ticket booking platform with bus search, seat selection, seat availability check, smooth animations, advanced filters (price range, bus amenities, bus company, bus type), user information validation, and ticket printing for a seamless experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "motion",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "context api",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "zod",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: busTicketBooking,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Bus_Ticket_Booking",
    live_link: "https://rajatgangwar-busticketbooking.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Job Portal",
    description:
      "Developed a job portal with role-based authentication, allowing recruiters to post and manage jobs while candidates can apply and save listings. Designed a responsive UI for seamless user experience and efficient job management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "shadecn/ui",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
        borderColor: "border-[#944d1f]",
      },
      {
        name: "supabase",
        color: "yellow-text-gradient",
        borderColor: "border-[#ffdd006a]",
      },
    ],
    image: jobPortal,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Job_Portal",
    live_link: "https://rajatgangwar-jobportal.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Crypto Tracker",
    description:
      "Developed a crypto tracker website that enables users to monitor real-time cryptocurrency prices, view market trends. Features include currency conversion, interactive charts, search functionality, and coin-specific insights with responsive design, and a seamless user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "css",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "react-google-charts",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
    ],
    image: cryptoTracker,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Crypto_Tracker",
    live_link: "https://rajatgangwar-cryptotracker.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
  // {
  //   name: "Movies WatchList",
  //   description:
  //     "Developed a movie search and watchList app with real-time API fetching, dynamic query handling, and request cancellation. Users can search movies, view details, rate them, and manage a watchList. Optimized with Redux for state management, ensuring smooth and an intuitive user experience.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //       borderColor: "border-[#56ccf28a]",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //       borderColor: "border-[#ec008c8a]",
  //     },
  //     {
  //       name: "redux",
  //       color: "green-text-gradient",
  //       borderColor: "border-[#11998e8a]",
  //     },
  //   ],
  //   image: moviesWatchList,
  //   source_code_link:
  //     "https://github.com/rajatgangwar-41/Project_React_BP-Movies_WatchList",
  //   live_link: "https://rajatgangwar-movieswatchlist.netlify.app/",
  //   likes: Math.floor(Math.random() * 100),
  // },
  {
    name: "Video Call App",
    description:
      "Developed a video calling app enabling users to join one-on-one or group calls, exchange real-time messages, and generate sharable call links. It offers an intuitive user experience, and provides essential call management features like joining, leaving, and handling multiple participants efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        borderColor: "border-[#56ccf28a]",
      },
      {
        name: "css",
        color: "pink-text-gradient",
        borderColor: "border-[#ec008c8a]",
      },
      {
        name: "zegocloud",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
    ],
    image: videoCallApp,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Video_Call_App/",
    live_link: "https://rajatgangwar-videocallapp.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
];

const testimonials = [
  {
    testimonial:
      "He easily implemented the Mathematical symbols library in our Application which was looking not so easy.",
    name: "Manish Agrihari",
    designation: "Manager",
    company: "Edfora",
    image: manish,
  },
  {
    testimonial:
      "After Rajat optimized our application, our traffic increased by 20%. We can't thank him enough!",
    name: "Ambreesh Kushwaha",
    designation: "Tech Lead",
    company: "Edfora",
    image: ambreesh,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajat does.",
    name: "Karan Kumar",
    designation: "Founder",
    company: "ITJOBXS",
    image: karan,
  },
];

const text = {
  heroSection:
    "Let's connect! I'm a passionate developer eager to collaborate, innovate, and build amazing experiences. Reach out and say hello!",
};

const resumeURL =
  // "https://drive.google.com/file/d/1D7g2KlwqfBUCU0DceHR_EHPoMgjeax9j/view?usp=sharing"
  // "https://drive.google.com/file/d/1D7g2KlwqfBUCU0DceHR_EHPoMgjeax9j/view?usp=sharing"
  // "https://drive.google.com/drive/u/2/folders/1tf2Qg0Wu796_5qxAfcVfpSk8QcxcuK59"
  "https://drive.google.com/drive/folders/1tf2Qg0Wu796_5qxAfcVfpSk8QcxcuK59?usp=drive_link";

export {
  navLinks,
  socialMedia,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  text,
  resumeURL,
};
