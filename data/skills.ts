export interface Skill {
  name: string;
  level: number; // 0-100, used for progress bars
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express", level: 82 },
      { name: "Spring Boot", level: 70 },
      { name: "Django", level: 75 },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      { name: "Python", level: 93 },
      { name: "TensorFlow", level: 80 },
      { name: "Scikit-Learn", level: 85 },
      { name: "OpenCV", level: 78 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 70 },
    ],
  },
];
