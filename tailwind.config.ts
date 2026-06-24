import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#182845",
          soft: "#182845",
          card: "#182845",
          border: "#182845",
        },
        purple: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          soft: "#8b5cf6",
          glow: "#6d28d9",
          muted: "#4c1d95",
          faint: "#1e1040",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97e",
          dark: "#a07c28",
          glow: "#d4af37",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "Heebo", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "purple-glow":
          "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #c9a84c, transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      },
      boxShadow: {
        purple: "0 0 40px rgba(124,58,237,0.25)",
        "purple-sm": "0 0 20px rgba(124,58,237,0.15)",
        gold: "0 0 20px rgba(201,168,76,0.2)",
        card: "0 4px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
