import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BilletterieView from '@/views/BilletterieView.vue';
import DashboardView from "@/views/DashboardView.vue";
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import InteractiveMapView from "@/views/InteractiveMapView.vue";
import CrudProvidersView from "@/views/CrudProvidersView.vue";
import AproposView from "@/views/AproposView.vue";
import DatesView from "@/views/DatesView.vue";
import CrudUsersView from "@/views/CrudUsersView.vue";

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
