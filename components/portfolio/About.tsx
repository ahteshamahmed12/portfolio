"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PROFILE, TECH_STACK } from "./data";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section about-section px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Building with intent."
          description={`${PROFILE.name} is a ${PROFILE.title.toLowerCase()} focused on useful, resilient digital products.`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="about-note sm:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-300">
              I work across the product surface: shaping clear interfaces, designing dependable APIs, and connecting intelligent systems to real user needs.
            </p>
            <a href="#work" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition-colors hover:text-white">
              Explore selected work <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {TECH_STACK.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={fadeUp} className="about-skill-card">
                <div className="flex items-center gap-3">
                  <span className="about-skill-icon"><Icon size={18} /></span>
                  <h3 className="font-semibold text-white">{category.label}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-400">
                      <Check size={14} className="text-[var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
