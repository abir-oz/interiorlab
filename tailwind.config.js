/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        'ss-red': {
          50: '#bf161d',
          100: '#cf171f',
          200: '#df1a23',
          300: '#e11923',
          400: '#e61a23',
          500: '#e91c23',
          600: '#ee2e38',
        }
      },
      backgroundImage: {
        beetle:
          "url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80')",
        fiat:
          "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        van:
          "url('https://images.unsplash.com/photo-1503650923300-dd2f6a007eaf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80')",
        mini:
          "url('https://images.unsplash.com/photo-1557358070-ef6ae6f84629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80')",
      },
    },
    fontFamily: {
      display: ['oswald'],
      sans: ['Open Sans', "Helvetica", "Arial", "sans-serif"]
    },
  },
  plugins: [],
}
