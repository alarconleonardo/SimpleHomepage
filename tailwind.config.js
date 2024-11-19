/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#223344",
        secondary: "#909193",
        button: "#2A4DD0",
      },
    },
  },
  plugins: [],
};
