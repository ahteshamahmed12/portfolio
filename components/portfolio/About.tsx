"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "./data";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section about-section px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="lg:max-w-2xl">
          <SectionHeading
            eyebrow="About"
            title="Building with intent."
            description={`${PROFILE.name} is a ${PROFILE.title.toLowerCase()} focused on useful, resilient digital products.`}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 lg:mt-0 lg:ml-auto lg:max-w-2xl"
        >
          <motion.div variants={fadeUp} className="about-note">
            <p className="text-lg leading-relaxed text-neutral-300">
              I work across the product surface: shaping clear interfaces, designing dependable APIs, and connecting intelligent systems to real user needs.
            </p>
            <a href="#work" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition-colors hover:text-white">
              Explore selected work <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
