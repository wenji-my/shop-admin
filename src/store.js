import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      img_host: ''
    }
  },
  mutations: {
    setConfig(state, config) {
      state.config = config
    }
  },
  actions: {

  }
})
