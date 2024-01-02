import Vue from 'vue'
import Vuex from 'vuex'
import {usersService} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMapTooltipOpen: false,
    isConnected: usersService.getUuid() != null,
    showAddUserPopup: false,
    showRemoveUserPopup: false,
    role: usersService.getRole(),
    users: await usersService.getAllUser(),
    currentUserIdSelected: '',
    userIdToRemove: null,
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
    setShowRemoveUserPopup(state, value) {
      state.showRemoveUserPopup = value;
    },
    setUserList(state, userList) {
      state.users = userList;
    },
    setUserIdToRemove(state, value) {
      state.userIdToRemove = value;
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