import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          obsidian: "#0A0C10",
          gold: {
            light: "#F4D03F",
            DEFAULT: "#D4AF37",
            dark: "#B8860B",
          },
          marble: "#F8F9FA",
          ruby: "#8B0000",
        },
      },
      fontFamily: {
        royal: ["Alexandria", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      boxShadow: {
        "luxury-glow": "0 0 20px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
