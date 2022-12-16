/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts}",
    "./components/**/*.{js,jsx,ts}",
  ],
  theme: {
    colors:{
      primary: "#22236F",
      secondary:"#800080cc",
      third:"#5f00ac",
      ...colors
    },
   
    screens:{
      xs:"515px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
          "poppins":['Poppins', "sans-serif"],
         
      }
    },
  },
  plugins: [],
}
