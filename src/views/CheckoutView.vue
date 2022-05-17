<template>
  <v-container class="checkout">
    <v-layout class="order-wrapp">
      <v-flex xs12 >
        <h2>Cart</h2>
   

          <div
            v-for="order in orders"
            :key="order.id"
            class="order"
          >
     
              <v-checkbox 
                color="success"
                @change="markDone(order)"
                :input-value="order.done"
                >
              </v-checkbox>

          
           
          
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <div class="order-phone">{{ order.phone }}</div>
          
            <v-btn 
              class="primary"
              :to="'/product/' + order.productId"
              >Open</v-btn>
          </div>
       
   
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'CheckoutView',
    data() {
      return {
        orders: [
          {
            id: 1,
            name: 'Lenovo',
            phone: '020-21-0123',
            productId: 1,
            done: false
            }
        ]
      }
    },
    methods: {
      markDone(order) {
        order.done = true;
      }
    }
  };
</script>

<style scoped>
  .order {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, .2);
}

.order-phone {
  color: rgb(41, 40, 40);
  font-weight: 500;
  width: 200px;
  display: inline;
}
</style>