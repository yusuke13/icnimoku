const merge = require('webpack-merge');
const common = require('./webpack.config.babel.js');

module.exports = merge(common, {
  mode: 'production'
});
