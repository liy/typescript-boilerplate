module.exports = {
  plugins: [
    "syntax-dynamic-import",
    "@babel/plugin-proposal-optional-chaining"
  ],
  presets: ["@babel/preset-env", "@babel/typescript", "@babel/preset-react"],
  env: {
    test: {
      // Adding plugin-transform-runtime allow testing await
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
};
