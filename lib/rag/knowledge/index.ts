import { Document } from "../types";

export const KNOWLEDGE_DOCS: { id: string; text: string; metadata?: Record<string, unknown> }[] = [
  {
    id: "profile",
    text: `Ahtesham Ahmed is a Full-Stack Web Developer & Agentic AI Engineer based in Karachi, Pakistan. He builds scalable web applications, robust APIs, and intelligent agentic architectures. He is available for select projects.`,
    metadata: { type: "profile" },
  },
  {
    id: "skills",
    text: `Technical skills: Frontend - Next.js, React, Vite, TypeScript, Tailwind CSS. Backend - Python, FastAPI, PostgreSQL, SQLModel, LangGraph, MongoDB. DevOps - Docker, Vercel, Nginx, Agentic AI Tooling, JWT Authentication, Full-text Search Indexing.`,
    metadata: { type: "skills" },
  },
  {
    id: "project-1",
    text: `SaaS Project Management Platform: A full-stack application featuring Kanban boards, sprint tracking, and role-based access control (RBAC) authentication for cross-functional teams. Built with Next.js, FastAPI, PostgreSQL, RBAC, JWT. Available at https://project-managment-system-saas.vercel.app/`,
    metadata: { type: "project", key: "saas-pm" },
  },
  {
    id: "project-2",
    text: `Sorax Industrial Solution: An industrial website for Sorax Industrial Solution, which prioritizes boosting business productivity by supplying high-quality industrial equipment. Built with Next.js, TypeScript, and Tailwind CSS. Available at https://www.soraxindustrialsolution.com/`,
    metadata: { type: "project", key: "sorax" },
  },
  {
    id: "project-3",
    text: `Physical AI Book: An exploration of embodied intelligence. Learn to build and control intelligent robots with ROS2, Isaac Sim, and cutting-edge Vision-Language Models. Technologies used: Docasurus, Python, RAG Chatbot, FastAPI, OpenAIAgentSDK. Available at https://hackathon-physical-ai-textbook.vercel.app/`,
    metadata: { type: "project", key: "physical-ai" },
  },
  {
    id: "experience-1",
    text: `30-Day SaaS Development Challenge: Self-directed build sprint where Ahtesham shipped a production-grade SaaS platform end to end - architecture, API design, RBAC auth, and deployment - inside a focused 30-day sprint.`,
    metadata: { type: "experience", key: "sprint" },
  },
  {
    id: "experience-2",
    text: `Panaversity Hackathon II: Competed in Panaversity Hackathon II, building and presenting agentic AI tooling under time pressure alongside a collaborative engineering team.`,
    metadata: { type: "experience", key: "hackathon" },
  },
  {
    id: "experience-3",
    text: `Agentic AI Tooling & Benchmarks: Authoring reusable Python packages, CLIs, and LLM verification harnesses to benchmark and validate agentic architectures. This is an ongoing open-source and research effort.`,
    metadata: { type: "experience", key: "benchmarks" },
  },
];

export function getKnowledgeDocuments(): Document[] {
  return KNOWLEDGE_DOCS.map((d) => ({
    id: d.id,
    text: d.text,
    metadata: d.metadata,
  }));
}
