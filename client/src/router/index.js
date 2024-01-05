import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Global/HomeView.vue'
import BilletterieView from '@/views/Global/BilletterieView.vue';
import DashboardView from "@/views/Admin/DashboardView.vue";
import LoginView from '@/views/Global/Connection/LoginView.vue';
import RegisterView from '@/views/Global/Connection/RegisterView.vue';
import CheckoutView from '@/views/Global/CheckoutView.vue';
import InteractiveMapView from "@/views/Global/InteractiveMapView.vue";
import CrudProvidersView from "@/views/Admin/CrudProvidersView.vue";
import AproposView from "@/views/Global/AproposView.vue";
import DatesView from "@/views/Global/DatesView.vue";
import CrudUsersView from "@/views/Admin/CrudUsersView.vue";
import CreditCardView from "@/views/Global/CreditCardView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Billetterie',
    name: 'Billetterie',
    component: BilletterieView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/Admin/Intervenants',
    name: 'CrudProviders',
    component: CrudProvidersView
  },
  {
    path: '/Admin/User',
    name: 'CrudUsers',
    component: CrudUsersView
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
  path: '/Billetterie/checkout',
  name: 'Checkout',
  component: CheckoutView
  },
  {
    path: '/Map',
    name: 'Map',
    component: InteractiveMapView
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
    path: '/Billetterie/checkout/creditcard',
    name: 'CreditCard',
    component: CreditCardView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
