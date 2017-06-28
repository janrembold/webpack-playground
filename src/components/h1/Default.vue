<template>
    <div class="component h1">
        <h1 class="h1__title">{{ title }}</h1>
        <p class="h1_underline">{{ underline }}</p>
    </div>
</template>

<script>
    export default {
        name: 'h1',
        data () {
            return {
                title: 'H1 Headline Title',
                underline: 'H1 Underline'
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