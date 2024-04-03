<script>
import {authService, cartsService, productsService, standsService} from "@/services";

export default {
  name: 'ShopStandView',
  data() {
    return {
      stand: [],
      products: [],
      productsTypes: [],
      productsStates: [],
      productQuantities: {},
      itemBuy: {},
      showNotification: false,
      notificationTimer: null,
    }
  },
  methods: {
    showAddToCartNotification() {
      if (this.notificationTimer) {
        clearTimeout(this.notificationTimer);
      }

      this.showNotification = true;

      this.notificationTimer = setTimeout(() => {
        this.showNotification = false;
      }, 1500);
    },
    initializeProductQuantities() {
      this.products.forEach(product => {
        this.$set(this.productQuantities, product.id_product, 1);
      });
    },
    async getStandById() {
      try {
        const standId = this.$route.params.id;
        this.stand = await standsService.getStandById(standId);
      } catch (error) {
        console.error(error);
      }
    },
    async getStandProducts() {
      try {
        const standId = this.$route.params.id;
        const products = await standsService.getStandProduct(standId);

        products.sort((a, b) => {
          const nameA = a.name_fr.toUpperCase();
          const nameB = b.name_fr.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });

        this.products = products;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllProductTypes() {
      try {
        this.productsTypes = await productsService.getAllProductTypes();
      } catch (error) {
        console.error(error);
      }
    },
    getProductType(id_product_type) {
      if (this.productsTypes && this.productsTypes.length > 0) {
        const productType = this.productsTypes.find(productType => productType.id_product_type === id_product_type);

        if (productType) {
          return productType.name;
        }
      }

      return 'Nom inconnu';
    },
    async addToCart(item) {
      try {
        const uuid_user = authService.getUuid();
        const id = item.id_product;
        let quantity = this.productQuantities[id] || 1;
        if(quantity > item.quantity) quantity = item.quantity;
        this.itemBuy = {
          name_fr: item.name_fr,
          quantity: quantity
        }

        cartsService.addCart(uuid_user, id, quantity).then(async () => {
          await this.getStandProducts();
          this.showAddToCartNotification();
          this.initializeProductQuantities();
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    availableProducts() {
      return this.products.filter(product => product.id_product_state === 1);
    },
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
  },
  mounted() {
    this.getStandById().then(() => {
      this.getStandProducts().then(() => {
        this.getAllProductTypes();
        this.initializeProductQuantities();
      })
    });
  }
}
</script>

<template>
  <div class="main-content">
    <transition name="fade">
      <div v-if="showNotification" class="notification">
        {{ itemBuy.name_fr }} ajouté au panier X{{ itemBuy.quantity }} !
      </div>
    </transition>
    <div class="top-content">
      <div class="left-side">
        <h1>{{ stand.name }}</h1>
        <div class="description">
          <p v-if="'FR' === $store.state.lang_name">{{ stand.description_fr }}</p>
          <p v-else>{{ stand.description_en }}</p>
        </div>
        <div class="contact">
          <button class="contact-button" @click="$router.push('/Contact')">{{getLang().footer_contact_button}}</button>
        </div>
      </div>
      <div class="right-side">
        <div class="image"></div>
      </div>
    </div>
    <div class="items">
      <table>
        <thead>
        <tr class="head">
          <th>{{ getLang().stands_articles_shop_nom }}</th>
          <th>{{ getLang().stands_articles_shop_prix }}</th>
          <th>{{ getLang().stands_articles_shop_quantite }}</th>
          <th>{{ getLang().stands_articles_shop_type }}</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in availableProducts" :key="index">
          <td v-if="'EN' === $store.state.lang_name">{{ item.name_en }}</td>
          <td v-else>{{ item.name_fr }}</td>
          <td>{{ item.price }} €</td>
          <td v-if="item.quantity > 1">{{ item.quantity }} {{ getLang().stands_articles_shop_unite }}s</td>
          <td v-else>{{ item.quantity }} {{ getLang().stands_articles_shop_unite }}</td>
          <td>{{ getProductType(item.id_product_type) }}</td>
          <td id="action">
            <div class="info-btn">
              <button class="info-button" @click.prevent="">{{ getLang().stands_articles_shop_info }}</button>
            </div>
            <div class="add-btn" v-if="isConnected && item.quantity !== 0 && getRole === 'user'">
              <button class="add-button"
                      @click.prevent="addToCart(item)">{{ getLang().stands_articles_shop_cart }}
              </button>
            </div>
            <div v-if="isConnected && item.quantity !== 0 && getRole === 'user'">
              <input id="number" v-model="productQuantities[item.id_product]" type="number" step="1" min="1" :max="item.quantity"/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  padding-top: 50px;
}

.top-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-side {
  margin-left: 100px;
  text-align: left;
}

h1 {
  font-size: 2.1em;
}

p {
  font-size: 1.1em;
}

.contact{
  margin:15px
}

.contact-button {
  border: none;
  border-radius: 10px;
  background-color: var(--scnd2);
  box-shadow: 0 0 15px var(--scnd2);
  color: var(--white);
  font-size: 15px;
  cursor: pointer;
  margin-right: 10px;
  padding: 13px 20px;
  transition: all 0.15s ease
}

.contact-button:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 15px var(--scnd3);
}

.description {
  width: 20vw;
}

.image {
  margin-right: 100px;
  width: 44vw;
  height: 36vh;
  border-radius: 17px;
  background-image: url("@/assets/placeholder.png");
  background-position: center;
}

.items {
  margin-top: 50px;
  width: 100%;
  padding: 30px 50px 30px 50px;
  display: flex;
  justify-content: center;
  border-radius: 17px;
}

tr {
  background-color: #f5f5f5;
  color: black;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 5px 5px;
}

tr:nth-child(even) {
  background-color: var(--component-background);
}

.head {
  display: flex;
  justify-content: space-evenly;
}

th {
  width: 250px;
  text-align: left;
}

td {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin-right: 30px;
}

td:nth-child(1) {
  border: none;
}

.add-btn {
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  padding-top: 8px;
}

.info-btn {
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  padding-top: 8px;
  margin-right: 10px;
}

.info-button {
  width: 70px;
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

.add-button {
  width: 160px;
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

.add-button:hover {
  background-color: #6848ff;
}

.add-button:active {
  background-color: #2c1a7e;
}

table {
  overflow: hidden;
  border-radius: 15px;
}

#action {
  width: 300px;
}

#number {
  width: 50px;
  height: 28px;
  margin-left: 10px;
  font-size: 1.005em;
}

.notification {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(85px);
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
