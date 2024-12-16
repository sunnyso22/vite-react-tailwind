/** @type {import('tailwindcss').Config} */
const flagger = require('tailwind-flagger')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [flagger],
}

