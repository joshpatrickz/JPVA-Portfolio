/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "#4CD7D0",
        "accent-dark": "#3BBFB8",
        secondary: "#E1C340",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
