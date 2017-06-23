import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './../src/components/vueTest/App.vue';
import App2 from './../src/components/vueTest/App2.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/app2', component: App2 },
        { path: '/', component: App },
    ]
});