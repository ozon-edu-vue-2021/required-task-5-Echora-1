<template>
  <div class="wrap">
    <div class="list">
      <div v-for="item in getProductList" :key="item.uid">
        <div class="card">
          <img :src="item.img" width="200" height="200" :alt="item.description">
          <p class="price">{{ item.price }} ₽</p>
          <p class="name">{{ item.dish }}</p>
          <button @click="putCart(item)">В корзину</button>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <button class="cart" @click="$router.push({ path: '/cart' })">Корзина</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import axios from "axios";

export  default  {
  data() {
    return {
      images:
        [
          '/img/6123150777.webp', '/img/6126039472.webp', '/img/6126040354.webp',
          '/img/6128597660.webp', '/img/6134992334.webp', '/img/6136170572.webp',
          '/img/6136172483.webp', '/img/6140906765.webp', '/img/6142673815.webp',
          '/img/6142681673.webp', '/img/6142683276.webp', '/img/6148226736.webp',
        ],
      prices: [ '223', '236', '434', '734', '334', '124', '834', '974', '211', '234', '234', '534' ]
    }
  },

  computed: {
    ...mapGetters(["getProductList", "getCart"]),
  },

  methods: {
    ...mapActions(["loadProductList", "putCart"]),

    getRandomElement(arr) {
      return arr[Math.floor((Math.random()*arr.length))];
    },

    formatList(list) {
      return list.map(item => {
        return {
          ...item,
          img: this.getRandomElement(this.images),
          price: this.getRandomElement(this.prices)
        }
      })
    }
  },

  created() {
    axios.get('https://random-data-api.com/api/food/random_food?size=30').then(response => {
      this.loadProductList(this.formatList(response.data))
    })
    .catch(e => {
      console.log(e)
    })
  },
}
</script>

<style scoped>


.wrap {
  display: flex;
  align-items: flex-start;
  background-color: #F2F3F8;
}

.list {
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid black;
  justify-content: center;
}

.sidebar {
  min-width: 240px;
  position: relative;
}

.list > div {
  flex: 0 0 25%;
  padding: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(47 60 74 / 1%) 0px 8px 32px, rgb(47 60 74 / 2%) 0px 8px 16px;
}

.price {
  font-weight: bold;
}

.name {
  min-height: 36px;
}

.card button {
  border: none;
  background-color: #E53659;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.card button:hover {
  background-color: #be2e4a;
}

.cart {
  min-width: 200px;
  margin: 40px 20px;
  padding: 5px 10px;
  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: royalblue;
  font-size: 16px;
  position: fixed;
}

.cart:hover {
  background-color: #284497;
}

</style>