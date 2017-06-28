var webpack = require('webpack');
var path = require('path');
var PrerenderSpaPlugin = require('prerender-spa-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        // 'babel-polyfill',
        './src/static/router.js'
    ],

    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/dist/',
        filename: 'static.bundle.js',
        pathinfo: true
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.min.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: './index.html'
        }]),
        new PrerenderSpaPlugin(
            path.resolve(__dirname, "../dist"),
            [
                '/master/h1',
                '/master/leadtext'
            ]
        )
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new bundleAnalyzer.BundleAnalyzerPlugin()
    ]
};
