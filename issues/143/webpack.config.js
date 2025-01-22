import { join } from "node:path";

import HtmlBundlerPlugin from "html-bundler-webpack-plugin";

import { dirname } from "node:path";
import url from "node:url";
const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = dirname(__filename);

const cfg = {
  mode: "production",
  output: {
    crossOriginLoading: "anonymous",
  },
  resolve: {
    alias: {
      "@src": join(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: "./src/views/index.html",
        inline: "./src/views/inline.html",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
      integrity: "auto",
    }),
  ],
};

export default cfg;
