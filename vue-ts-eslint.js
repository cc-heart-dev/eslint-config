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
    '@typescript-eslint/no-explicit-any': 0,
    "no-undef": "off", // supports unplugin-auto-imports
    '@typescript-eslint/consistent-type-imports': 'error', // 当只引用类型时，自动加上 type 操作符
  },
};
