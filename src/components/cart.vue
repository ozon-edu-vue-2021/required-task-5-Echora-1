<template>
  <div class="wrap">
    <div class="list">
      <div v-for="item in getCart" :key="item.uid">
        <div class="card">
          <img :src="item.img" width="100" height="100" :alt="item.description">
          <div class="info">
            <p class="price">{{ parseInt(item.price) * parseInt(item.count) }} ₽</p>
            <p class="name">{{ item.dish }}</p>
            <p>Кол.{{ item.count }}</p>
          </div>
          <button @click="() => deleteFromCart(item.uid)">Удалить</button>
        </div>
      </div>
      <div class="empty" v-if="!getCart.length">
        В корзине пусто
        <button class="catalog" @click="$router.push({ path: '/' })">Каталог</button>
      </div>
    </div>
    <div class="sidebar">
      <button class="checkout" @click="alertCart">Оформить</button>
      <p class="total"><span>Общая стоимость: {{ getTotalCost }} ₽</span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export  default  {
  computed: {
    ...mapGetters(["getCart", "getTotalCost"]),
  },

  methods: {
    ...mapActions(["putCart", "deleteFromCart"]),

    alertCart() {
      let alertText = this.getCart.map( item => ` ${item.dish} Кол.${item.count} Стоимость: ${parseInt(item.price) * parseInt(item.count)} ` )
      alert(alertText)
    }
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
  flex-direction: column;
  border-right: 1px solid black;
  justify-content: center;
}

.sidebar {
  min-width: 240px;
  position: relative;
}

.list > div {
  padding: 20px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(47 60 74 / 1%) 0px 8px 32px, rgb(47 60 74 / 2%) 0px 8px 16px;
}

.info {
  margin: 0 30px;
}

.price {
  font-weight: bold;
}

.name {
  min-height: 36px;
  width: 140px;
  margin-bottom: 0;
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

.checkout, .catalog {
  min-width: 200px;
  margin: 40px 20px;
  padding: 5px 10px;
  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: #10ad44;
  font-size: 16px;
  position: fixed;
}

.checkout:hover {
  background-color: #2D9D5C;
}

.total {
  margin: 20px;
  position: fixed;
  top: 100px;
}

.empty {
  width: 300px;
  margin: 30px;
  text-align: center;
}

.catalog {
  background-color: royalblue;
  position: relative;
}

.catalog:hover {
  background-color: #284497;
}

</style>