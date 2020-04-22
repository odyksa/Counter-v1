const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = (env, options) => {
   const isDevMode = options.mode !== "production";

   return {
      entry: "./src/index.jsx",
      output: {
         path: path.resolve(__dirname, "build"),
         publicPath: "/",
         filename: "scripts.js"
      },
      devtool: isDevMode ? "source-map" : false,
      module: {
         rules: [
            {
               test: /\.(html)$/i,
               use: {
                  loader: "html-loader",
                  options: {
                     minimize: true
                  }
               }
            },
            {
               test: /\.(css|sc?ss)$/i,
               use: [
                  {
                     loader: MiniCssExtractPlugin.loader,
                     options: {
                        hmr: isDevMode
                     },
                  },
                  {
                     loader: "css-loader",
                     options: {
                        modules: {
                           localIdentName: "[name]__[local]--[hash:base64:5]"
                        }
                     }
                  },
                  {
                     loader: "postcss-loader"
                  },
                  {
                     loader: "sass-loader"
                  }
               ]
            },
            {
               test: /\.(js|jsx)$/i,
               exclude: /node_modules/,
               use: "babel-loader"
            },
            {
               test: /\.(gif|png|jpe?g|svg)$/i,
               use: [
                  {
                     loader: "file-loader",
                     options: {
                        name: "[name].[ext]",
                        outputPath: "./assets/images"
                     }
                  }
               ]
            },
            {
               test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
               use: [
                  {
                     loader: "file-loader",
                     options: {
                        name: '[name].[ext]',
                        outputPath: "./assets/fonts"
                     }
                  }
               ]
            }
         ]
      },
      resolve: {
         extensions: [".jsx", ".js"]
      },
      plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
            template: "./src/assets/templates/index.html",
            filename: "index.html",
            favicon: "./src/assets/static/favicon.ico"
         }),
         new MiniCssExtractPlugin({
            filename: "styles.css"
         }),
         new DuplicatesPlugin(),
         new UnusedFilesWebpackPlugin()
      ],
      devServer: {
         contentBase: path.join(__dirname, 'build'),
         port: 8081,
         compress: true,
         historyApiFallback: true
      }
   }
}