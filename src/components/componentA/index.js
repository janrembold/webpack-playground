// import $ from "jquery";
import Helper from "../../lib/helper";

export default class ComponentA {
    constructor({ el }) {
        // this.$el = $(el);
        console.log('ComponentA constructor');
        // console.log(this.$el);

        Helper.doSomethingElse('helper - do it');
    }
}