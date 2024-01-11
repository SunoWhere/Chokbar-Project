<script>

import {usersService} from "@/services";

export default {
  name: 'ProvidersCrudTable',
  components: {

  },
  props: {
    columnNames: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every(item => typeof item === 'string');
      }
    },
    usersProviders: {
      type: Array,
      required: true,
    },
    providers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    processedProviders() {
      return this.providers.map(provider =>({
        visibleColumns: {
          id: provider[0],
          name: provider[1],
          mail: provider[2]
        },
        uuid_user: provider[3],
        description_en: provider[5],
        description_fr: provider[4]
      }));
    }
  },
  methods: {
    openNewClientOrNotPopup() {
      this.$store.commit("setShowNewClientOrNotPopup", true);
    },
    openRemovePopup(id) {
      this.$store.commit("setProviderIdToRemove", id);
      this.$store.commit("setShowRemoveProviderPopup", true);
    },
    openEditPopup(provider) {
      try {
        this.$store.commit("setProviderToEdit", provider);

        (async () => {
          const client = await usersService.getUserById(provider.uuid_user);
          this.$store.commit("setUserToEdit", client);
          this.$store.commit("setShowEditProviderPopup", true);
        })();
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    }
  },
};
</script>

<template>
  <div class="pre-container">
    <div class="container">
      <div class="container-table">
        <table>
          <thead>
          <tr>
            <th v-for="columnName in columnNames" :key="columnName">{{ columnName }}</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
          <tr v-for="(item, index) in processedProviders" :key="index">
            <td v-for="(value, columnIndex) in item.visibleColumns" :key="columnIndex">{{ value }}</td>
            <td>
              <form>
                <button class="edit-button" @click.prevent="openEditPopup(item)">Editer</button>
                <button class="delete-button" @click.prevent="openRemovePopup(item.visibleColumns.id)">Supprimer</button>
              </form>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="add-btn">
      <button class="add-button" @click="openNewClientOrNotPopup">Ajouter<i class=""></i></button>
    </div>
  </div>
</template>

<style scoped>

body{
  background-color:lightgray;
}

table{
  width:100%;
  border-collapse: collapse;
  border-radius: 5px;
}

tr:nth-child(even){
  background-color: var(--component-background);
}

td{
  color: black;
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

thead{
  background-color: var(--primary);
  color: var(--white);
  height: 30px;
}

.container{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-35%, -50%);
  background-color:white;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.container-table{
  border-radius: 5px;
}

.add-button{
  width: 100px;
  height: 40px;
  background-color: var(--crud-vert);
  border: none;
  color: white;
  padding: 5px 5px;
  margin-top: 80px;
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

.delete-button{
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

.edit-button{
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

.add-button:hover{
  background-color: var(--btn-green-hover);
}

.edit-button:hover{
  background-color: rgb(0, 82, 159);
}

.delete-button:hover{
  background-color: #a80000;
}
</style>