import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
// import Server from './server.vue'
//
//
// Vue.component('app-server',Home);
// Vue.component('server-down-now',Server);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})


