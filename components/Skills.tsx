"use client";

import { motion } from "motion/react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Tools and technologies I reach for most, grouped by where they fit in the stack."
        />

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              data-cursor-pointer
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
                activeTab === cat.id
                  ? "text-white"
                  : "text-slate hover:text-ink"
              )}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="skill-tab-bg"
                  className="absolute inset-0 rounded-full bg-thread-gradient"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid sm:grid-cols-2 gap-5"
        >
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="group glass-light rounded-2xl p-5 hover:border-violet-light/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-ink">{skill.name}</span>
                <span className="font-mono text-xs text-violet-light">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-edge overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="h-full rounded-full bg-thread-gradient group-hover:shadow-[0_0_12px_rgba(108,92,231,0.6)] transition-shadow"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
