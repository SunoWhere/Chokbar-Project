<script>
import SideBar from "@/components/SideBar.vue";
import CrudTable from "@/components/CrudTable.vue";
import {usersService} from "@/services";
import AddPopup from "@/components/AddPopup.vue";


export default {
  name: 'CrudProvidersView',
  data () {
    return {
      tableColumns: ["Nom", "Prenom", "Rôle"],
      users: []
    }
  },
  created() {
    this.allUsers();
  },
  components: {
    AddPopup,
    CrudTable,
    SideBar
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
        this.users = res.data.map(user => [user.first_name, user.last_name, this.getRoleLabel(user.id_role)]);
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
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole === 'admin'">
      <CrudTable :column-names="tableColumns" :items="users"/>
    </div>
    <AddPopup/>
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