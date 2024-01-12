<template>
  <div class="pre-container">
    <div class="container">
      <div class="container-table">
        <table>
          <thead>
          <tr>
            <th>{{getLang().crud_article_stand_provider_nom}}</th>
            <th>{{getLang().crud_article_stand_provider_prix}}</th>
            <th>{{getLang().crud_article_stand_provider_quantite}}</th>
            <th>{{getLang().crud_article_stand_provider_action}}</th>
          </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name_fr }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <form>
                <button class="edit-button" @click.prevent="openEditPopup">{{getLang().crud_article_stand_provider_edit}}<i class=""></i></button>
                <button class="delete-button" @click.prevent="openRemovePopup(product.id)">{{getLang().crud_article_stand_provider_delete}}<i class=""></i>
                </button>
              </form>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="add-btn">
      <button class="add-button" @click="openAddPopup">{{getLang().crud_article_stand_provider_add}}<i class=""></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudProviderArticle',
  data() {
    return {
      products: [
        {
          id_product: 1,
          price: 60.31,
          quantity: 56,
          id_stand: 7,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 1',
          description_fr: 'Description en français 1',
          name_en: 'Product 1',
          name_fr: 'Produit 1'
        },
        {
          id_product: 2,
          price: 63.7,
          quantity: 77,
          id_stand: 3,
          id_product_type: 5,
          id_product_state: 3,
          description_en: 'Description in English 2',
          description_fr: 'Description en français 2',
          name_en: 'Product 2',
          name_fr: 'Produit 2'
        },
        {
          id_product: 3,
          price: 54.67,
          quantity: 3,
          id_stand: 10,
          id_product_type: 5,
          id_product_state: 1,
          description_en: 'Description in English 3',
          description_fr: 'Description en français 3',
          name_en: 'Product 3',
          name_fr: 'Produit 3'
        },
        {
          id_product: 4,
          price: 38.87,
          quantity: 52,
          id_stand: 10,
          id_product_type: 4,
          id_product_state: 3,
          description_en: 'Description in English 4',
          description_fr: 'Description en français 4',
          name_en: 'Product 4',
          name_fr: 'Produit 4'
        },
        {
          id_product: 5,
          price: 9.99,
          quantity: 88,
          id_stand: 2,
          id_product_type: 1,
          id_product_state: 2,
          description_en: 'Description in English 5',
          description_fr: 'Description en français 5',
          name_en: 'Product 5',
          name_fr: 'Produit 5'
        },
        {
          id_product: 6,
          price: 9,
          quantity: 51,
          id_stand: 3,
          id_product_type: 3,
          id_product_state: 3,
          description_en: 'Description in English 6',
          description_fr: 'Description en français 6',
          name_en: 'Product 6',
          name_fr: 'Produit 6'
        },
        {
          id_product: 7,
          price: 10.64,
          quantity: 44,
          id_stand: 9,
          id_product_type: 1,
          id_product_state: 1,
          description_en: 'Description in English 7',
          description_fr: 'Description en français 7',
          name_en: 'Product 7',
          name_fr: 'Produit 7'
        },
        {
          id_product: 8,
          price: 6.52,
          quantity: 84,
          id_stand: 8,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 8',
          description_fr: 'Description en français 8',
          name_en: 'Product 8',
          name_fr: 'Produit 8'
        },
        {
          id_product: 9,
          price: 20.03,
          quantity: 67,
          id_stand: 7,
          id_product_type: 2,
          id_product_state: 3,
          description_en: 'Description in English 9',
          description_fr: 'Description en français 9',
          name_en: 'Product 9',
          name_fr: 'Produit 9'
        },
        {
          id_product: 10,
          price: 60.1,
          quantity: 33,
          id_stand: 2,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 10',
          description_fr: 'Description en français 10',
          name_en: 'Product 10',
          name_fr: 'Produit 10'
        },
        {
          id_product: 11,
          price: 57.89,
          quantity: 20,
          id_stand: 9,
          id_product_type: 2,
          id_product_state: 1,
          description_en: 'Description in English 11',
          description_fr: 'Description en français 11',
          name_en: 'Product 11',
          name_fr: 'Produit 11'
        },
        {
          id_product: 12,
          price: 11.09,
          quantity: 88,
          id_stand: 5,
          id_product_type: 3,
          id_product_state: 1,
          description_en: 'Description in English 12',
          description_fr: 'Description en français 12',
          name_en: 'Product 12',
          name_fr: 'Produit 12'
        },
        {
          id_product: 13,
          price: 94.33,
          quantity: 12,
          id_stand: 10,
          id_product_type: 2,
          id_product_state: 2,
          description_en: 'Description in English 13',
          description_fr: 'Description en français 13',
          name_en: 'Product 13',
          name_fr: 'Produit 13'
        },
        {
          id_product: 14,
          price: 9.44,
          quantity: 69,
          id_stand: 3,
          id_product_type: 4,
          id_product_state: 2,
          description_en: 'Description in English 14',
          description_fr: 'Description en français 14',
          name_en: 'Product 14',
          name_fr: 'Produit 14'
        },
        {
          id_product: 15,
          price: 36.52,
          quantity: 16,
          id_stand: 6,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 15',
          description_fr: 'Description en français 15',
          name_en: 'Product 15',
          name_fr: 'Produit 15'
        },
        {
          id_product: 16,
          price: 94.8,
          quantity: 43,
          id_stand: 2,
          id_product_type: 2,
          id_product_state: 1,
          description_en: 'Description in English 16',
          description_fr: 'Description en français 16',
          name_en: 'Product 16',
          name_fr: 'Produit 16'
        },
        {
          id_product: 17,
          price: 50.37,
          quantity: 8,
          id_stand: 4,
          id_product_type: 3,
          id_product_state: 3,
          description_en: 'Description in English 17',
          description_fr: 'Description en français 17',
          name_en: 'Product 17',
          name_fr: 'Produit 17'
        },
        {
          id_product: 18,
          price: 14.55,
          quantity: 2,
          id_stand: 10,
          id_product_type: 4,
          id_product_state: 1,
          description_en: 'Description in English 18',
          description_fr: 'Description en français 18',
          name_en: 'Product 18',
          name_fr: 'Produit 18'
        },
        {
          id_product: 19,
          price: 87.43,
          quantity: 20,
          id_stand: 5,
          id_product_type: 2,
          id_product_state: 1,
          description_en: 'Description in English 19',
          description_fr: 'Description en français 19',
          name_en: 'Product 19',
          name_fr: 'Produit 19'
        },
        {
          id_product: 20,
          price: 23.51,
          quantity: 47,
          id_stand: 5,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 20',
          description_fr: 'Description en français 20',
          name_en: 'Product 20',
          name_fr: 'Produit 20'
        },
        {
          id_product: 21,
          price: 73.95,
          quantity: 81,
          id_stand: 3,
          id_product_type: 1,
          id_product_state: 1,
          description_en: 'Description in English 21',
          description_fr: 'Description en français 21',
          name_en: 'Product 21',
          name_fr: 'Produit 21'
        },
        {
          id_product: 22,
          price: 79.61,
          quantity: 20,
          id_stand: 10,
          id_product_type: 4,
          id_product_state: 3,
          description_en: 'Description in English 22',
          description_fr: 'Description en français 22',
          name_en: 'Product 22',
          name_fr: 'Produit 22'
        },
        {
          id_product: 23,
          price: 11.11,
          quantity: 91,
          id_stand: 4,
          id_product_type: 1,
          id_product_state: 3,
          description_en: 'Description in English 23',
          description_fr: 'Description en français 23',
          name_en: 'Product 23',
          name_fr: 'Produit 23'
        },
        {
          id_product: 24,
          price: 13.32,
          quantity: 53,
          id_stand: 7,
          id_product_type: 1,
          id_product_state: 1,
          description_en: 'Description in English 24',
          description_fr: 'Description en français 24',
          name_en: 'Product 24',
          name_fr: 'Produit 24'
        },
        {
          id_product: 25,
          price: 86.26,
          quantity: 45,
          id_stand: 3,
          id_product_type: 5,
          id_product_state: 3,
          description_en: 'Description in English 25',
          description_fr: 'Description en français 25',
          name_en: 'Product 25',
          name_fr: 'Produit 25'
        },
        {
          id_product: 26,
          price: 32.98,
          quantity: 76,
          id_stand: 10,
          id_product_type: 4,
          id_product_state: 1,
          description_en: 'Description in English 26',
          description_fr: 'Description en français 26',
          name_en: 'Product 26',
          name_fr: 'Produit 26'
        },
        {
          id_product: 27,
          price: 95.73,
          quantity: 5,
          id_stand: 10,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 27',
          description_fr: 'Description en français 27',
          name_en: 'Product 27',
          name_fr: 'Produit 27'
        },
        {
          id_product: 28,
          price: 2.9,
          quantity: 18,
          id_stand: 2,
          id_product_type: 2,
          id_product_state: 3,
          description_en: 'Description in English 28',
          description_fr: 'Description en français 28',
          name_en: 'Product 28',
          name_fr: 'Produit 28'
        },
        {
          id_product: 29,
          price: 92.87,
          quantity: 39,
          id_stand: 3,
          id_product_type: 1,
          id_product_state: 3,
          description_en: 'Description in English 29',
          description_fr: 'Description en français 29',
          name_en: 'Product 29',
          name_fr: 'Produit 29'
        },
        {
          id_product: 30,
          price: 32.6,
          quantity: 81,
          id_stand: 4,
          id_product_type: 5,
          id_product_state: 3,
          description_en: 'Description in English 30',
          description_fr: 'Description en français 30',
          name_en: 'Product 30',
          name_fr: 'Produit 30'
        },
        {
          id_product: 31,
          price: 50.69,
          quantity: 64,
          id_stand: 6,
          id_product_type: 5,
          id_product_state: 2,
          description_en: 'Description in English 31',
          description_fr: 'Description en français 31',
          name_en: 'Product 31',
          name_fr: 'Produit 31'
        },
        {
          id_product: 32,
          price: 50.75,
          quantity: 28,
          id_stand: 10,
          id_product_type: 2,
          id_product_state: 2,
          description_en: 'Description in English 32',
          description_fr: 'Description en français 32',
          name_en: 'Product 32',
          name_fr: 'Produit 32'
        },
        {
          id_product: 33,
          price: 70.55,
          quantity: 63,
          id_stand: 5,
          id_product_type: 4,
          id_product_state: 2,
          description_en: 'Description in English 33',
          description_fr: 'Description en français 33',
          name_en: 'Product 33',
          name_fr: 'Produit 33'
        },
        {
          id_product: 34,
          price: 58.59,
          quantity: 57,
          id_stand: 6,
          id_product_type: 3,
          id_product_state: 3,
          description_en: 'Description in English 34',
          description_fr: 'Description en français 34',
          name_en: 'Product 34',
          name_fr: 'Produit 34'
        },
        {
          id_product: 35,
          price: 98.85,
          quantity: 64,
          id_stand: 6,
          id_product_type: 4,
          id_product_state: 1,
          description_en: 'Description in English 35',
          description_fr: 'Description en français 35',
          name_en: 'Product 35',
          name_fr: 'Produit 35'
        },
        {
          id_product: 36,
          price: 89.92,
          quantity: 55,
          id_stand: 4,
          id_product_type: 3,
          id_product_state: 2,
          description_en: 'Description in English 36',
          description_fr: 'Description en français 36',
          name_en: 'Product 36',
          name_fr: 'Produit 36'
        },
        {
          id_product: 37,
          price: 45.66,
          quantity: 39,
          id_stand: 3,
          id_product_type: 5,
          id_product_state: 2,
          description_en: 'Description in English 37',
          description_fr: 'Description en français 37',
          name_en: 'Product 37',
          name_fr: 'Produit 37'
        },
        {
          id_product: 38,
          price: 68.87,
          quantity: 36,
          id_stand: 10,
          id_product_type: 1,
          id_product_state: 2,
          description_en: 'Description in English 38',
          description_fr: 'Description en français 38',
          name_en: 'Product 38',
          name_fr: 'Produit 38'
        },
        {
          id_product: 39,
          price: 86.92,
          quantity: 48,
          id_stand: 4,
          id_product_type: 1,
          id_product_state: 2,
          description_en: 'Description in English 39',
          description_fr: 'Description en français 39',
          name_en: 'Product 39',
          name_fr: 'Produit 39'
        },
        {
          id_product: 40,
          price: 86.34,
          quantity: 87,
          id_stand: 10,
          id_product_type: 1,
          id_product_state: 1,
          description_en: 'Description in English 40',
          description_fr: 'Description en français 40',
          name_en: 'Product 40',
          name_fr: 'Produit 40'
        }
      ]
    }
  },

  computed: {
    filteredItems() {
      console.log('filteredItems:', this.products);
      return this.products.map(article => ({
        visibleColumns: Object.fromEntries(Object.entries(article).slice(2)),
        name_article: article.name_fr,
      }));
    }
  },
  methods: {
    openAddPopup() {
      this.$store.commit("setShowAddArticlePopup", true);
    },
    openRemovePopup(id) {
      this.$store.commit("setArticleToRemove", id);
      this.$store.commit("setShowRemoveArticlePopup", true);
    },
    openEditPopup() {
      this.$store.commit("setShowEditArticlePopup", true);
    },
    getLang() {
      return this.$store.state.lang;
    },
  },
}
</script>

<style scoped>
body {
  background-color: lightgray;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
}

tr:nth-child(even) {
  background-color: var(--component-background);
}

td {
  text-align: center;
  padding: 5px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

td:nth-child(1) {
  border: none;
}

thead {
  background-color: var(--primary);
  color: var(--white);
  height: 30px;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60vw;
  height: 50vh;
  transform: translate(-35%, -50%);
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.container-table {
  border-radius: 5px;
}


.add-button {
  width: 100px;
  height: 40px;
  background-color: var(--crud-vert);
  border: none;
  color: white;
  padding: 5px 5px;
  margin-top: 100px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#add-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.delete-button {
  background-color: var(--crud-rouge);
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: var(--crud-bleu);
  margin-right: 10px;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: var(--btn-green-hover);
}

.edit-button:hover {
  background-color: rgb(0, 82, 159);
}

.delete-button:hover {
  background-color: #D20000FF;
}
</style>