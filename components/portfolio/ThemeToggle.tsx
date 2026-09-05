"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme
      ? savedTheme === "light"
      : window.matchMedia("(prefers-color-scheme: light)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const toggleTheme = () => {
    const nextLight = !light;
    setLight(nextLight);
    document.documentElement.classList.toggle("light", nextLight);
    window.localStorage.setItem("portfolio-theme", nextLight ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="theme-toggle"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
