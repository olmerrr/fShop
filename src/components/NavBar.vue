<template>
  <section>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.url">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item v-text="link.title"></v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon 
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

      <v-toolbar-title class="logo">
        <router-link to="/">
          fShop
        </router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        class="hidden-sm-and-down"
        text
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        :value="link.title"
      >
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
    </v-app-bar>
    <v-main>
    
    
    </v-main>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        links: [
          { title: 'Login', icon: 'mdi-account', url: '/login' },
          { title: 'Registration', icon: 'mdi-license', url: '/registration' },
          { title: 'Cart', icon: 'mdi-shopping', url: '/checkout' },
          { title: 'New Product', icon: 'mdi-file', url: '/new' },
          { title: 'My Products', icon: 'mdi-filter-variant-plus', url: '/list' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .logo {
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

    a {
      text-decoration: none;    
      color: inherit;
    }
  }
</style>>


