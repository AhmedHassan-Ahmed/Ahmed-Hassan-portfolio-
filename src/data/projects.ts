import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "LYNK – Freelance Marketplace Platform",
    category: "Full-Stack / Marketplace",
    description:
      "Modern freelance marketplace with Client, Freelancer, and Admin role-based experiences.",
    highlights: [
      "Built reusable React components and role-based navigation for jobs, proposals, projects, profiles, messaging, notifications, and earnings.",
      "Integrated the frontend with Express.js APIs and implemented responsive user flows.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "Express.js",
      "REST APIs",
      "Role-Based Access",
    ],
    links: [
      { label: "Live Demo", href: "https://freelance-hub-sable.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/Freelance-Hub" },
    ],
  },
  {
    title: "Restaurant Ordering Platform",
    category: "Full-Stack / E-Commerce",
    description:
      "Responsive restaurant ordering platform with reusable ordering UI, state management, authentication, and Express API integration.",
    highlights: [
      "Built reusable components for restaurants, menus, cart, and ordering.",
      "Implemented Context API, authentication handling, protected flows, and Express.js API integration.",
    ],
    technologies: [
      "React.js",
      "Context API",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
    links: [
      { label: "Live Demo", href: "https://restaurant-ordering-add.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/restaurant-ordering-add" },
    ],
  },
  {
    title: "Clothes Shop – E-Commerce Website",
    category: "Full-Stack / E-Commerce",
    description:
      "Responsive e-commerce frontend integrated with a Node.js backend for dynamic product data and CRUD workflows.",
    highlights: [
      "Integrated frontend with Node.js backend APIs.",
      "Implemented frontend Create, Read, Update, and Delete product operations.",
    ],
    technologies: [
      "React.js",
      "Node.js API Integration",
      "REST APIs",
      "CRUD",
      "Tailwind CSS",
      "React Router",
    ],
    links: [
      { label: "Live Demo", href: "https://clothes-shop-topaz-eta.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/clothes-shop" },
    ],
  },
  {
    title: "E-Commerce Backend Platform",
    category: "Backend / Team Project",
    description:
      "Collaborative multi-vendor e-commerce backend supporting Customer, Seller, and Admin roles.",
    highlights: [
      "Covered authentication, products, carts, orders, reviews, wishlists, promo codes, notifications, and external integrations.",
      "Built collaboratively during the Tech Mastery Node.js training track.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Google OAuth",
      "Cloudinary",
      "WebPush",
    ],
    links: [],
  },
  {
    title: "Job Board Backend Platform",
    category: "Backend / Team Project",
    description:
      "Collaborative job marketplace backend supporting Candidate, Employer, and Admin roles.",
    highlights: [
      "Covered jobs, applications, search/filtering, comments, user management, subscriptions, authentication, and integrations.",
      "Built collaboratively during the Tech Mastery Node.js training track.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Groq",
      "Cloudinary",
      "OneSignal",
    ],
    links: [],
  },
  {
    title: "Healthcare Appointment Booking Backend",
    category: "Backend / Team Project",
    description:
      "Collaborative healthcare appointment booking backend supporting Admin, Doctor, and Patient roles.",
    highlights: [
      "Included authentication, doctor profiles, specialties, clinic locations, recurring availability, automatic slots, booking protection, notifications, ratings, and simulated payment flows.",
      "Included queue/event-based processing and Cloudinary uploads.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Queues",
      "Event Processing",
    ],
    links: [
      { label: "Project Reference", href: "https://lnkd.in/eakhxV6Q" },
    ],
  },
  {
    title: "Student Hub",
    category: "Frontend / Android",
    description:
      "Responsive academic productivity website collaboratively built for tasks, notes, resources, and dashboard workflows.",
    highlights: [
      "Developed the Tasks and Notes pages, including task management, filtering, progress, CSV import/export, note organization, tags, and responsive UI.",
      "Used Local Storage for data and packaged the completed website as an Android app with Capacitor.",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Local Storage",
      "Capacitor",
    ],
    links: [
      { label: "Live Demo", href: "https://student-hub-neon.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/student-hub" },
    ],
  },
  {
    title: "Education Platform",
    category: "Frontend / API Integration",
    description:
      "Responsive education platform frontend integrated with a Laravel backend API.",
    highlights: [
      "Built reusable components for courses, educational content, and services.",
      "Integrated the React frontend with Laravel backend APIs for application data.",
    ],
    technologies: [
      "React.js",
      "Laravel API Integration",
      "REST APIs",
      "HTML",
      "CSS",
    ],
    links: [
      { label: "Live Demo", href: "https://react-web-livid.vercel.app/" },
    ],
  },
  {
    title: "AI Features Landing Page",
    category: "Frontend / Motion",
    description:
      "Responsive AI-focused landing page with interactive sections, page transitions, and animation.",
    highlights: [
      "Implemented smooth animations and page transitions.",
      "Built reusable React components and optimized desktop, tablet, and mobile experiences.",
    ],
    technologies: ["React.js", "Framer Motion", "GSAP"],
    links: [
      { label: "Live Demo", href: "https://gen-ai-blond.vercel.app/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/genAi" },
    ],
  },
  {
    title: "PulseFit – Smartwatch Landing Page",
    category: "Frontend / JavaScript",
    description:
      "Responsive smartwatch product landing page with interactive navigation, animations, and pricing UI.",
    highlights: [
      "Implemented smooth scrolling, scroll-based animations, mobile navigation, and pricing plan switching.",
      "Used DOM manipulation and event handling for interactive frontend behavior.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    links: [
      { label: "Live Demo", href: "https://ahmedhassan-ahmed.github.io/PluseFit/" },
      { label: "GitHub", href: "https://github.com/AhmedHassan-Ahmed/PluseFit" },
    ],
  },
];