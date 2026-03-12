import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand background palette
        background: "#1C1610",
        backgroundSecondary: "#2C2015",
        backgroundLight: "#F5EDD8",
        navbar: "#0F0C08",

        // Existing semantic aliases (kept for compatibility)
        "sij-bg-main": "#1C1610",
        "sij-bg-secondary": "#2C2015",
        "sij-bg-light": "#F5EDD8",
        "sij-navbar": "#0F0C08",
        "sij-gold": "#B8960C",
        "sij-gold-dark": "#8B6914",
        "sij-text-dark": "#1C1610",
        "sij-text-light": "#F5EDD8",
      },
    },
  },
  plugins: [],
};

export default config;

