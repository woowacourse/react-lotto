module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['semistandard', 'standard-jsx', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
