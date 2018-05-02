import baseComponent from '../base-component.js';
import pageHeader from '../page-header/page-header.vue';
import userList from '../user-list/user-list.vue';

import '../../assets/logo.png';

export default {
    name: 'app',

    extends: baseComponent,

    components: {pageHeader, userList},

    data: function() {
        return {
            query: ''
        }
    },

    methods: {
        searchHandler: function(query) {
            this.query = query;
        }
    }
};