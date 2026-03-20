import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        slideInUp: "slideInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        fadeIn: "fadeIn 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        slideInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
