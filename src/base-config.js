const ignorePatterns = [
  ".eslintrc.cjs",
  ".eslintrc.js",
  "**/node_modules/**/*",
  "**/dist/**/*",
];

const env = {
  browser: true,
  es6: true,
  node: true,
  jest: true,
};

module.exports = {
  ignorePatterns,
  env,
};
