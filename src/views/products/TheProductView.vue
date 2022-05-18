<template>
  <v-container class="product">
    <section class="product mt-3 elevation-4">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img
            class="product__img"
            src="https://content.rozetka.com.ua/goods/images/big_tile/163386254.jpg"
          />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h5 class="product__title display-1 mb-3 mt-3">
                Title
            </h5>
            <p class="product__category title">
              <span class="product__title">
                Vendor: 
              </span>Lorem
            </p>
            <p class="product__price title">Price: 1000 $</p>
            <p class="product__color">
              <span class="product__title">Color:</span>
              <span 
                :title="'purple'"
                :style="{backgroundColor: 'purple'}"
                class="product__color-bg"
              ></span>
            </p>

            <p class="product__material">
              <span class="prodict__title">Material: </span>Metal
            </p>

            <div class="title mb-5">
              <p class="product__title mb-2">Description:</p>
              Lorem ipsum dolor sit.
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
      height: 100%;
      width: 550px;
    }

    &__info {
      margin-left: 50px;
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
    }

    &__price {
      color: tomato;
      font-weight: 500;
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
  }
</style>
