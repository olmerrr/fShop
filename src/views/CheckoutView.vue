<template>
  <v-container class="checkout">
    <v-layout class="product-wrapp">
      <v-flex xs12>
        <h2>Cart</h2>
        <section 
          class="cart"
          v-if="cart.length">
          <div v-for="(product, index) in cart" :key="index" class="product">
            <v-checkbox
              color="success"
              @change="markDone(product)"
              :input-value="product.done"
            >
            </v-checkbox>
            <v-list-item-title>{{ product.name }}</v-list-item-title>
            <div class="product-price">{{ product.price }} $</div>

            <v-btn 
              class="error mr-3"
              @click="removeItem(product.id)"
              >Remove
            </v-btn
            >
            <v-btn class="primary" :to="'/product/' + product.id"
              >Open
            </v-btn
            >

          </div>
          <div class="total-price warning">{{totalPrice}} $</div>
        </section>
        <section 
        v-else
        class="empty-cart">
          <img
            class="empty-cart__img"
            src="@/assets/cart/empty_cart-512.webp"
          />
          <p class="empty-cart">
            Sorry, but in your cart empty
            <v-icon>mdi-emoticon-sad-outline</v-icon>
          </p>
        </section>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'CheckoutView',
    computed: {
      cart() {
        return this.$store.getters.getCart;
      },
      totalPrice() {
        return this.$store.getters.getTotalPrice;
      }
    },
    methods: {
      markDone(product) {
        product.done = true;
      },
      removeItem(id) {
         this.$store.commit('removeFromCart', id);
      },
      
    },
  };
</script>

<style lang="scss" scoped>
  .product {
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, 0.2);
  }

  .product-price {
    color: rgb(41, 40, 40);
    font-weight: 500;
    width: 200px;
    display: inline;
  }
  .total-price {
    margin-top: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    border-radius: 2px;
  }
  .empty-cart {
    &__img {
      max-width: 400px;
    }

    @media (max-width: 460px) {
     &__img {
      max-width: 200px;
    }
  }
}
</style>
