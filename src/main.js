import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from "vuetify";
import {initializeApp} from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      apiKey: "AIzaSyCfv5lacb95RCQ4tPlVObCj25M0XywMxvE",
      authDomain: "fshop-dc2e4.firebaseapp.com",
      projectId: "fshop-dc2e4",
      storageBucket: "fshop-dc2e4.appspot.com",
      messagingSenderId: "1023451372887",
      appId: "1:1023451372887:web:b4eaa3fad970a784d7b212"
    }
    initializeApp(config)
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    })

    this.$store.dispatch('fetchProducts')
  }
}).$mount('#app')
