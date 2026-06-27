"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Dark/light toggle. The site is designed dark-first (the premium feel
 * depends on the void background + violet glow), so "light mode" here
 * swaps to a softer paper theme rather than a full redesign.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initialIsDark = stored !== "light";
    setIsDark(initialIsDark);
    document.documentElement.classList.toggle("dark", initialIsDark);
    document.documentElement.classList.toggle("light", !initialIsDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      data-cursor-pointer
      className="relative flex h-9 w-9 items-center justify-center rounded-full glass-light transition-colors hover:border-violet-light/50"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        } text-violet-light`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        } text-violet-light`}
      />
    </button>
  );
}
