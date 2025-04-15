import {
  web,
  cpp,
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  git,
  vscode,
  gsap,
  motion,
  githubTech,
  clock,
  code,
  computer,
  edfora,
  itjobxs,
  foodieExpress,
  busTicketBooking,
  jobPortal,
  cryptoTracker,
  videoCallApp,
  moviesWatchList,
  zod,
} from "../assets"

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
]

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
]

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Projects",
    icon: computer,
    from: 0,
    to: 30,
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
]

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Edfora",
    icon: edfora,
    iconBg: "#fff",
    date: "Jan 2023 - July 2023",
    points: [
      "Engaged in a one-month training session, actively learning JavaScript, Typescript, React Native, MobX, and Realm",
      "Collaborated with a cross-functional team to implement new features.",
      "Implementing ameliorations to enhance code quality.",
      "Familiarity with VCS like Git and agile project management tool Jira.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ITJOBXS",
    icon: itjobxs,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Worked on the Design and Development part of a fully responsive webpage for a particular section of itjobxs.com.",
      "Worked on User Verification/Authentication + Engineering challenges of detecting and removing the fake bots and posts.",
      "Integrated Recaptcha with the website - Google Layer of Protection for websites.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
  {
    name: "Motion",
    icon: motion,
  },
  {
    name: "Zod",
    icon: zod,
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
]

const projects = [
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
  {
    name: "Movies WatchList",
    description:
      "Developed a movie search and watchList app with real-time API fetching, dynamic query handling, and request cancellation. Users can search movies, view details, rate them, and manage a watchList. Optimized with Redux for state management, ensuring smooth and an intuitive user experience.",
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
        name: "redux",
        color: "green-text-gradient",
        borderColor: "border-[#11998e8a]",
      },
    ],
    image: moviesWatchList,
    source_code_link:
      "https://github.com/rajatgangwar-41/Project_React_BP-Movies_WatchList",
    live_link: "https://rajatgangwar-movieswatchlist.netlify.app/",
    likes: Math.floor(Math.random() * 100),
  },
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
]

const testimonials = [
  {
    testimonial:
      "He easily implemented the Mathematical symbols library in our Application which was looking not so easy.",
    name: "Manish Gupta",
    designation: "Manager",
    company: "Edfora",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajat does.",
    name: "Kumar K",
    designation: "Founder",
    company: "ITJOBXS",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "After Rajat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
]

const text = {
  heroSection:
    "Let's connect! I'm a passionate developer eager to collaborate, innovate, and build amazing experiences. Reach out and say hello!",
}

const resumeURL =
  // "https://drive.google.com/file/d/1D7g2KlwqfBUCU0DceHR_EHPoMgjeax9j/view?usp=sharing"
  // "https://drive.google.com/file/d/1D7g2KlwqfBUCU0DceHR_EHPoMgjeax9j/view?usp=sharing"
  // "https://drive.google.com/drive/u/2/folders/1tf2Qg0Wu796_5qxAfcVfpSk8QcxcuK59"
  "https://drive.google.com/drive/folders/1tf2Qg0Wu796_5qxAfcVfpSk8QcxcuK59?usp=drive_link"

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
}
