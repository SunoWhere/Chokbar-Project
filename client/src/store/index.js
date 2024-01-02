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
    users: await usersService.getAllUser(),
  },
  getters: {
    getUserList: state => state.users,
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
    setUserList(state, userList) {
      state.users = userList;
    },
  },
  actions: {
    async updateUserList({ commit }) {
      try {
        const userList = await usersService.getAllUser();
        commit('setUserList', userList.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  }
})