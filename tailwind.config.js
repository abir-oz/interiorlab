/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
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
    },
    fontFamily: {
      display: ['oswald'],
      sans: ['Open Sans', "Helvetica", "Arial", "sans-serif"]
    },
  },
  plugins: [],
}
