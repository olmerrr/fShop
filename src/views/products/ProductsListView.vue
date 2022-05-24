<template>
  <v-container class="products">
    <v-layout row>
      <v-flex xs12>
        <h2 class="page-title">My Products</h2>

        <v-card
          class="elevation-6 mb-3 pt-3 pb-3"
          v-for="(product, i) in myProducts"
          :key="i"
        >
          <v-layout>
            <v-flex xs4>
              <img class="card-img" :src="product.imageSrc" />
            </v-flex>
           
            <v-flex xs8>
              <v-card-text>
                <h2>{{ product.title }}</h2>
                <div class="mt-4">{{ product.description }}</div>
                   <v-card-actions>
                     <v-spacer></v-spacer>
                    <v-btn 
                      class="mt-4 info " 
                      width='100'
                      :to="'/product/' + product.id"
                      >Open</v-btn>
                  </v-card-actions>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'ProductsListView',
    computed: {
      myProducts() {
        return this.$store.getters.getMyProducts;
      }
      
    }
  };
</script>
<style lang="scss" scoped>
  .card-img {
    height: 200px;
    width: 250px;
  }
</style>
