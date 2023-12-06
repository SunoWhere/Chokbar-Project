<script>
import SideBar from '@/components/SideBar.vue';
import DashboardContentAdmin from '@/components/DashboardContentAdmin.vue';
import {usersService} from "@/services";

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
      return usersService.getUuid() !== null;
    },
    getRole() {
      return usersService.getRole();
    }
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole.toLowerCase() === 'admin'">
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