<script>
import SideBar from "@/components/SideBar.vue";
import CrudAdminProviders from "@/components/CrudAdminProviders.vue";


export default {
  name: 'CrudProvidersView',
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
      <CrudAdminProviders/>
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