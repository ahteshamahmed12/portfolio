"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section header: an accent eyebrow, a large title, and an
 * optional supporting line — all revealed with a staggered rise.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <motion.span variants={fadeUp} className="eyebrow flex items-center gap-2">
        <span className="h-px w-6 bg-[var(--brand)]" aria-hidden />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="section-title text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
