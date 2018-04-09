module.exports = {
  mode: 'development',
  entry: {
    'index': './src/index.js',
  },
  module: {
    rules: [
      {
        test: [
          /\.css$/,
        ],
        use: [
          {
            // loader for classnames auto bind
            loader: 'typed-classnames-loader/classnames',
          },
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // loader for d.ts auto generation
            loader: 'typed-classnames-loader/type',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[hash:base64]',
            },
          },
        ],
      },
    ],
  },
};
