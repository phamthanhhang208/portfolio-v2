export const hackathons = [
  {
    title: "AgentVault",
    event: "Authorized to Act: Auth0 for AI Agents",
    date: "Apr 2026",
    description:
      "Permission-controlled vaults for AI agents. Connect OAuth services (GitHub, Google Workspace, Slack, Jira) through Auth0 Token Vault, set granular Allow / Approve / Block rules per agent, and expose a per-vault MCP server URL. Tool calls are logged and gated by CIBA push approvals.",
    tags: ["Next.js", "TypeScript", "Auth0", "MCP", "Vercel KV"],
    devpost: "https://devpost.com/software/agentvault-gmj6te",
    github: "https://github.com/phamthanhhang208/agent-vault",
    link: "https://agent-vault-three.vercel.app",
  },
  {
    title: "EnvSync",
    event: "GitLab AI Hackathon",
    date: "Mar 2026",
    description:
      "Environment orchestration driven by GitLab comments. A GitLab Duo Flow + Agent that monitors pipeline health, detects drift across branches, cherry-picks commits with conflict resolution, promotes/rolls back environments safely, and auto-diagnoses pipeline failures via a Pipeline Doctor.",
    tags: ["GitLab Duo", "Claude", "CI/CD"],
    devpost: "https://devpost.com/software/envsync",
    gitlab: "https://gitlab.com/gitlab-ai-hackathon/participants/35525051",
  },
  {
    title: "ForgeOS",
    event: "DigitalOcean Gradient AI Hackathon",
    date: "Mar 2026",
    award: "The Great Whale Prize",
    description:
      "Multi-agent SaaS incubation platform — raw idea to deployed app in under 3 minutes. Strategist, Business Analyst, and Tech Lead agents collaborate with human-in-the-loop review, then auto-generate code, ship it to DigitalOcean App Platform, and produce handoff docs for continued AI-assisted development.",
    tags: ["React", "Express", "Prisma", "BullMQ", "LLaMA 3.1", "DigitalOcean"],
    devpost: "https://devpost.com/software/forgeos-8x495z",
    github: "https://github.com/phamthanhhang208/forgeOS",
    link: "https://forgeos-8k8r6.ondigitalocean.app/",
  },
  {
    title: "VerifAI",
    event: "Gemini Live Agent Challenge",
    date: "Mar 2026",
    description:
      "Autonomous QA agent that reads Jira/Confluence specs, generates a test plan, then drives the live app via Gemini's Computer Use vision loop — analyzing screenshots before each action, verifying outcomes, and filing bugs back into Jira with evidence and TTS narration.",
    tags: ["Gemini 3", "Next.js", "Playwright", "Cloud Run", "Firestore"],
    devpost: "https://devpost.com/software/verifai-dutfep",
    github: "https://github.com/phamthanhhang208/verifai",
    link: "https://verifai-web-ashy.vercel.app",
  },
  {
    title: "StudyFlow",
    event: "DeveloperWeek 2026",
    date: "Feb 2026",
    award: "You.com Challenge Winner",
    description:
      "AI-powered learning companion that turns any topic into a structured 3–5 module learning path with citation-backed answers and curated media. Dual modes (deep explanations vs. resources) plus a context-aware Q&A tutor that persists locally.",
    tags: ["React", "TypeScript", "Zustand", "You.com APIs", "Framer Motion"],
    devpost: "https://devpost.com/software/studyflow-e8nxah",
    github: "https://github.com/phamthanhhang208/study-flow",
    link: "https://study-flow-jgy7.vercel.app/",
  },
];
