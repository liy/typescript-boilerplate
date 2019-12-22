const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const config = {
    mode: "development",
    entry: {
      app: path.join(__dirname, "src", "index.tsx")
    },
    output: {
      // this make sure all the assets to be accessed from root, ie bundle.js be injected by HtmlWebpackPlugin
      // as "/bundle.js". This is necessary in SPA.
      publicPath: "/",
      filename: "[name].[hash:5].js",
      // Where to put the final 'compiled' file
      path: path.join(__dirname, "dist")
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: [/node_modules/],
          loader: "eslint-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: [{ loader: "babel-loader" }]
        },
        // Force transpile `react-hook-form`, which contains features unsupported in IE11.
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, "node_modules", "react-hook-form")],
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false
                }
              ]
            ]
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: [/node_modules/],
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "game",
        filename: "index.html",
        inject: "body",
        template: "./src/index.html"
      })
    ],
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0",
      port: 3000,
      historyApiFallback: true,
      contentBase: "./dist"
    }
  };

  return config;
};
