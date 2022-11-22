module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 'off',
    'no-continue': 'off',
    'no-trailing-spaces': 'off',
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'keyword-spacing': 'off',
    'space-infix-ops': 'off',
    'space-before-blocks': 'off',
    'no-restricted-syntax': 'off',
    'no-lonely-if': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'no-param-reassign': 'off',
    'no-unreachable-loop': 'off',
    'dot-notation': 'off',
    'prefer-const': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'no-restricted-globals': 'off',
    'camelcase': 'off'
  },
  plugins: ['jest'],
};
