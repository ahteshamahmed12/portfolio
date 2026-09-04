import type { Variants } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Reusable Framer Motion variants. Centralising them keeps timing/easing
   consistent across every section and makes the reveal choreography easy
   to tune in one place.
   ──────────────────────────────────────────────────────────────────────── */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Parent container that staggers its children into view. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/** Standard "rise + fade" child reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Subtle scale-in used for cards and media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Slide-in from the left, used by the vertical timeline items. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/** Shared viewport config so sections reveal once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
