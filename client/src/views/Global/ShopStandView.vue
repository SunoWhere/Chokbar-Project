<script>
import {cartsService, productsService, standsService, usersService} from "@/services";

export default {
  name: 'ShopStandView',
  data() {
    return {
      stand: [],
      products: [],
      productsTypes: [],
      productsStates: [],
    }
  },
  methods: {
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
      } catch(error) {
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
        const uuid_user = usersService.getUuid();
        const id = item.id_product;

        await cartsService.addCart(uuid_user, id, 1).then(async () => {
          await this.getStandProducts();
        });
      } catch(error) {
        console.log(error)
      }
    }
  },
  computed: {
    availableProducts() {
      return this.products.filter(product => product.id_product_state === 1);
    }
  },
  mounted() {
    this.getStandById().then(() => {
      this.getStandProducts().then(() => {
        this.getAllProductTypes();
      })
    });
  }
}
</script>

<template>
  <div class="main-content">
    <div class="top-content">
      <div class="left-side">
        <h1>{{stand.name}}</h1>
        <div class="description">
          <p>{{stand.description_fr}}</p>
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
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Type d'article</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in availableProducts" :key="index">
            <td>{{ item.name_fr }}</td>
            <td>{{ item.price}}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ getProductType(item.id_product_type) }}</td>
            <td>
              <div class="add-btn">
                <button v-if="item.quantity !== 0" class="add-button" @click.prevent="addToCart(item)">Ajouter au panier</button>
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

.description {
  width: 20vw;
}

.image {
  margin-right: 100px;
  width:44vw;
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

tr:nth-child(even){
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

.add-button {
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

.add-button:hover {
  background-color: #6848ff;
}

.add-button:active {
  background-color: #2c1a7e; /* Couleur pour l'état actif (clic) */
}

</style>