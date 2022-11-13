const getStyleLoader = (styleLoader = 'style-loader') => ({
  test: /\.(sc|sa)ss$/,
  use: [
    { loader: styleLoader },
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
    },
    { loader: 'sass-loader' },
  ],
});

exports.getStyleLoader = getStyleLoader;
