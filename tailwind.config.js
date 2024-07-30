/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          "2xl": "1280px",
          "3xl": "1710px",
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
        "light-gray": "rgb(206,208,217)",
        blur: "rgba(85, 84, 94, 0.3)",
      },
      width: {
        "nav-mobile": "calc(100% - 30px)",
        "col-3": "calc(100% / 3 - 10px)",
        "brand-width": "calc(50% - 8px)",
        "card-3xl": "calc(100% / 4 - 22.5px)",
        "card-2xl": "calc(100% / 3 - 20px)",
        "card-xl": "calc(50% - 5px)",
      },
      screens: {
        xxs: "335px",
        mini: "400px",
        xs: "480px",
        slider: "540px",
        inner: "1280px",
        "3xl": "1710px",
      },
      backgroundImage: {
        "footer-bottom": "url(@/assets/images/footer-bottom.png)",
      },
    },
  },
};
