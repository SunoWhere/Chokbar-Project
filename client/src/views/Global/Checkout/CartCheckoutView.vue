<script>
import {authService, usersService} from "@/services";

export default {
  name: 'CartCheckoutView',
  components: {
  },
  metaInfo() {
    return {
      title: 'CartCheckout'
    }
  },
  methods: {
    async createOrder() {
      try {
        await usersService.createOrder(authService.getUuid()).then(() => {
          this.$router.push('/users/orders');
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<template>
  <section class="checkout">
    <div class="checkout-loading">
      <div class="checkout-head">
        <svg class="shopping-icon" viewBox="0 0 24 24">
          <path fill="#ffffff55"
                d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"/>
        </svg>
        Paiement
      </div>
      <div class="price">Choisissez une méthode de paiement</div>
      <button class="payment-method">
        PayPal
      </button>
      <button @click="createOrder()" class="payment-method">
        Carte Bancaire
      </button>
    </div>
  </section>

</template>

<style scoped>

.checkout{
  color: var(--white);
  height: calc(100vh - 80px);
}

.checkout-loading{
  overflow:hidden;
  text-align: center;
  width: 400px;
  height: 240px;
  top:0;left:0;right:0;bottom:0;
  margin: auto;
  background: var(--component-background);
  border-radius: 12px;
  box-shadow: 0px 4px 13px rgba(0,0,0,.2), 0px 3px 3px rgba(0,0,0,.3);
}

.checkout-head{
  overflow:hidden;
  line-height: 50px;
  width: 100%;
  font-size: 24px;
  box-sizing: border-box;
  height: 110px;
  text-align: right;
  padding: 30px;
  background: var(--scnd1)
}

.shopping-icon{
  height: 170px;
  margin-top: -60px;
  margin-left: -50px;
  transform: rotate(-25deg);
  float: left;
}

.price{
  color: black;
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  border-bottom: solid rgba(0, 0, 0, 0.20) 1px;
}

.payment-method{
  color: black;
  width: 100%;
  height: 50px;
  font-size: 18px;
  border: none;
  background: rgba(255,255,255,.05);
  transition: .1s ease;
}

.payment-method:hover{
  cursor: pointer;
  background: rgba(0,0,0,.1);
}

.payment-method:focus{
  outline: none;
}
</style>
