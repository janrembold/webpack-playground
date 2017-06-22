var glob = require("glob");
var path = require("path");
var webpack = require("webpack");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // entry: glob.sync("./src/**/index.js"),
    entry: function() {
        return {
            "common": [
                "./src/lib/load.js"
            ],
            "vendor": [
                "jquery"
            ],
            // "componentA": "./src/components/componentA/index.js",
            "componentB": "./src/components/componentB/index.js",
            "componentC": "./src/components/componentC/index.js",
            // "vueTest": "./src/components/vueTest/App.vue",
            "vueTest2": "./src/components/vueTest/App2.vue",
            "vueTest3": "./src/components/vueTest/App3.vue"
        };
    },

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: 'dist/',
        filename: '[name].bundle.js',
        chunkFilename : '[name].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
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

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            names: [
                "common",
                "vendor"
            ],
            minChunks: 2
        }),

        // new PrerenderSpaPlugin(
        //     path.join(__dirname, 'pre'),
        //     [ '/index.html' ]
        // )

        // new BundleAnalyzerPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        noInfo: true
        // contentBase: "/pages/",
        // publicPath: "/dist/"
    }
};