<template>
  <div id="app">
    <v-app>
      <NavBar/>
        <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
  
  export default {
    components: {
      NavBar
    },
    data () {
      return {
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .page-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
</style>
