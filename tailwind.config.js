const colors = require('tailwindcss/colors')
module.exports = {
  future: {},
  purge: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        warning: colors.amber,
        error: colors.red,
      },
    },
  },
  variants: {},
  plugins: [],
}
