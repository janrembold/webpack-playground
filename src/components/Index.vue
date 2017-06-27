<template>
    <div class="indexr">
        <h1>{{msg}}</h1>

        <ul>
            <li v-for="route in routes">
                <h2>{{ route.name }}</h2>
                <p>{{ route.description }}</p>
                <router-link to="/">Link to {{ route.path }} - {{ route.name }}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    import App from './vueTest/App.vue';

    export default {
        name: 'indexr',
        data () {
            return {
                msg: 'Indexr msg',
                routes: []
            }
        },
        created () {
            console.log('Indexr created');
//            console.log(this.$router);
            this.routes = this.$router.options.routes;

//            this.$router.options.routes.forEach(route => {
//                this.items.push({
//                    name: route.name
//                    , path: route.path
//                })
//            });
//
//            console.log(this.items);
        },
        methods: {
            getContent () {}
        }
    }
</script>