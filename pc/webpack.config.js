var path =require("path");
module.exports = {
  entry: path.resolve(__dirname,"./src/js/main.js"),
  output: {
    filename: path.resolve(__dirname,"./dist/bulid.js"),
  },
  module: {
    loaders: [
      //.js 文件使用 babel-loader 来编译处理
      //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    {   test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: [ 'es2015','react']
        }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
