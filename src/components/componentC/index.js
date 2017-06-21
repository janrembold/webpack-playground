// import $ from "jquery";
import Helper from "../../lib/helper";

export default class ComponentC {
    constructor({ el }) {
        // this.$el = $(el);
        console.log('ComponentB constructor');
        // console.log(this.$el);

        Helper.doSomething('helper - do it');
    }
}