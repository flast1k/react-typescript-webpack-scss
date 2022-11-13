const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = (env) =>
  require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = (env) => {
  console.log(env);

  return merge(
    {
      mode: env.mode,
      entry: './src/index.tsx',
      module: {
        rules: [
          {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
        }),
      ],
    },
    modeConfig(env)
  );
};
