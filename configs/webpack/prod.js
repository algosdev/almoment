// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const commonConfig = require("./common");
module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./lib/index.ts",
  output: {
    filename: "index.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
    umdNamedDefine: true,
    // library: "almoment",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.tsx?$/, /\.ts?$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
