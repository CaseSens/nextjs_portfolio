import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pink-grad":
          "linear-gradient(to bottom, #C62368, #931C1C 70%, black 95%)",
        "blue-grad":
          "linear-gradient(to bottom, #030032, #931C1C 70%, black 95%)",
      },
      colors: {
        darkblue: "#01223b",
        hotpink: "#c62368",
        lightgreen: "#6CF199",

        bluestone: "#2b253e",
        primbeige: "#C3BBB5",

        textcream: "#F1EFEE",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        playfair: ["var(--font-playfair)"],
        poppins: ["var(--font-poppins)"],
      },
      gridTemplateColumns: {
        "widget-img-grid-col": "1fr 1fr",
        "page-padding-cols-sm": "0.1fr 1fr 0.1fr",
        "page-padding-cols-xl": "0.25fr 1fr 0.25fr",
        "gallery-fr-5": "0.1fr 0.1fr 0.1fr 0.1fr 0.6fr",
      },
      gridTemplateRows: {
        "widget-img-grid-row": "1fr, 1fr",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "bubble-up-bottom": "bubble-up-bottom 48s ease infinite",
        "bubble-up-bottom-left": "bubble-up-bottom-left 36s ease infinite",
      },
      keyframes: {
        "bubble-up-bottom": {
          "0%": { bottom: "10%", right: "2rem", transform: "rotate(0deg)" },
          "20%": { bottom: "20%", right: "5rem", transform: "rotate(0deg)" },
          "40%": { bottom: "40%", right: "3rem", transform: "rotate(180deg)" },
          "50%": { bottom: "75%", right: "2rem", transform: "rotate(180deg)" },
          "60%": { bottom: "60%", right: "4rem", transform: "rotate(360deg)" },
          "80%": { bottom: "50%", right: "3rem", transform: "rotate(180deg)" },
          "100%": { bottom: "10%", right: "2rem", transform: "rotate(0deg)" },
        },
        "bubble-up-bottom-left": {
          "0%": { bottom: "10%", left: "1rem", transform: "rotate(0deg)" },
          "20%": { bottom: "20%", left: "4rem", transform: "rotate(0deg)" },
          "40%": { bottom: "40%", left: "2rem", transform: "rotate(90deg)" },
          "50%": { bottom: "75%", left: "3rem", transform: "rotate(180deg)" },
          "60%": { bottom: "50%", left: "2rem", transform: "rotate(360deg)" },
          "80%": { bottom: "40%", left: "2rem", transform: "rotate(180deg)" },
          "100%": { bottom: "10%", left: "1rem", transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
