"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Logos3 } from "@/components/blocks/logos3";
import Image from "next/image";
import Link from "next/link"; // Imported for social links

// ─── STATIC DATA CONSTANTS ───
const SKILLS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "PYTHON",
  "LANGGRAPH",
  "OPENAI AGENT SDK",
  "N8N",
  "POSTGRESQL",
];

const SERVICES = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web applications using Next.js, React, Python, and PostgreSQL. From database design to frontend deployment.",
    icon: "💻",
  },
  {
    title: "AI Automation & Agents",
    desc: "Intelligent workflows and agentic AI architectures using LangGraph, OpenAI SDK, and n8n to automate business processes.",
    icon: "🤖",
  },
  {
    title: "Frontend Engineering",
    desc: "Pixel-perfect, responsive, and accessible user interfaces with smooth animations using Tailwind CSS and Framer Motion.",
    icon: "✨",
  },
  {
    title: "Backend Architecture",
    desc: "Scalable, secure APIs and robust database architecture using FastAPI, SQLModel, and Docker containerization.",
    icon: "⚙️",
  },
];

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Sorax Industrial Solution",
    period: "2025 – Present",
    desc: "Building responsive UIs and design systems with React, Next.js, and TypeScript.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Softiq Tech",
    period: "2026",
    desc: "Designed a full project management system using React, TypeScript, Vite.js, Python + FastAPI, and PostgreSQL.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2022 – 2023",
    desc: "Delivered custom websites for small businesses and personal brands.",
  },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/", // Replace with your actual GitHub URL
    icon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/", // Replace with your actual LinkedIn URL
    icon: "https://cdn.simpleicons.org/linkedin/white",
  },
  {
    name: "X",
    href: "https://x.com/", // Replace with your actual X URL
    icon: "https://cdn.simpleicons.org/x/white",
  },
];

const LOGOS_LINE_1 = [
  {
    id: "logo-1",
    description: "Next.js",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-2",
    description: "React",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-3",
    description: "Tailwind CSS",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-4",
    description: "Supabase",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
];

const LOGOS_LINE_2 = [
  {
    id: "logo-10",
    description: "Python",
    title: "Python",
    image: "https://cdn.simpleicons.org/python/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-11",
    description: "FastAPI",
    title: "FastAPI",
    image: "https://cdn.simpleicons.org/fastapi/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-12",
    description: "Docker",
    title: "Docker",
    image: "https://cdn.simpleicons.org/docker/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-16",
    description: "OpenAI",
    title: "OpenAI Agent SDK",
    image: "https://api.iconify.design/simple-icons:openai.svg?color=white",
    className: "h-6 w-6 opacity-70",
  },
];

// ─── FOOTER ANIMATION VARIANTS ───
const footerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Faster stagger so text and icons load in quickly
    },
  },
};

const footerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="bg-neutral-900 text-white pt-24 overflow-hidden flex flex-col min-h-screen">
      
      {/* ─── ABOUT ─── */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 border-b border-neutral-800">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 block">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
              style={{ perspective: 1000 }}
              className="relative rounded-2xl p-1 bg-gradient-to-tr from-blue-500/40 to-purple-500/40 shadow-2xl transition-all duration-300 shrink-0"
            >
              <Image
                src="/image-passport.png"
                alt="Ahtesham Ahmed"
                width={200}
                height={200}
                className="object-cover rounded-xl"
              />
            </motion.div>

            <div className="space-y-4 text-neutral-400 text-lg">
              <p>
                Hi, I&apos;m <span className="text-white font-semibold">Ahtesham Ahmed</span>{" "}
                — a passionate Full Stack & AI Automation Engineer who loves crafting clean,
                performant, and accessible user interfaces.
              </p>
              <p>
                I specialize in React, Next.js, TypeScript, and Python. When I&apos;m not
                coding, I&apos;m usually designing or learning something new.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-sm text-neutral-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 border-b border-neutral-800 py-20">
        <div className="max-w-5xl w-full">
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 block text-center md:text-left">
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center md:text-left">
            Services
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-12 text-center md:text-left">
            Delivering robust, scalable, and modern technical solutions tailored to your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  },
                  opacity: { delay: i * 0.15, duration: 0.5 }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateX: 4, 
                  rotateY: -4, 
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)"
                }}
                style={{ perspective: 1000 }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-blue-500/50 transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className="text-4xl mb-4 bg-neutral-700/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <Logos3 heading="TECH STACK & ECOSYSTEM" logosLine1={LOGOS_LINE_1} logosLine2={LOGOS_LINE_2} />
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 border-b border-neutral-800">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
            Experience
          </h2>

          <ol className="relative border-l border-neutral-700 space-y-10 pl-8">
            {EXPERIENCES.map((item, index) => (
              <motion.li 
                key={item.role} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <span className="absolute -left-[2.1rem] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-neutral-900 group-hover:scale-125 transition-transform" />
                <p className="text-xs text-neutral-500 mb-1 tracking-wide">{item.period}</p>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-neutral-400 mb-2">{item.company}</p>
                <p className="text-neutral-400">{item.desc}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="flex-1 flex flex-col justify-center items-center px-6 md:px-16 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <form className="flex flex-col gap-4 text-left" onSubmit={handleContactSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" required className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Your Email" required className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <textarea rows={5} placeholder="Your Message" required className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="self-center mt-2 px-10 py-3 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-200 transition-colors shadow-lg">
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* ─── FOOTER (Staggered Animation + Socials) ─── */}
      <motion.footer
        variants={footerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full py-8 px-6 md:px-16 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto bg-neutral-900"
      >
        {/* Left Side: Copyright Text */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
          {["© 2026 Ahtesham Ahmed.", "All rights reserved."].map((text, index) => (
            <motion.p 
              key={index} 
              variants={footerItem}
              className="text-sm font-medium text-neutral-500"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => (
            <motion.div key={social.name} variants={footerItem}>
              <Link 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 block"
              >
                {/* Using standard img for external SVG icons to avoid next.config.js domain errors */}
                <img 
                  src={social.icon} 
                  alt={`${social.name} Profile`} 
                  className="w-6 h-6 object-contain" 
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.footer>
    </main>
  );
}