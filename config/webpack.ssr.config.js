import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
    entry: () => {
        return {
            "common": "./src/ssr/main.js"
        };
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    }
});