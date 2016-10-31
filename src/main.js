import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import Botao from './components/Botao.vue'

new Vue({
  el: '#app',
  render: (h) => {
    return h(App) 
  } 
})

new Vue({
  el: '#app2',
  render: (h) => {
    return h(App2) 
  } 
})