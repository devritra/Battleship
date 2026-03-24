// eslint-disable-next-line no-undef
const { merge } = require('webpack-merge');
// eslint-disable-next-line no-undef
const common = require('./webpack.common');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});
