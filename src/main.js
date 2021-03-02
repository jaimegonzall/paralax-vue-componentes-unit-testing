import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app', //es dónde se va a reflejar nuestro componente VUE (se meterá lo que esté en App.vue)
  render: h => h(App)
})
