import Vue from 'vue'
import Vuex from 'vuex'
import {usersService} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMapTooltipOpen: false,
    isConnected: usersService.getUuid() != null,
    showAddUserPopup: false,
    role: usersService.getRole(),
  },
  getters: {

  },
  mutations: {
    setConnected(state, value) {
      state.isConnected = value;
    },
    setRole(state, value) {
      state.role = value;
    },
    setShowAddUserPopup(state, value) {
      state.showAddUserPopup = value;
    },
  },
  actions: {

  },
  modules: {
  }
})