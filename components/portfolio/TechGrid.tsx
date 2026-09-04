"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { TECH_STACK, TECH_ICON } from "./data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "./motion";

export function TechGrid() {
  return (
    <section
      id="stack"
      className="section relative px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with."
          description="A modern, type-safe toolchain spanning the full product surface — from expressive frontends to resilient APIs and the infrastructure that ships them."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {TECH_STACK.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="tech-card group flex flex-col rounded-2xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="tech-cat-icon flex h-11 w-11 items-center justify-center rounded-xl">
                    <CategoryIcon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {category.label}
                  </h3>
                </div>

                <motion.ul
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {category.items.map((item) => {
                    const ItemIcon = TECH_ICON[item];
                    return (
                      <motion.li
                        key={item}
                        variants={scaleIn}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="tech-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm"
                      >
                        {ItemIcon ? (
                          <ItemIcon size={14} className="text-[var(--brand)]" />
                        ) : null}
                        {item}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
