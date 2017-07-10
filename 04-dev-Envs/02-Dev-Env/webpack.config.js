module.exports = {
  entry: ['/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/02-Dev-Env/app/index.js'],
  output: {
    path: '/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/02-Dev-Env/build',
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
    contentBase: '/home/edmundo/Dropbox/00-St-Notes/04-dev-Envs/02-Dev-Env/build',
    inline: true
  }
}
