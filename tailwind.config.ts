import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#141B2E",
        panel: "#1B2540",
        panel2: "#212C4C",
        line: "#31406B",
        parchment: "#EDEAE0",
        muted: "#93A0C2",
        gold: "#C9A961",
        goldbright: "#E4C883",
        teal: "#4FBDBA",
        ember: "#D8724B",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
