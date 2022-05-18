<template>
  <v-container class="product">
    <section class="product mt-3 elevation-4">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img class="product__img" :src="product.imageSrc" />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h5 class="product__title display-1 mb-3 mt-3">
              {{ product.title }}
            </h5>
            <p class="product__category title">
              <span class="product__title"> Vendor: </span
              >{{
                product.vendor.charAt(0).toUpperCase() +
                product.vendor.substr(1)
              }}
            </p>
            <p class="product__title title">Price: {{ product.price }} $</p>
            <p class="product__color">
              <span class="product__title">Color:</span>
              <span
                :title="product.color"
                :style="{ backgroundColor: product.color }"
                class="product__color-bg"
              ></span>
            </p>

            <p class="product__material">
              <span class="product__title">Material: </span>
              {{
                product.material.charAt(0).toUpperCase() +
                product.material.substr(1)
              }}
            </p>

            <div class="title mb-5">
              <p class="product__title mb-2">Description:</p>
              <div class="product__description">
                {{ product.description }}
              </div>
            </div>

            <v-btn color="warning" class="mr-4">Edit</v-btn>
            <v-btn color="primary">Buy</v-btn>
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
    padding: 20px 0;

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
  }
</style>
