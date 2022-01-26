module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'immino-green': 'rgb(16,188,73)',
        'immino-blue': 'rgb(18,104,253)',
        'immino-red': 'rgb(234,34,47)',
        'immino-yellow': 'rgb(253,193,12)',
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
