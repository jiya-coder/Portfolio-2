"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  Laptop,
  GraduationCap,
  Users,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experience, ExperienceType } from "@/data/experience";

const typeConfig: Record<
  ExperienceType,
  { icon: typeof Briefcase; label: string }
> = {
  internship: { icon: Briefcase, label: "Internship" },
  freelance: { icon: Laptop, label: "Freelance" },
  college: { icon: GraduationCap, label: "Education" },
  leadership: { icon: Users, label: "Leadership" },
  hackathon: { icon: Trophy, label: "Hackathon" },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've spent my time"
          description="Internships, freelance work, leadership, and the moments that pushed me to learn fast."
        />

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-[19px] sm:left-6 top-0 bottom-0 w-px bg-edge" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* node */}
                  <div className="absolute left-0 sm:left-0 top-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-panel-2 border border-edge flex items-center justify-center">
                    <Icon size={16} className="text-violet-light" />
                  </div>

                  <div className="glass-light rounded-2xl p-6 hover:border-violet-light/40 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="eyebrow !text-xs">{config.label}</span>
                      <span className="text-xs font-mono text-slate-dim">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm text-violet-light mt-0.5">
                      {item.organization}
                    </p>
                    <p className="mt-3 text-slate leading-relaxed">
                      {item.description}
                    </p>
                    {item.highlights && (
                      <ul className="mt-4 space-y-1.5">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-slate"
                          >
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-light flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
