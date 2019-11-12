const path = require("path");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Kết nối HTML với file bundle.js
const WebpackBar = require("webpackbar"); // Để vễ process bar
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Tự động xóa các file build sau khi npm start

module.exports = {
  entry: "./src/index.js", // File sẽ được biên dịch

  // Nơi file đươc build ra
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      // Convert ES6,7 => ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // Convert style, file css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  // Setting PORT LINK HEADER ...
  devServer: {
    port: 3000, // Set port cho server
    noInfo: true // Không cho hiên message webpack khi run
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new WebpackBar(),
    new CleanWebpackPlugin()
  ]
};
