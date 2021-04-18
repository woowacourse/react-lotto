module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'semistandard',
    'standard-jsx',
    'standard-react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
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
  plugins: ['react', 'jsx-a11y', '@babel'],
  rules: {},
  ignorePatterns: ['build/**/*'],
};
