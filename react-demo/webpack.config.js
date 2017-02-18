module.exports = {
  entry: './src/index.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  }
}
