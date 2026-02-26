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
        bg: {
          primary: "#0D0F0E",
          secondary: "#161A18",
          tertiary: "#1E2420",
        },
        text: {
          primary: "#F2EDE6",
          secondary: "#A8A196",
          tertiary: "#6B6560",
        },
        accent: {
          primary: "#E03E2D",
          "primary-hover": "#C73524",
          secondary: "#D4A843",
          "secondary-muted": "rgba(212, 168, 67, 0.2)",
        },
        success: "#4CAF50",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(3.5rem, 7vw, 6rem)",
        h1: "clamp(2.5rem, 5vw, 4rem)",
        h2: "clamp(1.75rem, 3.5vw, 2.5rem)",
        h3: "clamp(1.25rem, 2.5vw, 1.5rem)",
        "body-lg": "clamp(1.125rem, 1.3vw, 1.25rem)",
        body: "clamp(1rem, 1.1vw, 1.125rem)",
        caption: "clamp(0.8rem, 0.9vw, 0.875rem)",
        overline: "clamp(0.7rem, 0.8vw, 0.75rem)",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.3",
        normal: "1.6",
        relaxed: "1.8",
      },
      letterSpacing: {
        tight: "-0.03em",
        normal: "0",
        wide: "0.08em",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "64px",
        "3xl": "96px",
        "4xl": "128px",
      },
      maxWidth: {
        content: "1200px",
        text: "720px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(180deg, #0D0F0E 0%, #161A18 50%, #1E2420 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #E03E2D 0%, #D4A843 100%)",
        "gradient-card-glow":
          "radial-gradient(ellipse at center, rgba(224, 62, 45, 0.06) 0%, transparent 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
          "100%": { backgroundPosition: "0% center" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
