const path = require("node:path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    crossOriginLoading: "anonymous",
  },
  resolve: {
    alias: {
      "@src": path.join(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: "./src/views/index.html",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
      integrity: "auto",
    }),
  ],
  module: {
    defaultRules: [
      "...",
    ],
  },
};
