"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers3, Server, Sparkles } from "lucide-react";
import { PROFILE } from "./data";
import { fadeUp, staggerContainer } from "./motion";

const FLOATING_BADGES = [
  { label: "Next.js", icon: Layers3, className: "left-[6%] top-[22%]", delay: 0 },
  { label: "FastAPI", icon: Server, className: "right-[8%] top-[16%]", delay: 0.6 },
  { label: "Agentic AI", icon: Sparkles, className: "right-[14%] bottom-[20%]", delay: 1.2 },
  { label: "Docker", icon: Cpu, className: "left-[12%] bottom-[16%]", delay: 1.8 },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-32 pb-20 md:px-16"
    >
      <div className="hero-grid" aria-hidden />
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        {/* ─── Copy ─── */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow">
            <span className="status-dot" aria-hidden />
            Available for select projects
          </motion.p>

          <motion.h1 variants={fadeUp} className="hero-title mt-6">
            {PROFILE.name.split(" ")[0]}
            <br />
            <em>{PROFILE.name.split(" ").slice(1).join(" ")}.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg font-medium text-neutral-200 sm:text-xl"
          >
            {PROFILE.title}
            <span className="mt-1 block text-sm font-normal uppercase tracking-[0.18em] text-neutral-500">
              Based in {PROFILE.location}
            </span>
          </motion.p>

          <motion.p variants={fadeUp} className="hero-copy">
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Link href="#work" className="button button-primary">
              View Projects <ArrowUpRight size={17} />
            </Link>
            <Link href="#contact" className="button button-ghost">
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-meta">
            <span>Full-Stack Engineering</span>
            <span className="meta-line" aria-hidden />
            <span>Agentic AI Systems</span>
          </motion.div>
        </motion.div>

        {/* ─── Orbiting scene ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="scene hidden lg:grid"
          aria-label="Abstract orbiting illustration representing web and AI engineering"
        >
          <div className="scene-glow" aria-hidden />
          <div className="orbit orbit-a" aria-hidden />
          <div className="orbit orbit-b" aria-hidden />
          <div className="cube">
            <span>AI</span>
            <small>ENGINEERING</small>
          </div>

          {FLOATING_BADGES.map(({ label, icon: Icon, className, delay }) => (
            <motion.div
              key={label}
              className={`hero-badge ${className}`}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <Icon size={14} />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
