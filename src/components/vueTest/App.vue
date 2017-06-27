<template>
	<div id="app">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	import $ from 'jquery';

	export default {
		name: 'app',
		data () {
			return {
				msg: 'Welcome to your very first Vue.js App'
			}
		},
		created () {
			console.log('Vue.js created');
			this.getContent();
		},
		methods: {
		    getContent () {
				console.log('getContent');
				$.ajax({
					url: 'http://localhost:3000/site/1',
					success: () => {
						console.log('ajax success');
						this.msg = 'Ajax lazy loaded - success';
					},
					error: () => {
						console.log('ajax error');
					}
				})
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
