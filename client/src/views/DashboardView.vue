<script>
import SideBar from '@/components/SideBar.vue';
import DashboardContentAdmin from '@/components/DashboardContentAdmin.vue';

export default {
  name: 'DashboardView',
  components: {
    SideBar,
    DashboardContentAdmin
  },
  metaInfo() {
    return {
      title: 'Dashboard'
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
      <DashboardContentAdmin/>
    </div>
  </div>
</template>

<style>

.dashboard-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

#dc {
  width: 100%;
}

</style>