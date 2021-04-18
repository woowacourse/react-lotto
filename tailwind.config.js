const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{html,css}', './src/**/*.{js,jsx,html,css}'],
  darkMode: false,
  theme: {
    extend: {
      colors,
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
    extend: {},
  },
  plugins: [],
};
