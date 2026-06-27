export type ExperienceType =
  | "internship"
  | "freelance"
  | "college"
  | "leadership"
  | "hackathon";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "internship",
    title: "Machine Learning Intern",
    organization: "TechNova Labs",
    period: "May 2025 — Jul 2025",
    description:
      "Worked on the applied ML team building data pipelines and fine-tuning models for a client-facing recommendation system.",
    highlights: [
      "Improved model inference latency by 32%",
      "Shipped a feature used by 10k+ daily active users",
    ],
  },
  {
    id: "exp-2",
    type: "hackathon",
    title: "1st Place — HealthTech Hackathon",
    organization: "National Student Hackfest",
    period: "Feb 2025",
    description:
      "Built RespireX as a 36-hour prototype with a team of three, winning first place out of 80+ teams for technical execution and real-world impact.",
  },
  {
    id: "exp-3",
    type: "leadership",
    title: "Core Team Lead",
    organization: "College AI/ML Society",
    period: "Aug 2024 — Present",
    description:
      "Lead a team of 12 organizing workshops, speaker sessions, and a peer-mentorship program for 200+ student members.",
  },
  {
    id: "exp-4",
    type: "freelance",
    title: "Freelance Full-Stack Developer",
    organization: "Self-employed",
    period: "Jan 2024 — Present",
    description:
      "Designed and built web applications for small businesses and student-led startups, from landing pages to full product MVPs.",
  },
  {
    id: "exp-5",
    type: "college",
    title: "B.Tech, Computer Science (AI & ML)",
    organization: "Your University Name",
    period: "2022 — 2026",
    description:
      "Coursework in machine learning, deep learning, data structures, and distributed systems. Maintaining a strong academic record alongside project work.",
  },
];
