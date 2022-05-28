<template>
  <v-container class="product">
    <section class="product mt-3 elevation-4">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img class="product__img" :src="product.image" />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h5 class="product__title display-1 mb-3 mt-3">
              {{ product.name }}
            </h5>
            <p class="product__category title">
              <span class="product__title"> Release Date: </span>
              {{ product.releaseDate }}
            </p>
            <p class="product__title title">Price: {{ product.price }} $</p>

            <div class="title mb-5">
              <p class="product__title mb-2">Description:</p>
              <div class="product__description">
                {{ product.description }}
              </div>
            </div>
            <div class="product__actions">
              <v-btn
                color="primary"
                @click="addToCart(product)"
              >Buy</v-btn>
            </div>
          
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
  export default {
    name: 'TheProductView',
    props: {
      id: {
        type: String,
        default: '1',
      },
    },
    computed: {
      product() {
        const id = this.id;
          return this.$store.getters.getProductById(id);
      },
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px;
    margin-bottom: 50px;
    width: 100%;
    padding: 60px 0 20px;

    &__img {
      height: auto;
      max-width: 550px;
      width: 100%;
    }

    @media (max-width: 1200px) {
      &__img {
        max-width: 360px;
      }
    }

    &__info {
      margin-left: 30px;
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
      margin-right: 8px;
    }

    &__color {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__color-bg {
      display: inline-block;
      width: 50px;
      height: 20px;
      border: 1px solid #2b2b2b;
      border-radius: 10px;
    }

    &__description {
      max-width: 560px;
    }

    @media (max-width: 1200px) {
      &__description {
        max-width: 97%;
      }
    }

    &__actions{
      padding: 16px;
    }
  }
</style>
