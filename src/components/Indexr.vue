<template>
    <div class="indexr">
        <h1>Frontend Framework 5.0.0</h1>
        <ul>
            <li v-for="layout in routes" v-if="layout.path && layout.path !== '/'">
                <h2>{{ layout.name }}</h2>
                <ul>
                    <li v-for="route in layout.children">
                        <router-link :to="layout.path + '/' + route.path">Link to {{ layout.path }}/{{ route.path }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>


<script>
    export default {
        name: 'indexr',
        data () {
            return {
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
        },
        methods: {
            getContent () {}
        }
    }
</script>