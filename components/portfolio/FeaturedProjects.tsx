"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";
import { PROJECTS } from "./data";
import { staggerContainer, viewportOnce } from "./motion";

/**
 * Featured projects grid. Simulates an async data load so the skeleton
 * loaders are actually exercised — swap the timer for a real fetch when
 * projects come from a CMS or API.
 */
export function FeaturedProjects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="section work-section px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects."
          description="A snapshot of platforms and tooling where product thinking, engineering, and AI meet to ship something genuinely useful."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading
            ? PROJECTS.map((p) => <ProjectCardSkeleton key={p.id} />)
            : PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </motion.div>
      </div>
    </section>
  );
}
