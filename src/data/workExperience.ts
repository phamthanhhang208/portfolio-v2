import type { WorkExperienceList } from "@/types/workExperience";

export const workExperience: WorkExperienceList = [
  {
    company: "Teko",
    role: "Front-end Engineer",
    period: "Jul 2025 - Present",
    location: "Hanoi",
    description:
      "Developing comprehensive lending and borrowing interfaces for a Cardano-based DeFi platform. Leading UI redesigns to streamline DeFi operations.",
    projects: [
      {
        title: "Lending & Borrowing Platform",
        summary: "A high-performance DeFi interface on the Cardano blockchain.",
        tech: ["React 18", "TypeScript", "Zustand", "Mantine UI", "Cardano"],
        achievements: [
          "Developed comprehensive lending and borrowing interface using React 18 and TypeScript, implementing real-time pool data visualization for liquidity metrics.",
          "Built seamless multi-step transaction flows for lending/borrowing operations, integrating wallet connectivity and managing complex blockchain interactions.",
          "Architected efficient state management with Zustand, coordinating application state across lending pools, user positions, and live blockchain data updates.",
          "Led complete UI redesign from v1 to v2, creating a modern, intuitive interface that significantly improved user experience.",
          "Designed responsive, accessible components using Mantine UI library, ensuring consistent design system and optimal performance.",
        ],
        links: [
          {
            label: "Danogo",
            url: "https://app.danogo.io",
            color: "bg-teal-200 dark:bg-teal-700",
          },
          {
            label: "BTCGrow",
            url: "https://beta.btcgrow.io",
            color: "bg-yellow-400 dark:bg-yellow-500",
          },
        ],
      },
    ],
  },
  {
    company: "Kyber Network",
    role: "Front-end Engineer (Contractor)",
    period: "Feb 2025 - Aug 2025",
    location: "Hanoi",
    description:
      "Focused on frontend modernization and building real-time trading tools.",
    projects: [
      {
        title: "Real-Time Trading Monitoring & Management Dashboard",
        summary:
          "A sophisticated dashboard for monitoring market strategies and real-time trading data.",
        tech: [
          "React 18",
          "TypeScript",
          "React Query",
          "Redux",
          "Tailwind CSS",
        ],
        achievements: [
          "Architected a real-time trading dashboard integrating multi-source data streams from blockchain nodes, Binance, and microservices.",
          "Implemented advanced data fetching with React Query, managing concurrent real-time streams while maintaining optimal cache efficiency.",
          "Led frontend modernization initiative, migrating legacy codebase from React 17 to React 18 and transitioning build system from Webpack to Vite.",
          "Refactored complex legacy code to modern React patterns (Hooks), eliminating class-based components to improve maintainability.",
          "Orchestrated complex state management using Redux and React Query to coordinate blockchain data, exchange feeds, and user interactions.",
        ],
      },
    ],
  },
  {
    company: "One Mount Group",
    role: "Software Developer",
    period: "Jun 2022 - May 2024",
    location: "Hanoi",
    description:
      "Core developer for enterprise-scale inventory and internal operating systems.",
    projects: [
      {
        title: "Inventory Management System",
        summary: "A system for Real Estate Sales Inventory Management.",
        tech: ["JavaScript", "OutSystems", "Elastic Search", "Auth0"],
        achievements: [
          "Developed responsive front-end features using JavaScript, implementing dynamic UI components and interactive user experiences.",
          "Built custom JavaScript modules to enhance system capabilities, including real-time data visualization and search functionality with Elastic Search.",
          "Architected role-based authentication flows with Auth0, creating seamless client-side authorization logic.",
          "Designed and implemented role-specific UI customizations to improve user adoption through personalized interfaces.",
        ],
      },
      {
        title: "Internal Operating Management (IOM)",
        summary: "Internal tools for operating management optimization.",
        tech: ["JavaScript", "OutSystems", "MySQL"],
        achievements: [
          "Refactored legacy JavaScript codebase to modern ES6+ standards, improving code maintainability and performance.",
          "Developed reusable JavaScript components for role-specific interfaces, enhancing code modularity.",
          "Optimized front-end performance by implementing lazy loading and code splitting, significantly reducing load times.",
          "Integrated RESTful APIs with JavaScript fetch/async patterns to enable seamless data flow between front-end and MySQL backend.",
        ],
      },
    ],
  },
  {
    company: "FPT Software",
    role: "Intern / On Job Training",
    period: "Jul 2021 - Sep 2021",
    location: "Hanoi",
    description:
      "Intensive training in Full-stack development and Scrum methodologies.",
    projects: [
      {
        title: "Task Management Application",
        summary:
          "A full-stack application built from scratch during internship.",
        tech: ["React", "Node.js", "Jest", "Elastic Search", "RabbitMQ"],
        achievements: [
          "Independently developed a robust full-stack task management application from scratch.",
          "Implemented message queuing with RabbitMQ for asynchronous task processing.",
          "Engaged in intensive full-time training and acquired hands-on knowledge of Scrum methodologies.",
        ],
      },
    ],
  },
];
