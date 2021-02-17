const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'cranberry': {
        DEFAULT: '#D74D79',
        '100': '#FCF4F6',
        '200': '#F3CAD7',
        '300': '#EAA0B8',
        '400': '#E07798',
        '500': '#D74D79',
        '600': '#C52C5D',
        '700': '#9B2349',
        '800': '#711A36',
        '900': '#481022'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vh',
      'em1': '1em',
      'em2': '2em',
      'em3': '3em',
      'em4': '4em'
     },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      borderWidth: ['last'],
    }
  },
}
