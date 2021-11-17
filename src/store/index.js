import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        productList: [],
        cart: [],
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
            state.productList = payload;
        },

        addToCart: (state, payload) => {
            state.cart.push(payload)
        },

        removeFromCart: (state, payload) => {
            state.cart = state.cart.filter(item => item.uid !== payload)
        },
    },

    actions: {
        loadProductList(context, list) {
            context.commit("setProductList", list);
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