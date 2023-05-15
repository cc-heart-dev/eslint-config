const { ignorePatterns, env } = require('./config')

module.exports = {
  env,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
  },
  ignorePatterns,
  rules: {
    '@typescript-eslint/no-explicit-any': 0
  },
};
