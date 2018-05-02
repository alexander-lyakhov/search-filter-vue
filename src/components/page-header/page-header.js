import baseComponent from '../base-component.js';

export default {
    name: 'page-header',

    extends: baseComponent,

    methods: {
        search: function(e) {
            this.$emit('search', e.target.value);
        }
    },

    directives: {
    	focus: {inserted: el => el.focus()}
    }
};