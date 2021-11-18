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

export  default  {

  computed: {
    ...mapGetters(["getProductList", "getCart"]),
  },

  methods: {
    ...mapActions(["loadProductList", "putCart"]),
  },

  created() {
    this.loadProductList()
  },
}
</script>

<style scoped>


.wrap {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #F2F3F8;
}

.list {
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid black;
  justify-content: center;
  width: 900px;
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