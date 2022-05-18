<template>
  <v-container class="products">
    <v-layout row>
      <v-flex xs12>
        <h2 class="page-title">My Products</h2>

        <v-card
          class="elevation-6 mb-3 pt-3 pb-3"
          v-for="product in products"
          :key="product.id"
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
    data() {
      return {
        products: [
          {
            id: '1',
            title: 'Acer Aspire 7',
            vendor: 'Acer',
            color: 'black',
            material: 'metal/plastic',
            description:
              'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черный',
            price: 784,
            promo: false,
            imageSrc:
              'https://content.rozetka.com.ua/goods/images/big_tile/163386254.jpg',
          },
          {
            id: '2',
            title: 'Lenovo IdeaPad Gaming 3',
            vendor: 'Lenovo',
            color: 'blue',
            material: 'plastic',
            description:
              'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-10300H (2.5 - 4.5 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.2 кг / blue',
            price: 884,
            promo: true,
            imageSrc:
              'https://content1.rozetka.com.ua/goods/images/big_tile/251607378.jpg',
          },
          {
            id: '3',
            title: 'ASUS TUF Gaming F15',
            vendor: 'ASUS',
            color: 'black',
            material: 'metal/plastic',
            description:
              'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i5-10300H (2.5 - 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / черный',
            price: 930,
            promo: true,
            imageSrc:
              'https://content1.rozetka.com.ua/goods/images/big/253177931.jpg',
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
  .card-img {
    height: 200px;
    width: 250px;
  }
</style>
