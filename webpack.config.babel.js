import webpack from "webpack";
import path from "path";

export default {
  entry: {
    "celebs": "./celebs.js",
  },
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    library: "celebs",
    libraryTarget: "umd",
    path: __dirname,
    filename: "[name].dist.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
