<template>
  <v-container class="error-page">
    <v-layout row>
      <v-flex xs12>
        <h1 class="error-page__title">404</h1>
        <div class="error-page__description">Page not found</div>
        <div class="error-page__link">
          <router-link to="/">Return to Main page</router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'ErrorView',
  };
</script>

<style lang="scss" scoped>
  .error-page {
    &__title {
      font-weight: 900;
      font-size: 260px;
      color: rgb(244, 52, 18);
    }

    @media (max-width: 960px) {
      &__title {
        font-weight: 700;
        font-size: 130px;
      }
    }

    &__description {
      font-size: 60px;
      font-weight: 500;
      color: #fff;
      background-color: rgb(244, 52, 18);
      border-radius: 2px;
    }

    &__description {
      font-size: 36px;
      font-weight: 400;
    }

    &__link a {
      display: block;
      margin-top: 16px;
      font-size: 22px;
      color: #333;
      font-weight: 700;
      text-decoration: none;
    }
  }
</style>
