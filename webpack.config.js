const HtmlPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack-dev-server').Configuration}
 */
const serverConfig = {
  port: '3000',
};

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: './ui/index.tsx',
  output: {
    path: __dirname + '/ui-dist',
    filename: 'app.js',
  },

  // resolve
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  // module
  module: {
    rules: [
      // for js, jsx, ts, tsx
      {
        test: /[.](js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },

  // plugin
  plugins: [
    new HtmlPlugin({
      template: './ui/index.html',
    }),
  ],

  // dev server
  // devServer: serverConfig,
};

module.exports = config;
