"use client";

import { motion } from "motion/react";
import { GraduationCap, Trophy, Sparkles, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({
  value,
  label,
  suffix,
  delay,
}: {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="glass-light rounded-2xl p-6 text-center hover:border-violet-light/40 transition-colors"
    >
      <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
        {animatedValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate">{label}</p>
    </motion.div>
  );
}

const facts = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "B.Tech in CS, specializing in AI & Machine Learning.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "6 hackathons, including a first-place national win.",
  },
  {
    icon: Sparkles,
    title: "Focus",
    desc: "GenAI applications, computer vision, full-stack systems.",
  },
  {
    icon: Heart,
    title: "Interests",
    desc: "Reading sci-fi, UI design, and trying new coffee shops.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="The short version"
          description="A bit about who I am, what I've done, and what I'm into outside of code."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Quick fact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-light rounded-2xl p-6 hover:border-violet-light/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-violet/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-violet-light" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    {fact.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
