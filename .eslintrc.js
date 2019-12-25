module.exports = {
  // Explicitly set default linting using babel eslint parser.
  // override is added for typescript. As normal JavaScript has optional chaining
  // which TypeScript lint does not support yet(probably never, since variable is typed)
  // Some example from Christian: https://bitbucket.org/drl_admin/ao.catalyst.lastmile.portal/src/master/.eslintrc
  parser: "babel-eslint",
  extends: [
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "prettier"
  ],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
    // whitelist the environment variable provided by jest
    "jest/globals": true
  },
  settings: {
    react: {
      version: require("./package.json").dependencies.react
    }
  },

  // TypeScript overrides
  overrides: [
    {
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "prettier"
      ],
      plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
};
