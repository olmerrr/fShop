<template>
  <div class="home">
    <v-container fluid class="container-item">
      <v-layout row>
        <v-flex xs12>
          <v-carousel v-model="model">
            <v-carousel-item v-for="product in products" :key="product.id">
              <v-sheet height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h4 carusel-title">{{ product.title }}</div>
                  <img :src="product.imageSrc" class="product-img"/>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout class="card-wrapp">
        <v-flex 
          xs12 
          v-for="product in products" 
          :key="product.id"
          >
          <router-link 
          :aria-label="product.title"
          :to="'/product/' + product.id">
            <v-card class="card">
              <img
                :src="product.imageSrc"
                aspect-ratio="2"
                class="card-img"
              />
              <v-card-title primary-title>
                  <h3 class="headline card-title">{{product.title}}</h3>
                  <div class="card-description">{{ product.description.substring(0, 200) }}...</div>
                  <div class="card-price">{{ product.price }} $</div>
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
                
                <v-btn  
                  dark 
                  color="light-blue darken-4" 
                  rounded 
                  >Add to Cart</v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data: () => ({
      model: 0,
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
    }),
  };
</script>
<style lang="scss" scoped>
  .container-item {
    margin-bottom: 20px;
    font-weight: 700;
  }

  .carusel-title {
    color: #333;
  }

  .product-img {
    display: block;
    width: 320px;
  }
  
  .card-wrapp {
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
      background: #012732;
      color: #fff;
      cursor: pointer;
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
      height: 320px;
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
