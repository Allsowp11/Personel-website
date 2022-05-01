const { white } = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'legal_lime': '#a7d129',
        'dark_legal_lime' : '#080807',
        'my_white': '#c4c4c4'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
            css: {
              h1: {
                color: theme('colors.legal_lime'),


              },
              h2:{
                color: theme('colors.legal_lime'),


              },
              
              p: {
                color: theme('colors.my_white'),

              },
              strong:{
                color: theme('colors.legal_lime'),

              },
              pre:{
                color: theme('colors.my_white'),
              },
              
            }
          },
          mylime :{
            css: {
              '--tw-prose-pre-bg': theme('colors.dark_legal_lime'),
              '--tw-prose-quote-borders': theme('colors.legal_lime'),
              '--tw-prose-code': theme('colors.legal_lime'),
              '--tw-prose-links': theme('colors.legal_lime'),
            }
          }
        }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
