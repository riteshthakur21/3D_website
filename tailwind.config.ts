import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        gold: "var(--gold)",
        "gold-dim": "var(--gold-dim)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(208,25,25,0.25)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #8B0000 0%, #1A237E 100%)",
        "cta-gradient": "linear-gradient(135deg, #D01919 0%, #1565C0 100%)"
      }
    }
  },
  plugins: []
};

export default config;
