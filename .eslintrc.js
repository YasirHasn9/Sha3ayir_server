module.exports = {
  env: {
    node: true, // this to tell eslint that the code will run in node environment
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
};
