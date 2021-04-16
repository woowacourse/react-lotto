module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['semistandard', 'standard-jsx', 'standard-react', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  plugins: ['react', '@babel'],
  rules: {},
  ignorePatterns: ['build/**/*'],
};
