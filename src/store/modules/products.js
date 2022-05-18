export default {
  state: {
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
        title: 'Lenovo IdeaPad Gaming 3 M1',
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
      {
        id: '4',
        title: 'ASUS VivoBook 15',
        vendor: 'ASUS',
        color: 'gold/silver',
        material: 'metal/plastic',
        description:
          'Экран 14" OLED (1920x1080) Full HD, глянцевый / Intel Core i3-1125G4 (2.0 - 3.7 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.8 кг / золотой с серебристым',
        price: 730,
        promo: true,
        imageSrc:
          'https://content.rozetka.com.ua/goods/images/big/261905354.jpg',
      },
      {
        id: '5',
        title: 'Honor MagicBook X 14',
        vendor: 'Honor',
        color: 'silver',
        material: 'metal',
        description:
          'Экран 14" IPS (1920х1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i3-10110U (2.1 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home 64bit / 1.38 кг / серый',
        price: 1100,
        promo: true,
        imageSrc:
          'https://content.rozetka.com.ua/goods/images/big/196863102.jpg',
      },
      {
        id: '6',
        title: 'HP 255 G8-21001',
        vendor: 'HP',
        color: 'black',
        material: 'plastic',
        description:
          'Экран 15.6” (1920x1080) Full HD, матовый / AMD Ryzen 7 5700U (1.8 — 4.3 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon Graphics / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.74 кг / черный',
        price: 700,
        promo: false,
        imageSrc:
          'https://content1.rozetka.com.ua/goods/images/big/247443927.jpg',
      },
      {
        id: '7',
        title: 'Lenovo IdeaPad 3',
        vendor: 'Lenovo',
        color: 'silver',
        material: 'plastic',
        description:
          'Экран 15.6" TN+film (1920x1080) Full HD, матовый / Intel Core i3-1005G1 (1.2 - 3.4 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce MX330, 2 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.85 кг / серый',
        price: 930,
        promo: false,
        imageSrc:
          'https://content2.rozetka.com.ua/goods/images/big/178046133.jpg',
      },
      {
        id: '8',
        title: 'Dell Vostro 15 ',
        vendor: 'Dell',
        color: 'black/silver',
        material: 'plastic',
        description:
          'Экран 15.6" WVA (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i3-1115G4 (3.9 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Ubuntu / 1.78 кг / черный - серый',
        price: 700,
        promo: false,
        imageSrc:
          'https://content1.rozetka.com.ua/goods/images/big/231873807.jpg',
      },
      {
        id: '9',
        title: 'MSI Modern 14',
        vendor: 'MSI',
        color: 'silver',
        material: 'metal',
        description:
          'Экран 14" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.3 кг / серый',
        price: 910,
        promo: false,
        imageSrc:
          'https://content2.rozetka.com.ua/goods/images/big/234489777.jpg',
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.products
    },
    getPromoProducts(state) {
      return state.products.filter(product => {
        return product.promo
      })
    },
    getMyProducts(state) {
      return state.products
    },
    getProductById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  },
}