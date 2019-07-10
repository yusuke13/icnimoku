const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const WriteFilePlugin = require('write-file-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// production
const MODE = 'development';
// const MODE = 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: MODE,
  entry: {
    productPage: path.resolve(__dirname, 'src/js/pages/productPage.js')
  },
  output: {
    path: path.resolve(__dirname, 'resources/themes/plus13'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /(node_modules | bower_components)/
        // exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                // AutoPrefixer({
                //   grid: true,
                //   "browsers": [
                //     "> 1%"
                //   ]
                // })
                AutoPrefixer(
                  {
                    // browsers: ['last 2 versions'],
                    grid: true
                  }
                )
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [/* {
          loader : 'url-loader?&name=/img/[name].[ext]'
        }/*, */{
            loader: 'file-loader?name=../img/[name].[ext]'
          }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader?name=../fonts/[name].[ext]'
        }
      },
      {
        test: /\.xml$/,
        use: {
          loader: 'xml-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: ['node_modules', __dirname, path.join(__dirname, 'js/helpers')]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/json', to: 'json'
      },
      {
        from: 'src/img', to: 'img'
      },
      {
        from: 'src/html', to: ''
      }
    ])
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new TerserPlugin({})
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '/resources/themes/plus13'),
    // contentBase: 'resources/themes/plus13',
    // inline: true,
    watchContentBase: true,
    port: 8080
  }
};
