/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ["Jersey", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nicomoji: ["NicoMoji", "sans-serif"],
      },
      colors: {
        mainBg: "#1E1C1C",
        mainBoxBg: "#2C2C2C",
        mainBoxBorder: "rgba(75, 75, 75, 0.25)",
        mainProjectBox: "#262626",
        mainWhiteText: "#EFEFEF",
        mainOrange: "#FC8200",
        mainGreen: "#1ED11D",
        mainBlue: "#20D4C8",
        mainPink: "#E844B4",
      },
      boxShadow: {
        orangeShadow: "0px 50px 250px 86px rgba(226, 120, 5, 1)",
        greenShadow: "0px 50px 250px 86px rgba(30, 209, 29, 1)",
        blueShadow: "0px 50px 250px 86px rgba(32, 212, 200, 1)",
        pinkShadow: "0px 50px 250px 86px rgba(176, 42, 112, 1)",
      },
      backgroundImage: {
        blue: "url('./banners/blue.png')",
        green: "url('./banners/green.png')",
        orange: "url('./banners/orange.png')",
        pink: "url('./banners/pink.png')",
        gray: "url('./banners/gray.png')",
      },
    },
  },
  plugins: [],
};
