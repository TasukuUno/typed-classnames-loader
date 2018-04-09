module.exports = {
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: './dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test:  /\.css$/,
        loaders: [
          'typed-classnames-loader/classnames',
          'style-loader?sourceMap=true',
          'typed-classnames-loader/type',
          'css-loader?modules=true&sourceMap=true&localIdentName=[hash:base64]',
        ],
      },
    ],
  },
};
