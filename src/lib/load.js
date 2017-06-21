let componentA = require("bundle-loader?lazy&name=componentA!../components/componentA/index.js");
// let componentB = require("bundle-loader?lazy&name=componentB!../components/componentB/index.js");
let vueLazy = require("bundle-loader?lazy&name=vueTest!../components/vueTest/App.vue");

import componentX from '../components/componentX/index';
import $ from 'jquery';

import Vue from 'vue'
// import App from '../components/vueTest/App.vue'

vueLazy(function(App) {
    console.log('vueLazy loaded');

    new Vue({
        el: '#app',
        render: h => h(App)
    });
});

componentA(function(file) {
    console.log('lazy loaded componentA.js');
    // console.log(file);

    let test = new file.default($('h1'));
});

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
let commonTest = new componentX();