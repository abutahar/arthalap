/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultConfig");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:
        defaultColors +
        {
          transparent: "transparent",
          primary: "#004c97",
          white: "#ffffff",
          gray: "#ececec",
          midnight: "#121063",
          metal: "#565584",
          tahiti: "#3ab7bf",
          silver: "#ecebff",
          "bubble-gum": "#ff77e9",
          bermuda: "#78dcca",
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
