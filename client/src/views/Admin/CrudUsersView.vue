<script>
import SideBar from "@/components/Global/SideBar.vue";
import CrudTable from "@/components/Admin/UsersCrudTable.vue";
import {usersService} from "@/services";
import AddUserPopup from "@/components/Admin/UsersPopup/AddUserPopup.vue";
import RemoveUserPopup from "@/components/Admin/UsersPopup/RemoveUserPopup.vue";
import EditUserPopup from "@/components/Admin/UsersPopup/EditUserPopup.vue";

//FIXME: Doit-on voir tous les utilisateurs (admin et providers inclut) ou seulements les users

export default {
  name: 'CrudProvidersView',
  data () {
    return {
      tableColumns: ["Nom", "Prenom", "Email", "Rôle"],
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
  components: {
    AddUserPopup,
    RemoveUserPopup,
    EditUserPopup,
    CrudTable,
    SideBar,
  },
  metaInfo() {
    return {
      title: 'CrudUsers'
    }
  },
  methods: {
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
      const userId = this.$store.state.userIdToRemove;
      try {
        await usersService.removeUser(userId);
        await this.$store.dispatch('updateUserList', await usersService.getAllUser());
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
    usersClientList() {
      return this.users.filter(user => (user[5] !== 'Admin' && user[5] !== 'Provider'));
    },
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole === 'admin'">
      <CrudTable :column-names="tableColumns" :items="usersClientList"/>
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

</style>