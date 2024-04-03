import Vue from 'vue'
import Vuex from 'vuex'
import {providersService, usersService, eventsService, standsService, lang_fr, lang_en, authService} from "@/services";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showStandInfo: false,
        showPlanningInfo: false,
        showAddEvent: false,
        showEditEvent: false,

        isConnected: authService.getUuid() != null,
        role: await authService.getRole(),

        lang_name: "",
        lang: lang_fr,

        users: [],
        providers: [],
        stands: [],
        realStandList: [],
        events: [],
        articles: [],

        id_ticket_type: null,

        userIdToRemove: null,
        standIdToRemove: null,
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
        showLinkedStandsPopup: false,

        standTypes: null,
        standToEdit: null,
        showAddStandPopup: false,
        showRemoveStandPopup: false,
        showEditStandPopup: false,
        standProducts: {},

        articleToEdit: null,
        articleToRemove: null,
        articleToAdd: null,
        showEditArticlePopup: false,
        showRemoveArticlePopup: false,
        showAddArticlePopup: false,
    },
    getters: {
        getUserList: state => state.users,
        getStandList: state => state.stands,
        getRealStandList: state => state.realStandList,
        getProviderList: state => state.providers,
        getEventList: state => state.events,

        getShowStandInfo: state => state.showStandInfo,
        getShowPlanningInfo: state => state.showPlanningInfo,
        getShowAddEvent: state => state.showAddEvent,
        getShowEditEvent: state => state.showEditEvent,
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
      setShowEditEvent(state, value) {
          state.showEditEvent = value;
      },
      setShowStandInfo(state, value) {
          state.showStandInfo = value;
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
      setShowLinkedStandsPopup(state, value) {
          state.showLinkedStandsPopup = value;
      },

      // Stands
      addStandsProduct(state, {id_stand, length}) {
          Vue.set(state.standProducts, id_stand, length);
      },
      removeStandsProduct(state, {id_stand}) {
          Vue.delete(state.standProducts, id_stand);
      },
      setShowAddStandPopup(state, value) {
          state.showAddStandPopup = value;
      },
      setStandList(state, standList) {
          state.stands = standList;
      },
      setStandToEdit(state, stand) {
          state.standToEdit = stand;
      },
      setShowEditStandPopup(state, value) {
          state.showEditStandPopup = value;
      },
      setShowRemoveStandPopup(state, value) {
          state.showRemoveStandPopup = value;
      },
      setStandIdToRemove(state, value) {
          state.standIdToRemove = value;
      },
      setRealStandlist(state, value) {
          state.realStandList = value;
      },
      setStandTypes(state, value) {
          state.standTypes = value;
      },

      // Lang
      setLang(state, value) {
          if (value.toUpperCase() === 'EN') {
              state.lang = lang_en;
              state.lang_name = 'EN';
          } else {
              state.lang = lang_fr;
              state.lang_name = 'FR'
          }
          localStorage.setItem('lang', value);
      },

      // Articles
      setArticleList(state, articleList) {
          state.articles = articleList;
      },
      setArticleToEdit(state, article) {
          state.articleToEdit = article;
      },
      setArticleToRemove(state, article) {
          state.articleToRemove = article;
      },
      setArticleToAdd(state, article) {
          state.articleToAdd = article;
      },
      setShowEditArticlePopup(state, value) {
          state.showEditArticlePopup = value;
      },
      setShowRemoveArticlePopup(state, value) {
          state.showRemoveArticlePopup = value;
      },
      setShowAddArticlePopup(state, value) {
          state.showAddArticlePopup = value;
      },

      // Ticket
      setIdTicketType(state, value) {
          state.id_ticket_type = value;
      },
    },
    actions: {
        async updateUserList({commit}) {
            try {
                const userList = await usersService.getAllUser();
                commit('setUserList', userList.data);
            } catch (error) {
                console.error(error);
            }
        },
        async updateProviderList({commit}) {
            try {
                const providerList = await providersService.getAllProvider();
                commit('setProviderList', providerList.data);
            } catch (error) {
                console.error(error);
            }
        },
        async updateEventList({commit}) {
            try {
                const eventList = await eventsService.getEvents();
                commit('setEventList', eventList.data);
            } catch (err) {
                console.log(err);
            }
        },
        async updateStandList({commit}) {
            try {
                const standList = await standsService.getAllStands();
                commit('setStandList', standList);
            } catch (err) {
                console.log(err);
            }
        },
        async updateRealStandList({commit}) {
            try {
                const realstandList = await standsService.getProvider();
                commit('setRealStandlist', realstandList.data);
            } catch (err) {
                console.log(err);
            }
        },
        async fetchStandTypes({commit}) {
            try {
                const standTypes = await standsService.getStandsTypes();
                commit('setStandTypes', standTypes);
            } catch(err) {
                console.error(err);
            }
        },
        async getProductOfStand(context, stand) {
            try {
                return await standsService.getStandsProducts(stand.stand_id);
            } catch(err) {
                console.error(err);
            }
        }
    },
    modules: {

    }
});

export default store;
