import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('./components/Home.vue'/* webpackChunkName: "js/chunk-root-admin" */),
    },
]

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: 'history',
});

export default router;