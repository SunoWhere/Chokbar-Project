<template>
  <div class="dashboard-container">
    <sideBar/>
    <div id="dc" v-if="isConnected && getRole === 'provider'">
      <button @click="openEditStandPopup(selectedStand)">Edit Stand</button>
    </div>
  </div>
</template>

<script>
import {providerService} from "@/services";
import SideBar from "@/components/Global/SideBar.vue";

export default {
  name: 'CrudStandView',
  components: {
    SideBar
  },
  data() {
    return {
      providerStands: [],
      selectedStand: null,
    };
  },
  created() {
    this.loadProviderStands();
  },
  methods: {
    async loadProviderStands() {
      try {
        const response = await providerService.getProviderStands();
        this.providerStands = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openEditStandPopup(stand) {
      this.selectedStand = stand;
    },
  }
}
</script>

<style scoped>
.dashboard-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

#dc {
  width: 100%;
}
</style>