import Vue from 'vue';
import VueRouter from 'vue-router'

import IndexrLayout from './../layouts/indexr.vue';
import MasterLayout from './../layouts/master.vue';
import Indexr from './../components/Indexr.vue';

import H1 from './../components/h1/Default.vue';
import Leadtext from './../components/leadtext/Default.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/', component: IndexrLayout,
            children: [
                {
                    path: '',
                    component: Indexr
                }
            ]
        },
        {
            path: '/master', component: MasterLayout, name: 'Default Layout',
            children: [
                { path: 'h1', component: H1 },
                { path: 'leadtext', component: Leadtext }
            ]
        }
    ]
});

Vue.use(VueRouter);
const root = new Vue({
    router
});

document.addEventListener('DOMContentLoaded', () => {
    root.$mount('#app');
});
