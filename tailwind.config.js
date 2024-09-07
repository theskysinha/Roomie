/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#4943EF",
        secondary: "#FFFFFF",
        gray: {
          default: "#DFDFDF"
        },
      },
      fontFamily: {
        rubik: ["Rubik-Black"],
        rubikbold: ["Rubik-Bold"],
        rubiklight: ["Rubik-Light"],
        rubikmedium: ["Rubik-Medium"],
        rubiksemibold: ["Rubik-SemiBold"],
        rubikregular: ["Rubik-Regular"],
      },
    },
  },
  plugins: [],
}

