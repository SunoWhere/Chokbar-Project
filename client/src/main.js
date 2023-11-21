import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueMeta);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faUser, faCartShopping, faEnvelope, faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faSquareXTwitter, faTiktok} from "@fortawesome/free-brands-svg-icons"; // Solid Icons
// import { regular } from '@fortawesome/free-regular-svg-icons' // Regular Icons
// import { brands } from '@fortawesome/free-brands-svg-icons' // Brands Icons

library.add(faUser, faCartShopping, faEnvelope,faCheck,faXmark, faFacebook, faSquareXTwitter, faTiktok, faInstagram); // Solid Icons
library.add(); // Regular Icons
library.add(); // Brands Icons

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
