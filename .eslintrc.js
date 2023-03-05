module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this":off,
    "prettier/prettier": "error",
  },
  globals: {
    And: true,
    page: true,
    describe: true,
    export: true,
  },
};
