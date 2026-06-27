"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
              scrolled ? "glass py-3" : "py-2"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              data-cursor-pointer
              className="font-display text-lg font-semibold text-ink tracking-tight"
            >
              {profile.initials}
              <span className="text-violet-light">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    data-cursor-pointer
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="relative px-4 py-2 text-sm font-medium text-slate hover:text-ink transition-colors"
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-thread-gradient rounded-full"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={profile.resumeUrl}
                download
                data-cursor-pointer
                className="group flex items-center gap-2 rounded-full bg-violet/15 border border-violet/30 px-4 py-2 text-sm font-medium text-violet-light hover:bg-violet/25 transition-colors"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              data-cursor-pointer
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-ink"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-display text-3xl text-ink hover:text-violet-light transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-6 flex items-center gap-2 rounded-full bg-violet/20 border border-violet/40 px-6 py-3 text-violet-light"
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
