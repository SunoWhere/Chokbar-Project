import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BilletterieView from '@/views/BilletterieView.vue';
import DashboardView from "@/views/DashboardView.vue";
import LoginView from '@/views/LoginView.vue';

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
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
    {
    path: '/Billetterie/checkout',
    name: 'Checkout',
    component: CheckoutView
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
