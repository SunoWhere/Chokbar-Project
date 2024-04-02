<script>
import SideBar from "@/components/Global/SideBar.vue";
import CrudTable from "@/components/Admin/Stands/StandsCrudTable.vue";
import {standsService} from "@/services";
import AddStandPopup from "@/components/Admin/Stands/AddStandPopup.vue";
import RemoveStandPopup from "@/components/Admin/Stands/RemoveStandPopup.vue";
import EditStandPopup from "@/components/Admin/Stands/EditStandPopup.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: 'CrudStandsView',
  created() {
    this.updateStandList();
  },
  components: {
    AddStandPopup,
    RemoveStandPopup,
    EditStandPopup,
    CrudTable,
    SideBar,
  },
  metaInfo() {
    return {
      title: 'CrudUsers'
    }
  },
  methods: {
    ...mapActions(['updateStandList']),
    async removeStand() {
      const standId = this.$store.state.standIdToRemove;
      try {
        this.$store.commit('removeStandsProduct', {id_stand: standId });
        await standsService.removeStand(standId);
        await this.updateStandList();
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapState(['stands']),
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
      <CrudTable/>
    </div>
    <AddStandPopup :typeTitle="'Stands'" />
    <RemoveStandPopup :typeTitle="'Stands'" @confirmed-deletion="removeStand" />
    <EditStandPopup :typeTitle="'Stands'" />
  </div>
</template>

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
