import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import VuexModule from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store(VuexModule)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
