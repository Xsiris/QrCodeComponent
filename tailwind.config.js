/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm : '375px',
      lg : '1440px'
    },
    extend: {
      colors:{
        slate300 : 'hsl(212, 45%, 89%)',
        slate500 : 'hsl(216, 15%, 48%)',
        slate900 : 'hsl(218, 44%, 22%)'
      }
    },
    fontFamily:{
      'Outfit' : ['Outfit']
    }
  },
  plugins: [],
}

