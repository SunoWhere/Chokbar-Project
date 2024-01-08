import Vue from 'vue'
import Vuex from 'vuex'
import {usersService} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMapTooltipOpen: false,

    isConnected: usersService.getUuid() != null,
    role: usersService.getRole(),

    users: await usersService.getAllUser(), // All users of the base
    userIdToRemove: null,
    userToEdit: null,

    showAddUserPopup: false,
    showEditUserPopup: false,
    showRemoveUserPopup: false,
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
    setUserToEdit(state, value) {
      state.userToEdit = value;
    },
    setShowEditUserPopup(state, value) {
      state.showEditUserPopup = value;
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