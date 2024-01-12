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
import CrudStandViewProvider from "@/views/Provider/CrudStandView.vue";
import CrudStandViewAdmin from "@/views/Admin/CrudStandsView.vue";
import CartView from "@/views/Global/CartView.vue"
import ShopView from "@/views/Global/ShopView.vue"
import ShopStandView from "@/views/Global/ShopStandView.vue"
import CrudArticleStandView from "@/views/Provider/CrudArticleStandView.vue"
import CartCheckoutView from "@/views/Global/CartCheckoutView.vue";
import UserOrdersView from "@/views/Global/UserOrdersView.vue";
import ContactView from "@/views/Global/ContactFormView.vue";

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
    path: '/Cart',
    name: 'Cart',
    component: CartView
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
    path: '/Admin/Stands',
    name: 'CrudStands',
    component: CrudStandViewAdmin
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
    path: '/cart/checkout',
    name: 'CheckoutPanier',
    component: CartCheckoutView
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
  },
  {
    path: '/intervenant/stands',
    name: 'CrudStand',
    component: CrudStandViewProvider
  },
    {
    path: '/intervenant/stands/article',
    name: 'CrudArticle',
    component: CrudArticleStandView,
    props: true
  },
  {
    path: '/users/orders',
    name: 'Orders',
    component: UserOrdersView
  },
    {
        path: '/Contact',
        name: 'Contact',
        component: ContactView
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
