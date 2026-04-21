import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0B",
          secondary: "#141416",
          tertiary: "#1C1C1F",
        },
        gold: {
          DEFAULT: "#D4AF37",
          primary: "#D4AF37",
          light: "#E8C87C",
          dark: "#8B6914",
        },
        ocean: "#1B4D5C",
        ink: {
          primary: "#F5F5F0",
          muted: "#A8A29E",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
