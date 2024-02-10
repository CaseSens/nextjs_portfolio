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
        darkblue: "#01223b",
        hotpink: "#c62368",
        lightgreen: "#6CF199",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      gridTemplateColumns: {
        "widget-img-grid-col": "1fr, 1fr",
      },
      gridTemplateRows: {
        "widget-img-grid-row": "1fr, 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
