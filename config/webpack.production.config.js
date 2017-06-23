import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    }
});