/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "section1-bg": "#ECF9FF",
        primary: "#060640",
        secondary: "#00E5CC",
        third: "#828297",
        paragraph: "#9090A7",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
