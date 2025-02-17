/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-custom": "#08A5FF",
        "bg-custom":"linear-gradient(to bottom, #040003, #0f0a10, #161219, #1b1921, #1e1f2a, #1f232e, #202832, #212c36, #232e35, #263134, #2a3234, #2f3434);"
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      minHeight: {
        'screen': '92vh',
      }
    },
  },
  plugins: [require("daisyui")],
};