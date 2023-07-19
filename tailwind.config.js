/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "990px",
    },
    extend: {
      fontFamily: {
        iransans: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
