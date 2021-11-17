import Vue from 'vue';
import Router from 'vue-router';

import Catalog from '../views/catalog.vue';
import Cart from '../views/cart.vue';

Vue.use(Router);

const routes = [
        {
            path: "/",
            component: Catalog,
        },
        {
            path: "/cart",
            component: Cart,
        },
    ]


export default new Router({
    mode: 'history',
    routes // short for `routes: routes`
})
