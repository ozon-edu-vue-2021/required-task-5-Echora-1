import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import getRandomElement from  '../helpers/randomElement';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        productList: [],
        cart: [],
        images:
            [
                '/img/6123150777.webp', '/img/6126039472.webp', '/img/6126040354.webp',
                '/img/6128597660.webp', '/img/6134992334.webp', '/img/6136170572.webp',
                '/img/6136172483.webp', '/img/6140906765.webp', '/img/6142673815.webp',
                '/img/6142681673.webp', '/img/6142683276.webp', '/img/6148226736.webp',
            ],
        prices: [ '223', '236', '434', '734', '334', '124', '834', '974', '211', '234', '234', '534' ]
    }),

    getters: {
        getProductList: state => state.productList,
        getCart: state => state.cart,
        getTotalCost: state => {
            let total = 0
            state.cart.forEach(item => total += parseInt(item.price) * parseInt(item.count))
            return total
        }
    }
    ,

    mutations: {
        setProductList: (state, payload) => {
            state.productList = payload.map(item => {
                return {
                    ...item,
                    img: getRandomElement(state.images),
                    price: getRandomElement(state.prices)
                }
            });
        },

        addToCart: (state, payload) => {
            state.cart.push(payload)
        },

        removeFromCart: (state, payload) => {
            state.cart = state.cart.filter(item => item.uid !== payload)
        },
    },

    actions: {
        loadProductList(context) {
            axios.get('https://random-data-api.com/api/food/random_food?size=30').then(response => {
                context.commit("setProductList", response.data)
            })
            .catch(e => {
                console.log(e)
            })
        },

        putCart(context, item) {
            let duplicate = context.getters.getCart.find(i => i.uid === item.uid)
            if(duplicate) {
                duplicate.count += 1
            } else {
                context.commit("addToCart", {
                    ...item,
                    count: 1
                });
            }
        },

        deleteFromCart(context, uid) {
            let item = context.getters.getCart.find(i => i.uid === uid)
            if(item.count > 1) {
                item.count -= 1
            } else {
                context.commit("removeFromCart", uid);
            }
        }

    },
});