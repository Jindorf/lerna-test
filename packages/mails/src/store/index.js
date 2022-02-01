import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('mails', {
  state: () => ({
    mails: []
  }),
  mutations: {},
  actions: {}
})

export default store
