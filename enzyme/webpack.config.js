const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const VERSION = pkg.version;
const NAME = pkg.name;
const environment = process.env.NODE_ENV || 'development';

const getDevTools = () => (
  environment === 'development'
    ? 'cheap-module-eval-source-map'
    : 'source-map'
);

const getPlugins = () => {
  const plugins = [
    new CleanPlugin([ './dist' ], {
      root: path.resolve('./'),
      verbose: true,
    }),
    new HtmlPlugin({
      title: NAME,
      template: path.resolve('./index.html'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: process.env.NODE_ENV === 'production',
      defaultSizes: 'gzip',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new ExtractTextPlugin({
      filename: `${NAME}-${VERSION}.css`,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        formTemplateMicroServiceUrl: JSON.stringify(process.env.TEMPLATE_ENGINE_MICRO_SERVICE_URL),
      },
    }),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      new CompressionPlugin(),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: { compress: { inline: false } },
      }),
    );
  }

  return plugins;
};

module.exports = {
  profile: true,
  entry: [ 'babel-polyfill', './src/index.js', './style/import.scss' ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: `${NAME}-${VERSION}.js`,
  },
  devtool: getDevTools(),
  module: {
    rules: [ {
      test: /\.(js|jsx)$/i,
      exclude: /node_modules/,
      use: [ {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      } ],
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [ 'css-loader', 'sass-loader' ],
      }),
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    },
    ],
  },
  plugins: getPlugins(),
};
