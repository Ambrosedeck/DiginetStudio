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
        darkPrimary: "#0A0A0A",
        surfaceSecondary: "#F7F7F8",
        purpleAccent: "#8B5CF6",
        blueAccent: "#38BDF8",
        textPrimary: "#111111",
        textMuted: "#666666",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        cardHover: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        glowPurple: "0 0 40px -10px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
