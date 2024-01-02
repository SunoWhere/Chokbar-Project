<script>
import SideBar from "@/components/Global/SideBar.vue";
import CrudAdminProviders from "@/components/Admin/UsersCrudTable.vue";


export default {
  name: 'CrudProvidersView',
  data () {
    return {
      tableColumns: ["Nom", "Prenom", "Entreprise"],
      providers: [
        {
          name: "Jean",
          Prenom: "lasalle",
          Entreprise: "Asus",
        },
        {
          name: "Marc",
          Prenom: "Dupond",
          Entreprise: "MSI",
        },
        {
          name: "Murielle",
          Prenom: "Ducoin",
          Entreprise: "Eva",
        },
      ],

    }
  },
  components: {
    CrudAdminProviders,
    SideBar
  },
  metaInfo() {
    return {
      title: 'CrudProviders'
    }
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    }
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole === 'admin'">
      <CrudAdminProviders :column-names="tableColumns" :items="providers"/>
    </div>
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