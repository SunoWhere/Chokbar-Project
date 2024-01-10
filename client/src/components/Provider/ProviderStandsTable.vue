<template>
  <div class="pre-container">
    <div class="container">
      <div class="container-table">
        <table>
          <thead>
          <tr>
            <th>Stand</th>
            <th>Boutique</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
          <tr v-for="stand in stands" :key="stand.id">
            <td>{{ stand.name }}</td>
            <td>
              <button class="edit-button" @click="viewArticles(stand)">View Articles</button>
            </td>
            <td>
              <form>
                <button class="edit-button" @click.prevent="openEditPopup(filteredItems)">Editer<i class=""></i>
                </button>
              </form>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudProviderStands',
  props: {
    stands: {
      type: Array,
      required: true,
    }
  },
  items: {
    type: Array,
    required: true,
  },
  computed: {
    filteredItems() {
      console.log('filteredItems:', this.stands);
      return this.stands.map(stand => ({
        visibleColumns: Object.fromEntries(Object.entries(stand).slice(2)),
        name_stand: stand.name,
      }));
    },
  },
  methods: {
    viewArticles(stand) {
      this.$emit('view-articles', stand);
    },
    openEditPopup(stand) {
      this.$store.commit("setStandToEdit", stand);
      this.$store.commit("setShowEditStandPopup", true);
    }
  }
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
  //border-left: 1px solid var(--component-background);
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
  width: 50%;
  height: 50%;
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

.edit-button:hover {
  background-color: rgb(0, 82, 159);
}
</style>