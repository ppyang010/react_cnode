var path =require("path");
module.exports = {
  entry: path.resolve(__dirname,"./src/js/main.js"),
  output: {
    filename: path.resolve(__dirname,"./dist/bulid.js"),
  },
  module: {
    loaders: [
      //.js 文件使用 babel-loader 来编译处理
      { test: /\.js$/,    loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
