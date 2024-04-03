import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Global/HomeView.vue'
import BilletterieView from '@/views/Global/NavBar/BilletterieView.vue';
import DashboardView from "@/views/DashboardView.vue";
import LoginView from '@/views/Global/Connection/LoginView.vue';
import RegisterView from '@/views/Global/Connection/RegisterView.vue';
import CheckoutView from '@/views/Global/Checkout/CheckoutView.vue';
import InteractiveMapView from "@/views/Global/NavBar/InteractiveMapView.vue";
import CrudProvidersView from "@/views/Admin/CrudProvidersView.vue";
import AproposView from "@/views/Global/NavBar/AproposView.vue";
import DatesView from "@/views/Global/NavBar/DatesView.vue";
import CrudUsersView from "@/views/Admin/CrudUsersView.vue";
import CreditCardView from "@/views/Global/Checkout/CreditCardView.vue";
import CrudStandViewProvider from "@/views/Provider/CrudStandView.vue";
import CrudStandViewAdmin from "@/views/Admin/CrudStandsView.vue";
import CartView from "@/views/Client/CartView.vue"
import ShopView from "@/views/Global/ShopView.vue"
import ShopStandView from "@/views/Global/NavBar/ShopStandView.vue"
import CrudArticleStandView from "@/views/Provider/CrudArticleStandView.vue"
import CartCheckoutView from "@/views/Global/Checkout/CartCheckoutView.vue";
import UserOrdersView from "@/views/Client/UserOrdersView.vue";
import ContactView from "@/views/Global/ContactFormView.vue";

import store from '@/store';
import {authService} from "@/services";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/Boutique',
    name: 'Boutique',
    component: ShopView
  },
  {
    path: '/Boutique/:id',
    name: 'BoutiqueStand',
    component: ShopStandView
  },
  {
    path: '/Infos/Ezcon',
    name: 'AproposView',
    component: AproposView
  },
  {
    path: '/Infos/Dates',
    name: 'DateView',
    component: DatesView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/Map',
    name: 'Map',
    component: InteractiveMapView,
  },
  {
    path: '/Billetterie',
    name: 'Billetterie',
    component: BilletterieView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: CartView,
    meta: { requiresAuth: true }
  },
  {
  path: '/Billetterie/checkout',
  name: 'Checkout',
  component: CheckoutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart/checkout',
    name: 'CheckoutPanier',
    component: CartCheckoutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Billetterie/checkout/creditcard',
    name: 'CreditCard',
    component: CreditCardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Admin/Intervenants',
    name: 'CrudProviders',
    component: CrudProvidersView,
    meta: { requiresAuth: true, roles: ['admin'] }
  },
  {
    path: '/Admin/User',
    name: 'CrudUsers',
    component: CrudUsersView,
    meta: { requiresAuth: true, roles: ['admin'] }
  },
  {
    path: '/Admin/Stands',
    name: 'CrudStands',
    component: CrudStandViewAdmin,
    meta: { requiresAuth: true, roles: ['admin'] }
  },
  {
    path: '/intervenant/stands',
    name: 'CrudStand',
    component: CrudStandViewProvider,
    meta: { requiresAuth: true, roles: ['provider'] }
  },
    {
    path: '/intervenant/stands/article',
    name: 'CrudArticle',
    component: CrudArticleStandView,
    props: true,
    meta: { requiresAuth: true, roles: ['provider'] }
  },
  {
    path: '/users/orders',
    name: 'Orders',
    component: UserOrdersView,
    meta: { requiresAuth: true, roles: ['user'] }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.state.isConnected;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const hasRequiredRole = to.meta.roles ? to.meta.roles.includes(await authService.getRole()) : true;

  if (!requiresAuth || (isAuthenticated && hasRequiredRole)) {
    next();
  } else if (requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next({ name: 'Home' });
  }
});

export default router
