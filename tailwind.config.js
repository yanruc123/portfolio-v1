/** @type {import('tailwindcss').Config} */
import colors from "./app/custom/color";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        textMain: colors.textMain,
        background: colors.background,
        hoverBorder: colors.hoverBorder,
      },
    },
  },
  plugins: [],
};
