"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        speed / 1.6
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6"
    >
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
        {/* Text content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-light opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-light" />
            </span>
            Open to internships & collaborations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>
            <br />
            {profile.name.split(" ").slice(1).join(" ")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 h-9 flex items-center"
          >
            <span className="font-mono text-lg sm:text-xl text-slate">
              <span className="text-violet-light">{"// "}</span>
              {typedRole}
              <span className="inline-block w-[2px] h-5 bg-violet-light ml-1 align-middle animate-pulse-glow" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-slate text-lg max-w-xl leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-cursor-pointer
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 rounded-full bg-thread-gradient px-6 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(108,92,231,0.35)] hover:shadow-[0_0_45px_rgba(108,92,231,0.5)] transition-shadow"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              data-cursor-pointer
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 rounded-full glass-light px-6 py-3.5 font-medium text-ink hover:border-violet-light/50 transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-thread-gradient opacity-30 blur-2xl animate-pulse-glow" />
            <div className="relative h-full w-full rounded-[2.5rem] glass overflow-hidden animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.svg"
                alt={profile.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-5 -left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <div>
                <p className="text-xs text-slate font-mono">Status</p>
                <p className="text-sm font-medium text-ink">Building things</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="eyebrow">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-violet-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
