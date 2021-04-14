module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,html}'],
  },
  darkMode: false,
  theme: {
    extend: {},
    minWidth: {
      0: '0',
      '1/8': '12.5%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    strokeWidth: {
      3: '3',
      4: '4',
      5: '5',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
