"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectFilters, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of AI/ML experiments and full-stack products — click into any of them for code or a live demo."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...projectFilters].map((f) => (
            <button
              key={f}
              data-cursor-pointer
              onClick={() => setFilter(f as ProjectCategory | "All")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                filter === f
                  ? "bg-violet/20 border-violet/50 text-violet-light"
                  : "border-edge text-slate hover:text-ink hover:border-slate-dim"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-slate">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
