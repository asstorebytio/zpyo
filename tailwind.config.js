/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["**.html"],
  theme: {
    extend: {
      fontFamily: {
        doto: ['Doto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        japanese: ['Noto+Sans+JP', 'sans-serif'],
        fancy: ['Cormorant+Garamond'],
      },
    },
  },
  plugins: [],
};
