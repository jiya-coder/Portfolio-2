"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="group relative rounded-2xl glass-light overflow-hidden hover:border-violet-light/40 transition-colors"
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, rgba(167,139,250,0.15), transparent 70%)`,
        }}
      />

      {/* image */}
      <div className="relative h-52 overflow-hidden bg-panel-2">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-cobalt/10 flex items-center justify-center">
          <span className="font-display text-4xl font-semibold text-white/10 select-none">
            {project.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
      </div>

      <div className="relative p-6">
        <p className="text-xs font-mono text-violet-light mb-1">
          {project.tagline}
        </p>
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-slate leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-edge/60 text-slate"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-violet-light transition-colors"
          >
            <Github size={15} />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-pointer
              className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-violet-light transition-colors"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
