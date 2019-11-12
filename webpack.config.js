const path = require("path");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Kết nối HTML với file bundle.js
const WebpackBar = require("webpackbar"); // Để vễ process bar
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Tự động xóa các file build sau khi npm start
const Dotenv = require("dotenv-webpack");

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
    new CleanWebpackPlugin(),
    new Dotenv({
      path: "./.env", // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
};
