<template>
  <div id="app">
      <img src="./assets/logo.png">
      <h1>{{ msg + counter }}!</h1>
  </div>
</template>

<script>

import Botao from './components/Botao.vue'

export default {
  name: 'App1',
  mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
  },
  data () {
    return {
      msg: 'Hello Vue ',
      counter: 1
    }
  }
}
</script>

<style>
  #app123 {
    font-family: Helvetica, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
