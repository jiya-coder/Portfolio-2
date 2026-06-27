export type ProjectCategory = "AI" | "Full Stack" | "Web" | "ML";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  categories: ProjectCategory[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "respirex",
    title: "RespireX",
    tagline: "Real-time respiratory health monitoring",
    description:
      "An ML-powered platform that analyzes breathing patterns and audio signals to flag early signs of respiratory irregularities, with a clinician-facing dashboard for trend tracking.",
    image: "/projects/respirex.jpg",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    categories: ["AI", "ML"],
    github: "https://github.com/jiyajaiswal/respirex",
    demo: "https://respirex.vercel.app",
    featured: true,
  },
  {
    id: "skill-exchange",
    title: "Student Skill Exchange Platform",
    tagline: "Peer-to-peer learning marketplace",
    description:
      "A full-stack platform where students trade skills instead of money — book a session teaching guitar, get one in return learning React. Includes scheduling, ratings, and real-time chat.",
    image: "/projects/skill-exchange.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    categories: ["Full Stack", "Web"],
    github: "https://github.com/jiyajaiswal/skill-exchange",
    demo: "https://skillexchange.vercel.app",
    featured: true,
  },
  {
    id: "posture-ai",
    title: "Posture AI",
    tagline: "Computer-vision posture correction",
    description:
      "A webcam-based posture monitor using pose estimation to detect slouching in real time and nudge users back to a healthy sitting position, with session analytics.",
    image: "/projects/posture-ai.jpg",
    tech: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
    categories: ["AI", "ML"],
    github: "https://github.com/jiyajaiswal/posture-ai",
    demo: "https://posture-ai.streamlit.app",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "Hyper-local forecasts, minimal UI",
    description:
      "A clean, fast weather dashboard with hourly and 7-day forecasts, animated weather states, and saved locations — built to be the weather app I actually wanted to use.",
    image: "/projects/weather-dashboard.jpg",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    categories: ["Web", "Full Stack"],
    github: "https://github.com/jiyajaiswal/weather-dashboard",
    demo: "https://weather-dash-jiya.vercel.app",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    tagline: "Context-aware conversational assistant",
    description:
      "A GenAI chatbot built on a retrieval-augmented pipeline, capable of answering questions grounded in a custom knowledge base with source citations and conversation memory.",
    image: "/projects/ai-chatbot.jpg",
    tech: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"],
    categories: ["AI"],
    github: "https://github.com/jiyajaiswal/ai-chatbot",
    demo: "https://jiya-chatbot.vercel.app",
  },
];

export const projectFilters: ProjectCategory[] = ["AI", "Full Stack", "Web", "ML"];
