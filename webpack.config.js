const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const is_prod = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx' ),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          'css-hot-loader',
          (is_prod ? MiniCssExtractPlugin.loader : { loader: 'style-loader' }),
          {
              loader: 'css-loader',
              options: { sourceMap: true },
          }, {
              loader: 'postcss-loader',
              options: {
                  ident: 'postcss',
                  plugins: loader => [
                      require('postcss-import')({ root: loader.resourcePath }),
                      require('postcss-preset-env')(),
                      require('postcss-inline-svg'),
                      require('postcss-svgo'),
                  ],
              },
          }, {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, './src'),
                  ],
                },
              },
          }],
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: path.resolve(__dirname, 'src/index.html'),
    })
  ]
};