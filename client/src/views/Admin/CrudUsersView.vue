<script>
import SideBar from "@/components/Global/SideBar.vue";
import {usersService} from "@/services";
import AddUserPopup from "@/components/Admin/Users/AddUserPopup.vue";
import RemoveUserPopup from "@/components/Admin/Users/RemoveUserPopup.vue";
import EditUserPopup from "@/components/Admin/Users/EditUserPopup.vue";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'CrudProvidersView',
  data () {
    return {
      users: []
    }
  },
  created() {
    this.allUsers();

    this.$store.watch(
        () => this.$store.getters.getUserList,
        userList => {
          this.users = userList.map(user => [user.uuid_user, user.password, user.first_name, user.last_name, user.email, this.getRoleLabel(user.id_role)]);
        }
    );
  },
  mounted() {

  },
  components: {
    AddUserPopup,
    RemoveUserPopup,
    EditUserPopup,
    SideBar,
  },
  metaInfo() {
    return {
      title: 'CrudUsers'
    }
  },
  methods: {
    ...mapActions(['updateUserList']),
    ...mapMutations(['setShowAddUserPopup',
                     'setUserIdToRemove',
                     'setShowRemoveUserPopup',
                     'setUserToEdit',
                     'setShowEditUserPopup']),
    async allUsers() {
      try {
        const res = await usersService.getAllUser();
        this.users = res.data.map(user => [user.uuid_user, user.password, user.first_name, user.last_name, user.email, this.getRoleLabel(user.id_role)]);
      } catch (error) {
        console.log(error);
      }
    },
    getRoleLabel(idRole) {
      switch (idRole) {
        case 1:
          return 'Client';
        case 2:
          return 'Provider';
        case 3:
          return 'Admin';
        default:
          return '';
      }
    },
    async removeUser() {
      const userId = this.userIdToRemove;
      console.log(userId)
      try {
        await usersService.removeUser(userId);
        await this.updateUserList(await usersService.getAllUser());
      } catch (error) {
        console.error(error);
      }
    },
    openAddPopup() {
      this.setShowAddUserPopup(true);
    },
    openRemovePopup(id) {
      this.setUserIdToRemove(id);
      this.setShowRemoveUserPopup(true);
    },
    openEditPopup(user) {
      this.setUserToEdit(user);
      this.setShowEditUserPopup(true);
    },
  },
  computed: {
    ...mapState([ 'isConnected', 'role', 'userIdToRemove']),
    filteredItems() {
      const usersCopy = [...this.users];
      return usersCopy.map(item => ({
        visibleColumns: item.slice(2),
        uuid_user: item[0],
        password: item[1]
      }));
    },
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && (role === 'admin')">
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
    </div>
    <AddUserPopup :typeTitle="'Users'" />
    <RemoveUserPopup :typeTitle="'Users'" @confirmed-deletion="removeUser" />
    <EditUserPopup :typeTitle="'Users'" />
  </div>
</template>

<style >

.dashboard-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

#dc {
  width: 100%;
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
