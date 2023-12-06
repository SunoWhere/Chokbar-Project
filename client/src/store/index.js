import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedRole: "0",
    isMapTooltipOpen: false,
  },
  getters: {
  },
  mutations: {
    updateSelectedRole(state, value) {
      state.selectedRole = value;
    }
  },
  actions: {
    setSelectedRole({ commit }, value) {
      commit('updateSelectedRole', value);
    }
  },
  modules: {
  }
})