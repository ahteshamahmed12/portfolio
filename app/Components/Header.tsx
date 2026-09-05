"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { ThemeToggle } from "@/components/portfolio/ThemeToggle"

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavLink {
  label: string
  href: string
  sectionId: string
}

// ─── Static data ─────────────────────────────────────────────────────────────
const navlinks: NavLink[] = [
  
  { label: "About",      href: "#stack",       sectionId: "stack"      },
  { label: "Projects",   href: "#work",        sectionId: "work"       },
  { label: "Experience", href: "#experience",  sectionId: "experience" },
  { label: "Contact",    href: "#contact",    sectionId: "contact"    },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled,    setScrolled]    = useState<boolean>(false)
  const [menuOpen,    setMenuOpen]    = useState<boolean>(false)
  const [activeId,    setActiveId]    = useState<string>("")
  const [hoveredId,   setHoveredId]   = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // ── Scroll detection (pill elevation) ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── IntersectionObserver scroll-spy ────────────────────────────────────────
  useEffect(() => {
    // Disconnect any previous observer
    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // Fire when the section occupies 20-100 % of the viewport
        threshold: [0.2, 0.5, 1.0],
        rootMargin: "-80px 0px -20% 0px",
      }
    )

    navlinks.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  // ── Active indicator: hover takes precedence, else scroll-spy ──────────────
  const indicatorId = hoveredId ?? activeId

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-8">
      {/*
        ── Outer wrapper: becomes a floating pill when scrolled ──────────────
        We keep a full-width strip but shrink the *inner* pill so the
        page content is never clipped by the container.
      */}
      <motion.div
        layout
        transition={{ layout: { type: "spring", stiffness: 360, damping: 30 } }}
        className={`
          mx-auto border backdrop-blur-xl
          ${scrolled
            ? "header-shell-scrolled max-w-6xl rounded-2xl px-4 py-2 shadow-xl shadow-black/25 md:px-5"
            : "header-shell-top max-w-7xl rounded-2xl px-5 py-3 md:px-6"
          }
        `}
      >
        <div className="flex items-center justify-between">

          {/* ── Logo / Name ───────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <Image
              src="/image-passport.png"
              alt="Ahtesham Ahmed"
              width={44}
              height={44}
              className={`rounded-full object-cover ring-2 ring-white/10 transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}
            />
            <span
              className={`
                font-semibold text-white tracking-tight transition-all duration-300
                ${scrolled ? "text-sm" : "text-base"}
              `}
            >
              Ahtesham Ahmed
            </span>
          </div>

          {/* ── Desktop nav ───────────────────────────────────────────────── */}
          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul
              className="flex items-center gap-1"
              onMouseLeave={() => setHoveredId(null)}
            >
              {navlinks.map(({ label, href, sectionId }) => {
                const isActive = indicatorId === sectionId
                return (
                  <li key={href} className="relative">
                    {/* Sliding pill background */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 px-2 py-2 rounded-full bg-white/10 border border-white/15"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <Link
                      href={href}
                      onMouseEnter={() => setHoveredId(sectionId)}
                      className={`
                        relative z-10 block px-4 py-1.5 text-sm font-medium rounded-full
                        transition-colors duration-200 select-none
                        ${isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* ── Right: Download CV + hamburger ────────────────────────────── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/Ahtesham_ahmed_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`header-cv hidden md:inline-flex items-center gap-2 rounded-full text-xs font-semibold transition-all duration-300 ${scrolled ? "px-3.5 py-2" : "px-4 py-3"}`}
            >
              <Download size={14} />
              <span>Download CV</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-white origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-0.5 bg-white origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-white origin-center"
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ─────────────────────────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1 pt-3 pb-1">
                {navlinks.map(({ label, href, sectionId }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        block px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200
                        ${activeId === sectionId
                          ? "bg-white/10 text-white"
                          : "text-neutral-400 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/Ahtesham_ahmed_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 rounded-xl text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-200 transition-colors duration-200 text-center"
                  >
                    Download CV
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
