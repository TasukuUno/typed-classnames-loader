module.exports = {
  mode: 'development',
  entry: {
    'index': './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: [
          /\.styl$/,
        ],
        use: [
          {
            loader: 'typed-classnames-loader/classnames',
          },
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
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
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                require('autoprefixer')({
                  browsers: [
                    'ie 10',
                    'ios 6',
                    'android 4'
                  ],
                }),
              ],
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    'ie 10',
                    'ios 6',
                    'android 4',
                  ],
                },
              },
            ],
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx' ],
  },
};
