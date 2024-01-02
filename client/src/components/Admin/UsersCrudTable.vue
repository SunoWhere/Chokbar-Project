<script>

import {usersService} from "@/services";

export default {
  name: 'CrudTable',
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
    items: {
      type: Array,
      required: true,
    }
  },
  computed: {
    showPopup() {
      return this.$store.state.showAddUserPopup;
    },
    filteredItems() {
      return this.items.map(item => ({
        visibleColumns: item.slice(1),
        uuid_user: item[0],
      }));
    },
  },
  methods: {
    openPopup() {
      console.log("crud table: " + this.showPopup)
      this.$store.commit("setShowAddUserPopup", true);
    },
    closePopup() {
      this.$store.commit("setShowAddUserPopup", false);
    },
    async removeUser(userId) {
      console.log(userId);
      try {
        await usersService.removeUser(userId);
        this.$store.dispatch('updateUserList', await usersService.getAllUser());
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<template>
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
          <tr v-for="(filteredItem, index) in filteredItems" :key="index">
            <td v-for="(value, columnIndex) in filteredItem.visibleColumns" :key="columnIndex">{{ value }}</td>
            <td>
              <form>
                <button class="edit-button">Editer<i class=""></i></button>
                <button class="delete-button" @click.prevent="removeUser(filteredItem.uuid_user)">Supprimer<i class=""></i></button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="add-btn">
      <button class="add-button" @click="openPopup">Ajouter<i class=""></i></button>
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
  text-align: center;
  padding: 5px;
  //border-left: 1px solid var(--component-background);
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
  transform: translate(-35%, -50%);
  background-color:white;
  border-radius: 10px;
  max-height: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.container-table{
  border-radius: 5px;
}


.add-button{
  width: fit-content;
  background-color: var(--crud-vert);
  border: none;
  color: white;
  padding: 5px 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
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
}

.edit-button{
  background-color: var(--crud-vert);
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
}

.add-button:hover{
  background-color: var(--btn-green-hover);
}

.edit-button:hover{
  background-color: var(--btn-green-hover);
}

.delete-button:hover{
  background-color: var(--scnd2);
}

</style>