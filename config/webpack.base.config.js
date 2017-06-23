import webpack from 'webpack';
import path from 'path';
import Config from 'webpack-config';

export default new Config().merge({
    // entry: glob.sync("./src/**/index.js"),
    entry: function() {
        return {
            "common": [
                "./src/main.js"
            ],
            "vendor": [
                "jquery",
                "vue"
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
        path: path.join(__dirname, "../dist"),
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
						// presets: [['es2015', {modules: false}]],
                        // presets: ['env'],
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
        new webpack.optimize.CommonsChunkPlugin({
            names: [
                "common",
                "vendor"
            ],
            minChunks: 2
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
});
