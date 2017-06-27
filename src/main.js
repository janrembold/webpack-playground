import Vue from 'vue';
import VueRouter from 'vue-router'
// import $ from 'jquery';
import App from './../src/components/vueTest/App.vue';
import App2 from './../src/components/vueTest/App2.vue';
import Indexr from './../src/components/Index.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/products/:id', component: ProductDetails },
        { path: '/', component: App, name: 'root', description: 'Root Desc' },
        { path: '/app2', component: App2, name: 'App2', description: 'App2 Desc' },
    ]
})

new Vue({
    router,
    render: h => h(Indexr)
}).$mount('#indexr');


import(/* webpackMode: "lazy", webpackChunkName: "vueTest" */ './../src/components/vueTest/App.vue')
    .then((App) => {
        console.log('vue promise then');
        console.log(App);

        new Vue({
            render: h => h(App)
        }).$mount('#app');
    });

// import(/* webpackMode: "lazy", webpackChunkName: "componentA" */ './../src/components/componentA')
//     .then((file) => {
//         console.log('componentA/index.js promise then');
//         console.log(file);
//
//         new file.default($('h1'));
//     });


// import App from '../components/vueTest/App.vue'

// vueLazy(function(App) {
//     console.log('vueLazy loaded');
//

// });

// componentA(function(file) {
//     console.log('lazy loaded componentA.js');
//     // console.log(file);
//
//     let test = new file.default($('h1'));
// });

// componentA(function() {
//     console.log('lazy loaded componentA.js AGAIN');
// });
//
// componentB(function(file) {
//     console.log('lazy loaded componentB.js');
//     // console.log(file);
//
//     let test = new file.default($('h1'));
// });
//

// new componentX();
