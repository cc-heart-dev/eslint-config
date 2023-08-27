const ignorePatterns = [
  ".eslintrc.cjs",
  ".eslintrc.js",
  "**/node_modules/**/*",
  "**/dist/**/*",
];

const env = {
  browser: true,
  es2021: true,
  node: true,
  jest: true,
};

const baseRules = {
  "@typescript-eslint/no-extra-semi": "off",
};

module.exports = {
  ignorePatterns,
  env,
  baseRules,
};
