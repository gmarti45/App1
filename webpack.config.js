module.exports = {
  entry: './app/main.js',
  output: {
    path: '/Users/gmartine/Projects/SideProjects/App1/app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: '/Users/gmartine/Projects/SideProjects/App1/app',
    port: 8100,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets:['react'] }
      },
      {
        test: /\.css$/,
        use: 'to-string-loader'
      },
      {
        test: /\.css$/,
        use: 'style-loader'
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
}