<template>
  <div id="app">
    <v-app>
      <NavBar />
      <router-view></router-view>
      
      <template v-if="error">
        <TheError :error="error"/>
      </template>
    </v-app>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import TheError from '@/components/TheError.vue';

  export default {
    components: {
      NavBar,
      TheError
    },
    computed: {
      error() {
        return this.$store.getters.getError;
      },
    },
  };
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
    margin: 60px 0 20px;
  }
</style>
