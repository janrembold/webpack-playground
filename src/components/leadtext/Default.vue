<template>
    <div class="component leadtext">
        <div class="leadtext" v-html="leadtext"></div>
    </div>
</template>

<script>
    export default {
        name: 'leadtext',
        data () {
            return {
                leadtext: 'Leadtext with copy text <b>BOLD</b>, <i>italic</i> and a <a href="/">Link</a>'
            }
        }
    }
</script>

<style>
    .h1__title {
        color: lime;
    }

    .h1_underline {
        color: grey;
    }
</style>