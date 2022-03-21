module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  ignorePatterns: ["*.test.ts", "src/reportWebVitals.js"],

  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
    indent: ["warn", 4],
    "react/prop-types": "off",
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ]
};
