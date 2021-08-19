// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TypescriptDeclarationGenerator = require("tsd-webpack-plugin");
const commonConfig = require("./common");
module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./lib/index.ts",
  output: {
    filename: "index.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
    umdNamedDefine: true,
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.tsx?$/, /\.ts?$/],
        use: [
          {
            loader: "ts-loader",
          },
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
  plugins: [
    new TypescriptDeclarationGenerator({
      moduleName: "./lib/index.d.ts",
      out: "./index.d.ts", // The reference here is your output file folder.
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
