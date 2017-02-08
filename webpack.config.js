var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./config/webpack.common.js');
var helpers = require('./config/helpers');

const ENV = process.env.ENV || process.env.NODE_ENV || 'production';

var config = {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        //chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};

if(ENV == 'production'){
    config = {
        devtool: 'source-map',

        output: {
            path: helpers.root('dist'),
            publicPath: '/dist/',
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js'
        },

        htmlLoader: {
            minimize: false // workaround for ng2
        },

        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
            }),
            new ExtractTextPlugin('[name].[hash].css'),
            new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
            })
        ]
    };
}

module.exports = webpackMerge(commonConfig, config);