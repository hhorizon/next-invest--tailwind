/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#128C76",
        secondary: "#F56B8D",
        white: "#ffffff",
        grey1: "#333333",
        grey2: "#999999",
        grey3: "#ECECEC",
        sky: "#ECF4FD",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
