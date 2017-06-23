// let componentA = require("bundle-loader?lazy&name=componentA!../components/componentA/index.js");
// let componentB = require("bundle-loader?lazy&name=componentB!../components/componentB/index.js");
// let vueLazy = require("bundle-loader?lazy&name=vueTest!../components/vueTest/App.vue");

import componentX from '../components/componentX/index';
import $ from 'jquery';
import Vue from 'vue'

import(/* webpackMode: "lazy", webpackChunkName: "vueTest" */ '../components/vueTest/App.vue')
	.then((App) => {
		console.log('vue promise then');
		console.log(App);

		new Vue({
			el: '#app',
			render: h => h(App)
		});
	});

import(/* webpackMode: "lazy", webpackChunkName: "componentA" */ '../components/componentA/index.js')
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
let commonTest = new componentX();
