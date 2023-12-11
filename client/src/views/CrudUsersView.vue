<script>
import SideBar from "@/components/SideBar.vue";
import CrudTable from "@/components/CrudTable.vue";


export default {
  name: 'CrudProvidersView',
  data () {
    return {
      tableColumns: ["Nom", "Prenom"],
      users: [
        {
          name: "Tom",
          Prenom: "SIOUAN"
        },
        {
          name: "Lucas",
          Prenom: "Da Silveira"
        },
        {
          name: "Mathys",
          Prenom: "NOURRY"
        },
      ],

    }
  },
  components: {
    CrudTable,
    SideBar
  },
  metaInfo() {
    return {
      title: 'CrudUsers'
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
      <CrudTable :column-names="tableColumns" :items="users"/>
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