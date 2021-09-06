import Vuex from 'vuex'
import Vue from 'vue'

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

const state = {
  cartlist: []
}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
})

export default store
