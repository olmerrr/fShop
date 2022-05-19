import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from "vuetify";
import {initializeApp} from "firebase/app"; 

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
  created() {
    const config = {
      apiKey: 'AIzaSyDeDaoZE5RMTsJ7fR6i8hNnnm1fcxMPC6U',
      authDomain: 'fshop-cfb28.firebaseapp.com',
      projectId: 'fshop-cfb28',
      storageBucket: 'fshop-cfb28.appspot.com',
      messagingSenderId: '1077942197911',
      appId: '1:1077942197911:web:1211266df85e54332093d2'
    }
    initializeApp(config);
  }
}).$mount('#app')
