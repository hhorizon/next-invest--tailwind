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
      backgroundImage: {
        "shape-texture": "url('images/bg-shape-min.png')",
        "wave-texture":
          "url('images/bg-semicircle-min.png'), url('images/bg-wave-min.png')",
      },
    },
  },
  plugins: [],
};
