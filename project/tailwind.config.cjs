/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'320px',
        'xxl':'1440px'
      },
      rotate: {
        '360':'360deg'
      }
    },
  },
  plugins: [],
}
