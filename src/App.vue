<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #F2F3F8;
  padding: 10px 0;
  box-sizing: border-box;
  height: 100%;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
