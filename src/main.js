import Vue from 'vue';
// import App from './../src/components/vueTest/App.vue';
import router from './../src/router';
import store from './store';
import $ from 'jquery';
import componentX from './../src/components/componentX';
// import { sync } from 'vuex-router-sync'

// sync(store, router)

// document.addEventListener('DOMContentLoaded', function () {
//     root.$mount('#app');
// });


// let componentA = require("bundle-loader?lazy&name=componentA!../components/componentA/index.js");
// let componentB = require("bundle-loader?lazy&name=componentB!../components/componentB/index.js");
// let vueLazy = require("bundle-loader?lazy&name=vueTest!../components/vueTest/App.vue");


import(/* webpackMode: "lazy", webpackChunkName: "vueTest" */ './../src/components/vueTest/App.vue')
    .then((App) => {
        console.log('vue promise then');
        console.log(App);

        new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app');
        // new Vue({
        //     el: '#app',
        //     render: h => h(App)
        // });
    });

import(/* webpackMode: "lazy", webpackChunkName: "componentA" */ './../src/components/componentA')
    .then((file) => {
        console.log('componentA/index.js promise then');
        console.log(file);

        new file.default($('h1'));
    });


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

new componentX();
