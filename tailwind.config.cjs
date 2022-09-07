/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fm-light-red-work': 'hsl(15, 100%, 70%)', //Work
        'fm-soft-blue-play': 'hsl(195, 74%, 62%)', //Play
        'fm-light-red-study': 'hsl(348, 100%, 68%)',
        'fm-lime-green-exercise': 'hsl(145, 58%, 55%)',
        'fm-violet-social': 'hsl(264, 64%, 52%)',
        'fm-soft-orange-care': 'hsl(43, 84%, 65%)',
        'fm-very-dark-blue': 'hsl(226, 43%, 10%)',
        'fm-dark-blue': 'hsl(235, 46%, 20%)',
        'fm-desat-blue': 'hsl(235, 45%, 61%)',
        'fm-pale-blue': 'hsl(236, 100%, 87%)',
        'fm-blue': 'hsl(246, 80%, 60%)'
      },
      fontFamily: {
        sans: [
          'Rubik', ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  plugins: [],
}
