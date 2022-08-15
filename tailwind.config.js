/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Work": "#ff8c66",
        "soft-blue": "#56c2e6",
        "light-red": "#ff5c7c",
        "lime-green": "#4acf81",
        "violet": "#7536d3",
        "soft-orange": "#f1c65b",
      },
      gridTemplateRows:{
        '8': 'repeat(8, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '7-phone': '185px repeat(6, minmax(0, 140px))'
      }
    },
  },
  plugins: [],
};
