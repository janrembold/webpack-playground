import Config from 'webpack-config';
import bundleAnalyzer from 'webpack-bundle-analyzer';

export default new Config().extend('config/webpack.base.config.js').merge({
    // devtool: '#source-map',

    output: {
        pathinfo: true
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new bundleAnalyzer.BundleAnalyzerPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
});