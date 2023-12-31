import Vue from 'vue'
import Vuex from 'vuex'
import {providersService, usersService, eventsService} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMapTooltip: false,
    showPlanningInfo: false,
    showAddEvent: false,

    isConnected: usersService.getUuid() != null,
    role: usersService.getRole(),

    users: [],
    providers: [],
    stands: [],
    events: [],

    userIdToRemove: null,
    providerIdToRemove: null,
    userToEdit: null,
    providerToEdit: null,

    showAddUserPopup: false,
    showEditUserPopup: false,
    showRemoveUserPopup: false,

    showNewClientOrNotPopup: false,
    showAddProviderPopup: false,
    showLinkClientProviderPopup: false,
    showRemoveProviderPopup: false,
    showEditProviderPopup: false,

    standToEdit: null,
    showEditStandPopup: false,
  },
  getters: {
    getUserList: state => state.users,
    getProviderList: state => state.providers,
    getEventList: state => state.events,

    getShowMapTooltip: state => state.showMapTooltip,
    getShowPlanningInfo: state => state.showPlanningInfo,
    getShowAddEvent: state => state.showAddEvent,
  },
  mutations: {
    // Connection
    setConnected(state, value) {
      state.isConnected = value;
    },
    setRole(state, value) {
      state.role = value;
    },

    // Users
    setShowAddUserPopup(state, value) {
      state.showAddUserPopup = value;
    },
    setShowRemoveUserPopup(state, value) {
      state.showRemoveUserPopup = value;
    },
    setUserList(state, userList) {
      state.users = userList;
    },
    setProviderList(state, providerList) {
      state.providers = providerList;
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

    // Planning / Event
    setShowPlanningInfo(state, value) {
      state.showPlanningInfo = value;
    },
    setShowAddEvent(state, value) {
      state.showAddEvent = value;
    },
    setShowMapTooltip(state, value) {
      state.showMapTooltip = value;
    },
    setEventList(state, eventList) {
      state.events = eventList;
    },

    // Providers
    setProviderIdToRemove(state, value) {
      state.providerIdToRemove = value;
    },
    setShowNewClientOrNotPopup(state, value) {
      state.showNewClientOrNotPopup = value;
    },
    setShowAddProviderPopup(state, value) {
      state.showAddProviderPopup = value;
    },
    setShowLinkClientProviderPopup(state, value) {
      state.showLinkClientProviderPopup = value;
    },
    setShowRemoveProviderPopup(state, value) {
      state.showRemoveProviderPopup = value;
    },
    setShowEditProviderPopup(state, value) {
      state.showEditProviderPopup = value;
    },
    setProviderToEdit(state, provider) {
      state.providerToEdit = provider;
    },

    // Stands
    setStandList(state, standList) {
      state.stands = standList;
    },
    setStandToEdit(state, value) {
      state.standToEdit = value;
    },
    setShowEditStandPopup(state, value) {
      state.showEditStandPopup = value;
    }
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
    async updateProviderList({ commit }) {
      try {
        const providerList = await providersService.getAllProvider();
        commit('setProviderList', providerList.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateEventList({ commit }) {
      try {
        const eventList = await eventsService.getEvents();
        commit('setEventList', eventList.data);
      } catch(err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})