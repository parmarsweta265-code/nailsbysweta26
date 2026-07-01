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
        roseGold: "#B76E79",
        roseGoldLight: "#D4A0A7",
        roseGoldDark: "#8B4F58",
        blush: "#F9E4E8",
        blushDeep: "#F2C4CC",
        champagne: "#FAF0E6",
        ivory: "#FFFFF0",
        charcoal: "#2C2C2C",
        mist: "#F7F3F4",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "rose-gradient":
          "linear-gradient(135deg, #B76E79 0%, #D4A0A7 50%, #FAF0E6 100%)",
        "dark-gradient":
          "linear-gradient(180deg, rgba(44,44,44,0.7) 0%, rgba(44,44,44,0.3) 100%)",
      },
      boxShadow: {
        luxury: "0 8px 32px rgba(183, 110, 121, 0.15)",
        "luxury-hover": "0 16px 48px rgba(183, 110, 121, 0.25)",
        soft: "0 4px 24px rgba(0,0,0,0.06)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
