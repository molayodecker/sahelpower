import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#07080f",
          elevated: "#101321",
          muted: "#171a28",
        },
        border: "rgb(255 255 255 / 0.1)",
        text: {
          DEFAULT: "#f4f6fb",
          muted: "#9aa3b8",
        },
        accent: {
          DEFAULT: "#c9ff00",
          coral: "#ff7f66",
          soft: "rgb(201 255 0 / 0.12)",
        },
      },
      fontFamily: {
        sans: [
          "var(--sahel-font-sans)",
          "Mona Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--sahel-font-sans)",
          "Mona Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
