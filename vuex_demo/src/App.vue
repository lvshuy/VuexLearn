<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <counter></counter>
    <carts></carts>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Counter from "./components/Counter.vue"
import Carts from "./components/Carts.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    Carts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
