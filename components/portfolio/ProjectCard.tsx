"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./data";
import { fadeUp } from "./motion";

interface ProjectCardProps {
  project: Project;
}

/**
 * Presentational card for a single featured project. Kept "dumb" — all
 * content is passed in via the typed `Project` shape from `data.ts`.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, description, tags, accent, icon: Icon, href } = project;
  const isLink = Boolean(href);
  const Wrapper = isLink ? motion.a : motion.article;

  return (
    <Wrapper
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      {...(isLink
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`project-card project-${accent} group flex flex-col overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950`}
    >
      {/* ─── Art / header ─── */}
      <div className="project-art relative flex h-44 items-start justify-between p-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50">
          {project.index}
        </span>
        <span className="project-art-icon flex h-12 w-12 items-center justify-center rounded-xl">
          <Icon size={22} strokeWidth={1.6} />
        </span>
        <div className="art-shape" aria-hidden />
      </div>

      {/* ─── Body ─── */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
          {category}
        </p>
        <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
          {title}
          {isLink ? (
            <ArrowUpRight
              size={18}
              className="-translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            />
          ) : null}
        </h3>
        <p className="mb-6 flex-1 leading-relaxed text-neutral-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
