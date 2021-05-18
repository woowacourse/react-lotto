module.exports = {
  env: {
    browser: true,
    es2020: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  plugins: ['prettier', 'cypress', 'react'],
};
