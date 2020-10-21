module.exports = {
  extends: ["airbnb", "prettier", "plugin:jsx-a11y/recommended"],
  plugins: ["prettier", "react", "react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },
  rules: {
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ]
  }
};
