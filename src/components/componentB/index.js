import $ from "jquery";

export default class ComponentB {
    constructor({ el }) {
        this.$el = $(el);
        console.log('ComponentB constructor');
        console.log(this.$el);
    }
}