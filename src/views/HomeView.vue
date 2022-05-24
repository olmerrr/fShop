<template>
  <section>
    <div class="home" v-if="!loading">
      <v-container fluid class="container-item">
        <v-layout row>
          <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                v-for="product in promoProducts"
                :key="product.id"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="text-h4 carusel-title">{{ product.title }}</div>
                    <img :src="product.imageSrc" class="product-img" />
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <section class="card-wrapp">
          <v-flex xs12 v-for="(product, i) in products" :key="i">
            <router-link
              :aria-label="product.title"
              :to="'/product/' + product.id"
            >
              <v-card class="card">
                <img
                  :src="product.imageSrc"
                  aspect-ratio="2"
                  class="card-img"
                />
                <v-card-title primary-title>
                  <h3 class="headline card-title">{{ product.title }}</h3>
                  <div class="card-description">
                    {{ product.description.substring(0, 200) }}...
                  </div>
                  <div class="card-price warning">{{ product.price }} $</div>
                </v-card-title>

                <v-card-actions class="card-buy">
                  <v-btn
                    dark
                    color="light-blue darken-4"
                    rounded
                    outlined
                    :to="'/product/' + product.id"
                    >Description
                  </v-btn>

                  <v-btn dark color="light-blue darken-4" rounded
                    >Add to Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </router-link>
          </v-flex>
        </section>
      </v-container>
    </div>
    <div v-else>
      <v-container>
        
          <v-flex xs12 class="text-xs-center pt6">
                <v-progress-circular
                  indeterminate
                  color="purple"
                ></v-progress-circular>
          </v-flex>
  
      </v-container>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeView',
    computed: {
      products() {
        return this.$store.getters.getProducts;
      },
      promoProducts() {
        return this.$store.getters.getPromoProducts;
      },
      loading() {
        return this.$store.getters.getLoading;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .home__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 40px;
  }
  .container-item {
    margin-bottom: 20px;
    font-weight: 700;
  }

  .carusel-title {
    color: #333;
  }

  @media (max-width: 760px) {
    .carusel-title {
      margin: 40px 20px 0;
    }
  }

  .product-img {
    display: block;
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 960px) {
    .product-img {
      max-width: 260px;
    }
  }

  .card-wrapp {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 1260px) {
    .card-wrapp {
      flex-wrap: wrap;
    }
  }

  .card {
    margin-bottom: 20px;

    &-title {
      font-size: 22px;
      font-weight: 700;
      height: 68px;
      color: #333;
    }

    &-description {
      font-size: 16px;
    }

    &-price {
      margin-top: 16px;
      display: block;
      font-size: 20px;
      font-weight: 500;
      width: 100%;
      border-radius: 4px;
      color: #fff;
    }

    @media (max-width: 1260px) {
      &-price {
        max-width: 400px;
        margin-right: auto;
        margin-left: auto;
      }
    }

    &-img {
      max-width: 500px;
      width: 100%;
      height: 220px;
    }

    @media (max-width: 1260px) {
      &-img {
        max-width: 400px;
      }
    }

    &-buy {
      display: flex;
      justify-content: center;
    }
  }
</style>
