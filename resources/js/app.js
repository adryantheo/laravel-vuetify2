window.Vue = require('vue');

import Vuetify from 'vuetify';
import router from './router';
import axios from 'axios';
import AppRoot from './components/AppRoot.vue'

window.EventBus  = new Vue();
window.axios  = axios.create();

Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#1d2671',
                    secondary: '#E1341E'
                }
            }
        },
        icons: {
            iconfont: 'mdi'
        }
    }),
    router,
    components: {
        AppRoot
    }
});
