"use client";

import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS } from "@/components/portfolio/data";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/portfolio/motion";

const NAV = [
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-auto border-t border-white/10 bg-neutral-950 px-6 py-10 md:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div variants={fadeUp} className="text-center md:text-left">
          <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </motion.div>

        <motion.nav
          variants={fadeUp}
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        <motion.div variants={fadeUp} className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={social.icon}
                alt=""
                aria-hidden
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
