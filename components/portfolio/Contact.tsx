"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROFILE, SOCIAL_LINKS } from "./data";
import { fadeUp, staggerContainer, viewportOnce } from "./motion";

type Status = "idle" | "submitting" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Simulated async submit — wire this up to a Route Handler,
    // Server Action, or email service in production.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className="section px-6 py-24 md:px-16 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-5xl"
      >
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something."
          description="Have a product, an API, or an agentic system in mind? My inbox is always open — I'll get back to you quickly."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* ─── Details + socials ─── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <a
              href="mailto:hello@example.com"
              className="contact-info-card group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="contact-info-icon flex h-11 w-11 items-center justify-center rounded-xl">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Email
                </span>
                <span className="text-white transition-colors group-hover:text-[var(--brand)]">
                  ahteshamahmed402@gmail.com
                </span>
              </span>
            </a>

            <div className="contact-info-card flex items-center gap-4 rounded-2xl p-5">
              <span className="contact-info-icon flex h-11 w-11 items-center justify-center rounded-xl">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Location
                </span>
                <span className="text-white">{PROFILE.location}</span>
              </span>
            </div>

            <div className="mt-2">
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500">
                Elsewhere
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="social-link flex h-11 w-11 items-center justify-center rounded-xl"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={social.icon}
                      alt=""
                      aria-hidden
                      className="h-5 w-5 object-contain opacity-80"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── Form ─── */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-neutral-400">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className="form-input"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neutral-400">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  autoComplete="email"
                  className="form-input"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-neutral-400">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="form-input resize-none"
              />
            </label>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className="button button-primary mt-2 justify-center py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Sending…
                </>
              ) : status === "success" ? (
                <>
                  <Check size={17} /> Message sent
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
