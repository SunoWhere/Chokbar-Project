import Vue from 'vue'
import Vuex from 'vuex'
import {providersService, usersService, eventsService, standsService, lang_fr, lang_en} from "@/services";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showMapTooltip: false,
        showPlanningInfo: false,
        showAddEvent: false,
        showEditEvent: false,

        isConnected: usersService.getUuid() != null,
        role: usersService.getRole(),

        lang: lang_fr,

        users: [],
        providers: [],
        stands: [],
        events: [],
        articles: [],

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
        showLinkedStandsPopup: false,

        standToEdit: null,
        showEditStandPopup: false,

        articleToEdit: null,
        articleToRemove: null,
        articleToAdd: null,
        showEditArticlePopup: false,
        showRemoveArticlePopup: false,
        showAddArticlePopup: false,

    },
    getters: {
        getUserList: state => state.users,
        getProviderList: state => state.providers,
        getEventList: state => state.events,

        getShowMapTooltip: state => state.showMapTooltip,
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
        setShowLinkedStandsPopup(state, value) {
            state.showLinkedStandsPopup = value;
        },

        // Stands
        setStandList(state, standList) {
            state.stands = standList;
        },
        setStandToEdit(state, stand) {
            state.standToEdit = stand;
        },
        setShowEditStandPopup(state, value) {
            state.showEditStandPopup = value;
        },

        // Lang
        setLang(state, value) {
            if (value.toUpperCase() === 'EN') {
                state.lang = lang_en;
            } else {
                state.lang = lang_fr;
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
                const standList = await standsService.getProvider();
                commit('setStandList', standList.data);
            } catch (err) {
                console.log(err);
            }
        }
    },
    modules: {}
})