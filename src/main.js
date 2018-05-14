import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Article from './Article.vue'
import Liste from './Liste.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#dateDiv',
  render: h=>h(Home)
})

new Vue({
  el: '#panier',
  render : h => h(Article)
})

new Vue({
  el: '#list',
  render: h=> h(Liste)
})
