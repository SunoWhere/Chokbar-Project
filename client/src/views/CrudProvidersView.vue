<script>
import SideBar from "@/components/SideBar.vue";


export default {
  name: 'CrudProvidersView',
  components: {
    SideBar
  },
  metaInfo() {
    return {
      title: 'CrudProviders'
    }
  },
  computed: {
    selectedRole() {
      return this.$store.state.selectedRole;
    }
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar :user-type="selectedRole"/>
    <div id="dc" v-if="selectedRole === '2'">
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