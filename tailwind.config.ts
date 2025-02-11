import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F4F9F3",
          200: "#D3EAD0",
          300: "#B3D8AC",
          400: "#91C789",
          500: "#759F6D",
          600: "#577752",
          700: "#3A5137",
        },
        secondary: {
          100: "#FFF3F3",
          200: "#FFD4CE",
          300: "#FFB3AB",
          400: "#FF9386",
          500: "#CC756B",
          600: "#995950",
          700: "#663B35",
        },
        gray: {
          100: "#CCCCCC",
          200: "#BBBBBB",
          300: "#777777",
          400: "#222222",
        },
        "accent-yellow": {
          100: "#FEFAEF",
          200: "#FFECC2",
          300: "#FED885",
          400: "#998250",
          500: "#4D4129",
        },
        "accent-purple": {
          100: "#F6F5FA",
          200: "#C6C3DE",
          300: "#9E9BC8",
          400: "#706D8C",
          500: "#3F3E50",
        },
        "accent-blue": {
          100: "#F1F8FE",
          200: "#ADD9FE",
          300: "#76C0FF",
          400: "#5386B3",
          500: "#2E4C66",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
