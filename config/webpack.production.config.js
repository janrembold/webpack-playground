import Config from 'webpack-config';
import PrerenderSpaPlugin from 'prerender-spa-plugin';
import path from 'path';


export default new Config().extend('config/webpack.base.config.js').merge({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new PrerenderSpaPlugin(
            path.join(__dirname, '../dist'),
            [ '/', '/app' ]
        )
    ]
});