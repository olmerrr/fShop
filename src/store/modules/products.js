import axios from 'axios';
import { API_URL } from '@/config';

export default {
  state: {
    products: [],
    cartCount: 0,
    cart: []
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
      state.cartCount++;
    },
  },
  actions: {
    fetchData({commit}) {
        commit('clearError', true);
        commit('setLoading', true);
        
        return axios.get(API_URL,{
          headers: {
            Authorization: 'cf652cde-54514fce-b9be9f78-c9fa49d1'
          }          
        })
      .then((response) => response)
      .then(({data}) =>  {
        data.featured
        commit('setLoading', false)
        commit('loadProducts', data.featured)
      })
      .catch(err => {
        console.log(err)
        throw new Error('Some error')
      })
    },
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getPromoProducts(state) {
      return state.products.filter(product => {
        return product.priority == -2
      })
    },
    wishList(state) {
      return state.products.filter(product => {
        if (product.price > 1000) {
          return product
        }      
      })
    },
    getProductById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    },
    getCartCount(state) {
      return state.cartCount
    },
    getCart(state) {
      return state.cart
    },
  },
}