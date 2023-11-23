import { createStore } from 'vuex'

export default createStore({
  state: {
   image : "Aucun fichier n'est choisi"
  },
  getters: {},
  mutations: {
    setImage(state, image) {
      state.image = image
    },
  },
  actions: {
    ChangeImage({ commit }, image) {
      commit('setImage', image)
    }
  },
  modules: {}
})