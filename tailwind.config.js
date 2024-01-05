/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4299e1",
        secondary: "#191970",
      },
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Fantasy", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
