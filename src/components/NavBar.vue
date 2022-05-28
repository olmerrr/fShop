<template>
  <section>
    <v-navigation-drawer app temporary v-model="isSideNav">
      <v-list class="nav-drawer">
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.url">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item v-text="link.title"></v-list-item>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  
          v-if="isUserLoggedIn"
          @click="onLogout"
          >
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item v-text="'Logout'"></v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="isSideNav = !isSideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="logo">
        <router-link to="/"> fShop </router-link>
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

      <v-btn
        v-if="isUserLoggedIn"
        text
        class="hidden-sm-and-down"
        @click="onLogout"
      >
        <v-icon left>mdi-exit-to-app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isSideNav: false,
      };
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logoutUser')
        if (this.$router.currentRoute.fullPath == '/') {
          this.$router.push('/login')
        } else this.$router.push('/')
      },
    },
    computed: {
      isUserLoggedIn() {
        return this.$store.getters.getIsUserLoggedIn;
      },
      links() {
        if (this.isUserLoggedIn) {
          return [
            { title: 'New Product', icon: 'mdi-file', url: '/new' },
          ];
        } else {
          return [
            { title: `Cart ${this.$store.getters.getCartCount}`, icon: 'mdi-shopping', url: '/checkout'},
            {
              title: 'Wish List',
              icon: 'mdi-cards-heart',
              url: '/wishlist',
            },
               { title: 'Login', icon: 'mdi-account', url: '/login' },
            {
              title: 'Registration',
              icon: 'mdi-license',
              url: '/registration',
            },
          ];
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .v-list-item {
    min-height: 10px !important;
  }
  .logo {
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>
>
