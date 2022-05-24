import { getDatabase, ref, set, child, get } from "firebase/database";

class Product {
  constructor(
    title, 
    vendor, 
    color, 
    material, 
    price, 
    description, 
    ownerId =  Date.now(), 
    imgSrc = '', 
    promo = false,
    id = null
    ) {
      this.title = title,
      this.vendor = vendor,
      this.color = color,
      this.material = material,
      this.price = price,
      this.description = description,
      this.ownerId = ownerId,
      this.imgSrc = imgSrc,
      this.promo = promo,
      this.id = id
    }
}
export default {
  state: {
    products: [],
  },
  mutations: {
    createProduct(state, payload) {
      state.products.push(payload)
    },
    loadProducts(state, payload) {
      state.products = payload
    }
  },
  actions: {
    createProduct({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newProduct = new Product(
          payload.title,
          payload.vendor,
          payload.color,
          payload.material,
          payload.price,
          payload.description,
          getters.getUser.id,
          payload.imgSrc,
          payload.promo
        )
        const db = getDatabase();
         set(ref(db, 'products/' + Date.now()), 
          newProduct);
        commit('setLoading', false)
        commit('createProduct', {
          ...newProduct,
          id: new Date().toDateString()
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    fetchProducts({commit}) {
      commit('clearError')
      commit('setLoading', true)
      
      const resultProducts = [] 
      try {
        const dbRef = ref(getDatabase());
        const products = get(child(dbRef, `products/`)).then((snapshot) => {
          if (snapshot.exists()) {
            
            Object.keys(products).forEach(key => {
              const product = products[key]
              resultProducts.push(
                new Product(
                  product.title,
                  product.vendor,
                  product.color,
                  product.material,
                  product.price,
                  product.description,
                  product.ownerId,
                  product.imageSrc,
                  product.promo,
                  key
                )
              )
              commit('loadProducts', resultProducts)
              commit('setLoading', false)
            })
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
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