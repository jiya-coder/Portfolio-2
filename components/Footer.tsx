"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-edge px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-dim">
          © {year} {profile.name}. Built with Next.js & a lot of coffee.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-cursor-pointer
                className="text-slate hover:text-violet-light transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          data-cursor-pointer
          className="flex items-center gap-2 text-sm text-slate hover:text-violet-light transition-colors"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
