<script>

export default {
  name: 'UsersCrudTable',
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
    filteredItems() {
      return this.items.map(item => ({
        visibleColumns: item.slice(2),
        uuid_user: item[0],
        password: item[1]
      }));
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
      this.$store.commit("setUserIdToRemove", id);
      this.$store.commit("setShowRemoveUserPopup", true);
    },
    openEditPopup(user) {
      this.$store.commit("setUserToEdit", user);
      this.$store.commit("setShowEditUserPopup", true);
    },
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
            <th>{{getLang().crud_users_lastname}}</th>
            <th>{{getLang().crud_users_firstname}}</th>
            <th>{{getLang().crud_users_email}}</th>
            <th>{{getLang().crud_users_role}}</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
          <tr v-for="(filteredItem, index) in filteredItems" :key="index">
            <td v-for="(value, columnIndex) in filteredItem.visibleColumns" :key="columnIndex">{{ value }}</td>
            <td>
              <form>
                <button class="edit-button" @click.prevent="openEditPopup(filteredItem)">{{getLang().btn_edit}}<i class=""></i></button>
                <button class="delete-button" @click.prevent="openRemovePopup(filteredItem.uuid_user)">{{getLang().btn_delete}}<i class=""></i></button>
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