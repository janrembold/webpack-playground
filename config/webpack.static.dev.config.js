var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/static/router.js',

    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/dist/',
        filename: 'static.bundle.js',
        pathinfo: true
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    watch: true,

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
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new bundleAnalyzer.BundleAnalyzerPlugin()
    ],

    devServer: {}
};
