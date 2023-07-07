/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#003E23",
        "primary-500": "#00A763",
        "primary-100": "#EAFEF1",
        "background-100": "#E8F3F5",
        "background-200": "#F6F6F6",
      },
    },
  },
  plugins: [],
};
