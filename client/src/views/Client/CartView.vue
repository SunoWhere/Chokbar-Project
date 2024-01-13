<script>

import {cartsService, standsService, usersService} from "@/services";

export default {
  name: 'CartView',
  components: {

  },
  data() {
    return {
      cart: [],
      totalPrice: 0,
      uniqueStandsNames: []
    }
  },
  metaInfo() {
    return {
      title: 'CartView'
    }
  },
  methods: {
    async getCart() {
      try {
        const cartsLines = await cartsService.getCartByUserId(usersService.getUuid());
        const groupedProducts = [];

        cartsLines.forEach(product => {
          const standId = product.product.id_stand;

          if (!groupedProducts[standId]) {
            groupedProducts[standId] = [];
          }

          const plainProduct = JSON.parse(JSON.stringify(product));
          groupedProducts[standId].push(plainProduct);
        });

        this.cart = Object.values(groupedProducts);
      } catch(error) {
        console.error(error);
      }
    },
    async getAllStandName() {
      try {
        const uniqueStandNames = [];
        for (const group of this.cart) {
          if (group && group.length > 0 && group[0].product) {
            const standId = group[0].product.id_stand;
            const stand = await standsService.getStandById(standId);

            if (stand) {
              uniqueStandNames.push({ id: stand.id_stand, name: stand.name });
            }
          }
        }
        this.uniqueStandsNames = uniqueStandNames;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    getStandName(item) {
      if (item && item.length > 0 && item[0].product) {
        const standId = item[0].product.id_stand;
        const stand = this.uniqueStandsNames.find(stand => stand.id === standId);
        return stand ? stand.name : '';
      }
      return '';
    },
    totalCartPrice() {
      try {
        let price = 0;
        for (const group of this.cart) {
          for (const item of group) {
            price += item.product.price * item.quantity;
          }
        }
        this.totalPrice = price;
      } catch(error) {
        console.log(error);
      }
    },
    async removeItem(id_product) {
      try {
        const uuid = usersService.getUuid();
        if(uuid !== undefined) {
          await cartsService.removeCartLine(uuid, id_product).then(() => {
            this.getCart().then(() => {
              this.totalCartPrice();
            });
          });
        } else {
          throw new Error("uuid undefined");
        }
      } catch(error) {
        console.error(error.message);
      }
    },
    async clearCart() {
      const uuid = usersService.getUuid();
      if(uuid !== undefined) {
        await cartsService.clearCart(uuid).then(() => {
          this.getCart().then(() => {
            this.getCart().then(() => {
              this.totalCartPrice();
            });
          });
        });
      } else {
        throw new Error("can't remove cart, uuid undefined");
      }
    },
    getLang() {
      return this.$store.state.lang;
    },
  },
  computed: {

  },
  mounted() {
    this.getCart().then(() => {
      this.getAllStandName().then(() => {
        this.totalCartPrice()
      });
    });
  },
}
</script>

<template>
  <div class="main-content">
    <div class="content">
      <div class="left-side">
        <h1>Articles</h1>
        <div class="table">
          <div class="table-body">
            <div class="tr" v-for="(item, index) in cart" :key="index">
              <div class="head">
                <h4 class="table-head-title">{{getLang().cart_name}}</h4>
                <h4 class="table-head-title">{{getLang().cart_price}}</h4>
                <h4 class="table-head-title">{{getLang().cart_quantity}}</h4>
                <h4 class="table-head-title">Action</h4>
              </div>
              <h2>{{ getStandName(item) }}</h2>
              <div class="line" v-for="(product, index) in item" :key="index">
                <div class="td">
                  <p v-if="'EN' === $store.state.lang_name">{{ product.product.name_en }}</p>
                  <p v-else>{{ product.product.name_fr }}</p>
                </div>
                <div class="td"><p>{{ product.product.price }} €</p></div>
                <div class="td"><p>{{ product.quantity }}</p></div>
                <div class="td">
                  <div class="add-btn">
                    <button class="add-button" @click.prevent="removeItem(product.product.id_product)">{{getLang().cart_remove_from_cart}}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="no-article" v-if="cart.length === 0">{{getLang().cart_no_article}}</p>
          <button class="delete-cart-btn" v-if="cart.length !== 0" @click="clearCart()">{{getLang().cart_empty}}</button>
        </div>

      </div>
      <div class="right-side">
        <div class="total">
          <p>Total:</p>
          <p>{{totalPrice}} €</p>
        </div>
        <button class="checkout-btn" v-if="totalPrice > 0" @click="$router.push('/cart/checkout')">{{getLang().cart_payer}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100vh;
  color: var(--white);
}

.content {
  width: 100%;
  min-height: 100vh;
  padding: 50px 15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.left-side {
  width: 700px;
  height: 100%;
  margin-left: 120px;
}

.right-side {
  margin-top: 15vh;
  padding: 10px 10px 0 10px;
  width: 450px;
  height: 100%;
  margin-right: 150px;
  background-color: #494949;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}

.total {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.total p {
  margin-right: 10px;
}

.checkout-btn {
  background-color: var(--white);
  width: fit-content;
  margin-top: 10px;
  margin-right: 10px;
  border: none;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: rgb(215, 215, 215);
}

.delete-cart-btn {
  background-color: var(--white);
  margin-top: 10px;
  margin-right: 10px;
  border: none;
  color: black;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-cart-btn:hover {
  background-color: rgb(215, 215, 215);
}


.head {
  width: 100%;
  display: flex;
  transform: translateY(+20px);
  margin-top: 30px;
}

.table-head-title {
  width: 25%;
}

th {
  width: 25%;
}

table {
  width: 100%;
}

.tr {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.td {
  width: 25%;
}

.line {
  height: 40px;
  display: flex;
  flex-direction: row;
}

h2 {
  font-size: 1.1em;
  transform: translateY(-25px);
}

button {
  width: 200px;
  height: 28px;
  border: none;
  color: white;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #4728d4;
}

button:hover {
  background-color: #6848ff;
}

button:active {
  background-color: #2c1a7e; /* Couleur pour l'état actif (clic) */
}

</style>