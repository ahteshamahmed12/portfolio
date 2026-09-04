"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MILESTONES } from "./data";
import { slideInLeft, staggerContainer, viewportOnce } from "./motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="section px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience & Milestones"
          title="Momentum, in the making."
          description="Recent challenges and events that sharpened how I design, build, and ship."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 space-y-10 border-l border-white/10 pl-8"
        >
          {MILESTONES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.id}
                variants={slideInLeft}
                className="group relative"
              >
                <span className="timeline-dot absolute -left-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full">
                  <Icon size={15} />
                </span>
                <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[var(--brand)]">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-2 text-sm text-neutral-500">{item.org}</p>
                <p className="leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
