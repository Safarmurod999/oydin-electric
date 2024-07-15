/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      container: {
        screens: {
          // xs: "320px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1710px",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dacia: ["Dacia Block", "sans-serif"],
        readex: ["Readex Pro", "sans-serif"],
      },
      colors: {
        white: "#FAFAFA",
        black: "#01040E",
        gray: "#F1F1F1",
        "dark-gray": "#66708D",
        blue: "#0236E5",
        yellow: "#FFC900",
        "card-bg": "#EBEBEB",
        footer: "#11141C",
        "footer-card": "#171B24",
      },
      width: {
        "nav-mobile": "calc(100% - 30px)",
        "brand-width": "calc(50% - 12px)",
      },
      screens:{
        'xs':'480px'
      }
    },
  },
  plugins: [flowbite.plugin()],
};
