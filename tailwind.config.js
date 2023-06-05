/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cs-blue": "#3257ff",
        "cs-gray": "#9b9b9b",
        "cs-green-dark": "#00120f",
        "cs-primary-green": "#03261f",
        "cs-purple": "#ca00a6",
        "cs-red": "#ff163d",
        "cs-blue-hover": "#3257ff",
        "cs-gray-hover": "#d9d9d9",
        "cs-green-dark-hover": "#00120f",
        "cs-primary-green-hover": "#03261f",
        "cs-purple-hover": "#ca00a6",
        "cs-red-hover": "#ff163d",
      },
    },
  },
  plugins: [],
};
