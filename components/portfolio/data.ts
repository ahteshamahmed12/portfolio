import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cloud,
  Container,
  Cpu,
  Database,
  KanbanSquare,
  Layers3,
  Lock,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   Central content source. Keeping copy + structured data here keeps the
   presentational components dumb, typed, and trivial to reorder or reuse.
   ──────────────────────────────────────────────────────────────────────── */

export const PROFILE = {
  name: "Ahtesham Ahmed",
  title: "Full-Stack Web Developer & Agentic AI Engineer",
  location: "Karachi, Pakistan",
  tagline:
    "Building scalable web applications, robust APIs, and intelligent agentic architectures.",
  cvHref: "/Ahtesham_ahmed_cv.pdf",
} as const;

/* ─── Tech stack ─────────────────────────────────────────────────────────── */
export type TechCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Layers3,
    items: ["Next.js", "React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: ["Python", "FastAPI", "PostgreSQL", "SQLModel"],
  },
  {
    id: "devops",
    label: "DevOps & Architecture",
    icon: Cpu,
    items: [
      "Docker",
      "Vercel",
      "Nginx",
      "Agentic AI Tooling",
      "JWT Authentication",
      "Full-text Search Indexing",
    ],
  },
];

/* Small icon lookup so the grid can render a glyph per technology. */
export const TECH_ICON: Record<string, LucideIcon> = {
  Docker: Container,
  Vercel: Cloud,
  Nginx: Server,
  "Agentic AI Tooling": Sparkles,
  "JWT Authentication": Lock,
  "Full-text Search Indexing": Search,
  Python: Terminal,
  FastAPI: Boxes,
  PostgreSQL: Database,
  SQLModel: Database,
};

/* ─── Featured projects ──────────────────────────────────────────────────── */
export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: "violet" | "cyan" | "amber";
  icon: LucideIcon;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "saas-pm",
    index: "01",
    title: "SaaS Project Management Platform",
    category: "Full-Stack SaaS",
    description:
      "A full-stack application featuring Kanban boards, sprint tracking, and role-based access control (RBAC) authentication for cross-functional teams.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "RBAC", "JWT"],
    accent: "violet",
    icon: KanbanSquare,
  },
  {
    id: "agentic-ai",
    index: "02",
    title: "Agentic AI Benchmarks & Tooling",
    category: "AI Engineering",
    description:
      "Python packages, custom CLI tools, and LLM verification scripts built with modern agentic tooling such as SpecKit Plus and the OpenAI SDKs.",
    tags: ["Python", "OpenAI SDK", "SpecKit Plus", "CLI", "LLM Eval"],
    accent: "cyan",
    icon: Sparkles,
  },
  {
    id: "ecommerce",
    index: "03",
    title: "Modern E-Commerce Interfaces",
    category: "Frontend Engineering",
    description:
      "High-performance product listing platforms with advanced search metadata, full-text indexing, and custom, composable layout components.",
    tags: ["Next.js", "TypeScript", "Search Metadata", "Tailwind CSS"],
    accent: "amber",
    icon: Boxes,
  },
];

/* ─── Experience & milestones ────────────────────────────────────────────── */
export type Milestone = {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  icon: LucideIcon;
};

export const MILESTONES: Milestone[] = [
  {
    id: "saas-challenge",
    period: "30 Days",
    title: "30-Day SaaS Development Challenge",
    org: "Self-directed build sprint",
    description:
      "Shipped a production-grade SaaS platform end to end — architecture, API design, RBAC auth, and deployment — inside a focused 30-day sprint.",
    icon: Rocket,
  },
  {
    id: "panaversity-hackathon",
    period: "Hackathon",
    title: "Panaversity Hackathon II",
    org: "Panaversity",
    description:
      "Competed in Panaversity Hackathon II, building and presenting agentic AI tooling under time pressure alongside a collaborative engineering team.",
    icon: Trophy,
  },
  {
    id: "ai-tooling",
    period: "Ongoing",
    title: "Agentic AI Tooling & Benchmarks",
    org: "Open-source & research",
    description:
      "Authoring reusable Python packages, CLIs, and LLM verification harnesses to benchmark and validate agentic architectures.",
    icon: ShieldCheck,
  },
];

/* ─── Social links ───────────────────────────────────────────────────────
   lucide-react (v1.x here) doesn't ship brand glyphs, so we use the
   Simple Icons CDN for crisp, monochrome brand marks.
   ──────────────────────────────────────────────────────────────────────── */
export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: "https://cdn.simpleicons.org/linkedin/white",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: "https://cdn.simpleicons.org/x/white",
  },
];
