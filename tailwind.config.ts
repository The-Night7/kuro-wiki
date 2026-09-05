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
        night: "#141A18",
        panel: "#1C2524",
        panel2: "#0C100F",
        line: "#DBC599",
        parchment: "#DBC599",
        muted: "#96886C",
        gold: "#DBC599",
        goldbright: "#FFFFFF",
        teal: "#557283",
        ember: "#C35952",
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
