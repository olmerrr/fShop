import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async registrationUser({ commit }, { email,password }) {
      commit('clearError');
      commit('setLoading', true);
      
      try {
        const user = await createUserWithEmailAndPassword(
          getAuth(), email, password
          )
        commit('setUser', new User(user.uid));
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error);
        throw error;
      }
    },
    async loginUser({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const user = await signInWithEmailAndPassword(
          getAuth(), email, password
          )
        commit('setUser', new User(user.uid));
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error);
        throw error;
      }
    },
    autoLoginUser({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser({commit}) {
      const auth = getAuth();
      signOut(auth).then(() =>commit('setUser', null))
      
    } 
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getIsUserLoggedIn(state) {
      return state.user !== null
    }
  },
}