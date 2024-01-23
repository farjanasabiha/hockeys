/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        rotate: {
          '120': '120deg',
          '160': '160deg',
        }
      },
    },
    plugins: [],
  }