const { ignorePatterns, env } = require('./config')

module.exports = {
  env,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint", "react-refresh"],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns,
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
  },
};
