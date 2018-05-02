import baseComponent from '../base-component.js';
import data from '../../data/data.js';

export default {
    name: 'app',

    extends: baseComponent,

    props: ['filter'],

    created: function() {
         data.map(item =>
            item.id = Math.floor((Math.random() * new Date().getTime())).toString(16)
         );
    },

    computed: {
        users: function() {
            return data.filter(item =>
                item.full_name.toLowerCase().indexOf(this.$props.filter.toLowerCase()) === 0
            );
        }
    }
};