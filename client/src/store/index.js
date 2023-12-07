import Vue from 'vue'
import Vuex from 'vuex'
import {usersService} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMapTooltipOpen: false,
    isConnected: usersService.getUuid() != null,
  },
  getters: {
    
  },
  mutations: {
    setConnected(state, { value, callback }) {
      state.isConnected = value;
      if (callback && typeof callback === 'function') {
        callback();
      }
    },
  },
  actions: {

  },
  modules: {
  }
})