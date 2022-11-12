/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      msmax: { max: "320px" },
      mmmax: { max: "375px" },
      mlmax: { max: "425px" },
      smmax: { max: "639px" },
      mdmax: { max: "767px" },
      lgmax: { max: "1023px" },
      xlmax: { max: "1279px" },
      ms: "320px",
      mm: "375px",
      ml: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      primary: "#134473",
      secondary: "#FFFFFF",
      tertiary: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
