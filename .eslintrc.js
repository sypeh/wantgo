// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  // extends: 'expo',
  // ignorePatterns: ['/dist/*'],
  env: {
    jest: true,
  },
  extends: ['expo', 'eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['/dist/*'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unused-modules': ['warn', { unusedExports: true, missingExports: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
