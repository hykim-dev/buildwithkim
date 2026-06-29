import { awardDT } from "@/types/custom-dt";
import { ProjectMetric, projectDt } from "@/types/project-dt";

export interface ExperienceCard {
  date: string;
  count: string;
  title: string;
  meta: string[];
}

export interface TimelineExperienceItem {
  duration: string;
  title: string;
  company: string;
  isLast?: boolean;
}

export interface SkillItem {
  label: string;
  value: number;
  width: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  show: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

export const profile = {
  fullName: "Heeyoung (Kim) Kim",
  displayName: "Kim",
  initials: "HK",
  title: "Software Engineer",
  subtitle: "Frontend-focused engineer building scalable web, mobile, and AI-powered product experiences.",
  heroRoles: ["Software Engineer", "Front-End & Full-Stack Developer"],
  heroImage: "/assets/img/hero/headshot-clear-2.png",
  email: "hykimmmm.dev@gmail.com",
  phoneDisplay: "+1 (604) 968 - 3844",
  phoneHref: "tel:+16049683844",
  linkedin: "https://www.linkedin.com/in/hykimmmm",
  linkedinLabel: "linkedin.com/in/hykimmmm",
  location: "Vancouver, BC, Canada",
  resumeHref: "/Kim-Resume.pdf",
  shortBio:
    "I build product interfaces that connect design systems, CMS-driven content, API integrations, and AI workflows into production-ready experiences.",
  longBio:
    "I am a Vancouver-based software engineer with hands-on experience across React, Next.js, TypeScript, Flutter, Strapi CMS, and OpenAI-powered product features. My work spans frontend architecture, cross-platform UI, localization, performance tuning, and the systems that help teams ship consistently.",
  availability:
    "Available for frontend, full-stack, and AI-enabled product engineering opportunities.",
} as const;

export const heroSkillTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Strapi CMS",
  "OpenAI API",
  "SSR",
  "Performance",
];

export const featuredCompanyNames = [
  "Code Particle Inc.",
  "AG1",
  "Andoe",
  "Blinkmoon Games",
];

export const experienceCards: ExperienceCard[] = [
  {
    date: "2025 - Present",
    count: "01",
    title: "Software <br /> Developer",
    meta: ["Flutter", "Strapi CMS"],
  },
  {
    date: "2024 - 2025",
    count: "02",
    title: "Software <br /> Developer",
    meta: ["Next.js", "TypeScript"],
  },
  {
    date: "2025 - 2026",
    count: "03",
    title: "Software <br /> Developer",
    meta: ["OpenAI API", "SSR"],
  },
];

export const timelineExperience: TimelineExperienceItem[] = [
  {
    duration: "2025 - Present",
    title: "Software Developer",
    company: "Beauty Streams at Code Particle Inc.",
  },
  {
    duration: "2024 - 2025",
    title: "Software Developer",
    company: "Athletic Greens (AG1)",
  },
  {
    duration: "2025 - 2026",
    title: "Software Developer",
    company: "Ande",
  },
  {
    duration: "2023",
    title: "Full-stack Developer",
    company: "Blinkmoon Games",
    isLast: true,
  },
];

export const skillProgressData: SkillItem[] = [
  { label: "React / Next.js", value: 95, width: "95%" },
  { label: "TypeScript", value: 92, width: "92%" },
  { label: "Flutter / Dart", value: 88, width: "88%" },
  { label: "CMS & API Integration", value: 85, width: "85%" },
];

export const expertiseCapsules = [
  "React / Next.js",
  "TypeScript",
  "Flutter",
  "Dart",
  "Strapi CMS",
  "REST APIs",
  "Supabase",
  "Postgres",
  "OpenAI API",
  "SSR",
  "Design Systems",
  "Performance",
];

export const tickerSlides = [
  "React (Next.js)",
  "TypeScript",
  "Flutter",
  "Strapi CMS",
  "OpenAI API",
  "Localization",
  "SSR",
  "Performance Optimization",
  "Design Systems",
];

export const counterData: CounterItem[] = [
  {
    value: 4,
    suffix: "+",
    title: "Product roles",
    description:
      "Software engineering experience across beauty, wellness, AI, and gaming products.",
  },
  {
    value: 2,
    suffix: "",
    title: "Education credentials",
    description:
      "Computer Science foundation plus a focused diploma in Web Development.",
  },
  {
    value: 10,
    suffix: "+",
    title: "Core technologies",
    description:
      "A practical stack spanning frontend architecture, CMS integration, APIs, and AI workflows.",
  },
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What kinds of products do you work on?",
    answer:
      "I work on web, mobile, and AI-enabled products, with recent experience in beauty commerce, wellness platforms, brand analysis tools, and gaming interfaces.",
    show: true,
  },
  {
    id: 2,
    question: "What frontend stack do you use most often?",
    answer:
      "My main frontend stack is React, Next.js, and TypeScript. I also work with Flutter and Dart when products need a shared experience across web and mobile.",
    show: false,
  },
  {
    id: 3,
    question: "Have you worked with CMS and localization workflows?",
    answer:
      "Yes. I integrated Strapi CMS for dynamic content rendering, editorial systems, profile data, and localization workflows in production products.",
    show: false,
  },
  {
    id: 4,
    question: "Do you work beyond the UI layer?",
    answer:
      "Yes. I regularly handle API design considerations, state management, CMS-side business logic, server-side functions, and structured OpenAI request flows.",
    show: false,
  },
  {
    id: 5,
    question: "How do you approach performance and scalability?",
    answer:
      "I focus on SSR boundaries, bundle behavior, reusable component systems, and moving heavy work to the server when it improves responsiveness and maintainability.",
    show: false,
  },
];

export const contactInterestOptions = [
  "Frontend Engineering",
  "Full-stack Product Development",
  "AI Feature Integration",
  "CMS & Localization",
  "Performance Optimization",
  "Contract Collaboration",
  "Full-time Opportunity",
  "Product Consultation",
  "Other",
];

export const opportunityOptions: SelectOption[] = [
  { value: "1", label: "Frontend Engineering" },
  { value: "2", label: "Full-stack Product Work" },
  { value: "3", label: "AI Feature Integration" },
  { value: "4", label: "CMS / Platform Architecture" },
];

export const workModelOptions: SelectOption[] = [
  { value: "1", label: "Full-time role" },
  { value: "2", label: "Contract project" },
  { value: "3", label: "Freelance collaboration" },
  { value: "4", label: "Technical consultation" },
];

export const projectMetrics = {
  beautyStreams: [
    { value: "80%", label: "performance gain" },
    { value: "30+", label: "screens aligned" },
    { value: "5", label: "core content systems" },
  ],
  ag1: [
    { value: "SSR", label: "frontend architecture" },
    { value: "i18n", label: "CMS-backed localization" },
    { value: "1", label: "shared asset library" },
  ],
  andoe: [
    { value: "AI", label: "request workflows" },
    { value: "App", label: "Router architecture" },
    { value: "API", label: "server-side processing" },
  ],
  blinkmoon: [
    { value: "JS", label: "store frontend" },
    { value: "UI", label: "shop systems" },
    { value: "UE", label: "gameplay performance" },
  ],
} satisfies Record<string, ProjectMetric[]>;

export const projectPortfolioData: projectDt[] = [
  {
    id: 1,
    title: "Beauty Streams Platform",
    image: "/assets/img/projects/project-beautystreams.gif",
    link: "https://beautynexos.com/",
    category: "Cross-platform UI",
    year: "2025 - Present",
    client: "Code Particle Inc.",
    role: "Software Developer",
    services: ["Flutter UI", "Strapi CMS", "Analytics APIs"],
    headline:
      "Scaled a cross-platform beauty platform with entitlement-based access and CMS-driven content flows.",
    summary:
      "Built and maintained consistent user experiences across mobile and web while shipping profile, product, editorial, endorsement, and lifecycle-driven feature systems.",
    overview:
      "This work combined frontend implementation, CMS integration, analytics optimization, and reusable UI patterns so teams could move faster without losing product consistency.",
    highlights: [
      "Developed and maintained cross-platform UI using Flutter for mobile and web.",
      "Implemented entitlement-based feature gating to control user access to content and features.",
      "Integrated Strapi CMS for dynamic profiles, products, editorials, and localization content.",
      "Optimized APIs and frontend data handling to improve performance from roughly 7s to about 1.3s.",
      "Standardized UI components and design alignment across more than 30 screens.",
      "Designed CMS-side business logic with lifecycle hooks to support scalable data flow.",
    ],
    metrics: projectMetrics.beautyStreams,
  },
  {
    id: 2,
    title: "Athletic Greens (AG1)",
    image: "/assets/img/projects/project-ag1.gif",
    link: "https://drinkag1.com/",
    category: "Frontend Architecture",
    year: "2024 - 2025",
    client: "Code Particle Inc.",
    role: "Software Developer",
    services: ["React / Next.js", "TypeScript", "Localization"],
    headline:
      "Built scalable Next.js architecture for AG1 with reusable systems, localization support, and SSR-friendly components.",
    summary:
      "Worked on a robust React and TypeScript frontend foundation, maintaining a reusable component library and solving complex issues across styling, bundling, and SSR environments.",
    overview:
      "The focus was long-term maintainability: reusable building blocks, dynamic CMS content, reliable localization, and tighter alignment between design, backend, and frontend delivery.",
    highlights: [
      "Built scalable frontend architecture using React (Next.js) and TypeScript.",
      "Developed and maintained a reusable component library with SSR compatibility.",
      "Integrated Strapi CMS for dynamic content rendering and localization.",
      "Resolved complex frontend issues across styles, build tooling, and SSR behavior.",
      "Led development of an in-house asset library for faster end-to-end delivery.",
      "Collaborated across design, backend, and frontend teams to keep implementation aligned.",
    ],
    metrics: projectMetrics.ag1,
  },
  {
    id: 3,
    title: "Andoe AI Platform",
    image: "/assets/img/projects/project-andoe.gif",
    link: "https://ai.andoe.work/",
    category: "AI Product Experience",
    year: "2025 - 2026",
    client: "Andoe",
    role: "Software Developer",
    services: ["Next.js", "OpenAI API", "Server-side Functions"],
    headline:
      "Designed an AI-powered brand visibility platform with server-side processing and product-focused UX.",
    summary:
      "Built AI-driven user flows that analyze brand visibility, balancing UI clarity with structured OpenAI request handling and server-side performance optimization.",
    overview:
      "The project required a full product view: App Router architecture, server-side query functions, frontend state flows, and reliable response handling for AI-powered analysis.",
    highlights: [
      "Built an AI-powered platform to analyze brand visibility using the OpenAI API.",
      "Designed and implemented a Next.js App Router architecture with server-side query functions.",
      "Moved heavy AI computation to server-side functions to reduce client load.",
      "Developed UI implementation, state management, and API request / response flows.",
      "Focused on performance, responsiveness, and scalability for AI-enabled features.",
      "Owned the flow from frontend experience to API integration and optimization.",
    ],
    metrics: projectMetrics.andoe,
  },
  {
    id: 4,
    title: "Blinkmoon Games Store",
    image: "/assets/img/projects/project-blinkmoon.gif",
    link: "https://blinkmoon.com/necromantic/",
    category: "Game Commerce UI",
    year: "2023",
    client: "Blinkmoon Games",
    role: "Full-stack Developer",
    services: ["JavaScript", "Game UI Systems", "Interaction Design"],
    headline:
      "Created commerce and inventory interfaces for a game store ecosystem with gameplay-aware performance tuning.",
    summary:
      "Developed game store frontend flows, interactive item systems, and UI patterns for shopping and in-game experiences while keeping interactions smooth and responsive.",
    overview:
      "This role mixed web-style frontend work with gameplay-adjacent UI constraints, requiring clean system thinking and close attention to responsiveness.",
    highlights: [
      "Developed the game store frontend using JavaScript.",
      "Built real-time in-game UI systems and interactive components.",
      "Designed and implemented shop system UI flows.",
      "Optimized UI performance for smoother gameplay interactions with Unreal Engine.",
    ],
    metrics: projectMetrics.blinkmoon,
  },
];

export const achievementsData: awardDT[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Issued Apr 2026 · Expires Apr 2029",
    image: "/assets/img/award/aws-cloud-practitioner.png",
  },
  {
    title: "IEC-BC MentorConnect Program",
    subtitle: "Immigrant Employment Council of BC · 2026",
    image: "/assets/img/award/iec-bc-mentor.jpg",
  },
  {
    title: "SBA Hackathon",
    subtitle: "Seoul Business Agency · 2016",
    image: "/assets/img/award/hackathon.JPG",
  },
];

export const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    iconClass: "fa-brands fa-linkedin-in",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    iconClass: "fa-light fa-envelope",
  },
];
