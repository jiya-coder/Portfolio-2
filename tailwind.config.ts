import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-void)",
        panel: "var(--color-panel)",
        "panel-2": "var(--color-panel-2)",
        edge: "var(--color-edge)",
        ink: "var(--color-ink)",
        slate: "var(--color-slate)",
        "slate-dim": "var(--color-slate-dim)",
        violet: {
          DEFAULT: "var(--color-violet)",
          light: "var(--color-violet-light)",
          dark: "var(--color-violet-dark)",
        },
        cobalt: "var(--color-cobalt)",
        paper: "var(--color-paper)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "thread-gradient":
          "linear-gradient(180deg, #4361EE 0%, #6C5CE7 50%, #A78BFA 100%)",
        "violet-glow":
          "radial-gradient(circle at 50% 0%, rgba(108,92,231,0.25), transparent 60%)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
