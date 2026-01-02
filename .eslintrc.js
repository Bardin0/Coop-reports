module.exports = {
  // specify environments
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  // base configuration
  root: true,

  // parser options
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  // extend recommended rule sets
  extends: [
    "eslint:recommended"
  ],

  // custom rules
  rules: {
    // errors
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console": "warn",

    // stylistic preferences (optional)
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  },
};

