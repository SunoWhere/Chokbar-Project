import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueMeta);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faUser, faCartShopping, faEnvelope, faCheck, faXmark, faChevronDown} from '@fortawesome/free-solid-svg-icons'; // Solid Icons
import {faFacebook, faInstagram, faSquareXTwitter, faTiktok} from "@fortawesome/free-brands-svg-icons"; // Brand Icons
// import { regular } from '@fortawesome/free-regular-svg-icons' // Regular Icons

library.add(faUser, faCartShopping, faEnvelope, faCheck, faXmark, faChevronDown); // Solid Icons
library.add(); // Regular Icons
library.add(faFacebook, faSquareXTwitter, faTiktok, faInstagram); // Brands Icons

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
