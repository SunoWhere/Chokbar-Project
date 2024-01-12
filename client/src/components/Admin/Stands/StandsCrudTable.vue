<script>

export default {
  name: 'StandsCrudTable',
  components: {

  },
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  computed: {
    showAddPopup() {
      return this.$store.state.showAddUserPopup;
    },
  },
  methods: {
    getLang() {
      return this.$store.state.lang;
    },
    openAddPopup() {
      this.$store.commit("setShowAddUserPopup", true);
    },
    openRemovePopup(id) {
      this.$store.commit("setStandIdToRemove", id);
      this.$store.commit("setShowRemoveUserPopup", true);
    },
    openEditPopup(user) {
      this.$store.commit("setUserToEdit", user);
      this.$store.commit("setShowEditUserPopup", true);
    },
  },
  mounted() {

  }
};
</script>

<template>
  <div class="pre-container">
    <div class="container">
      <div class="container-table">
        <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>{{getLang().crud_stands_name}}</th>
            <th>{{getLang().crud_stands_provider}}</th>
            <th>{{getLang().crud_stands_location}}</th>
            <th>{{getLang().crud_stands_nb_product}}</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{item.id_stand}}</td>
            <td>{{item.name}}</td>
            <td>{{item.id_provider}}</td>
            <td>{{ item.id_location_location.code }}</td>
            <td>quantité produit</td>
            <td>
              <form>
                <button class="edit-button" @click.prevent="openEditPopup(filteredItem)">{{getLang().btn_edit}}<i class=""></i></button>
                <button class="delete-button" @click.prevent="openRemovePopup(item.id_stand)">{{getLang().btn_delete}}<i class=""></i></button>
              </form>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="add-btn">
      <button class="add-button" @click="openAddPopup">{{getLang().btn_add}}<i class=""></i></button>
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
  width: 60vw;
  height: 50vh;
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
  background-color: #D20000FF;
}
</style>