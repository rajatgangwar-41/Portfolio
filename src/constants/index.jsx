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
  carrent,
  jobit,
  tripguide,
  clock,
  code,
  computer,
  edfora,
  itjobxs,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
    likes: Math.floor(Math.random() * 100),
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
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
  "https://drive.google.com/drive/u/2/folders/1tf2Qg0Wu796_5qxAfcVfpSk8QcxcuK59"
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
