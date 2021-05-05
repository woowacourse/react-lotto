const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/**/*.{html,css}', './src/**/*.{js,jsx,html,css}'],
  darkMode: false,
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors,
      translate: 'active',
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
      },
      minWidth: {
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      strokeWidth: {
        3: '3',
        4: '4',
        5: '5',
      },
      ringWidth: {
        0.5: '0.5px',
        1.5: '1.5px',
        3: '3px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
