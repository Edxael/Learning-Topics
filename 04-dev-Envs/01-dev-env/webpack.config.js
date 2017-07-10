module.exports = {
  entry: ['/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/01-dev-env/app/index.js'],
  output: {
    path: '/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/01-dev-env/build',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: '/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/01-dev-env/build',
    inline: true
  }
}
