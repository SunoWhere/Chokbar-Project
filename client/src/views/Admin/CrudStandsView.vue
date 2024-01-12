<script>
import SideBar from "@/components/Global/SideBar.vue";
import CrudTable from "@/components/Admin/Stands/StandsCrudTable.vue";
import {standsService} from "@/services";
import AddStandPopup from "@/components/Admin/Stands/AddStandPopup.vue";
import RemoveStandPopup from "@/components/Admin/Stands/RemoveStandPopup.vue";
import EditStandPopup from "@/components/Admin/Stands/EditStandPopup.vue";

export default {
  name: 'CrudStandsView',
  data () {
    return {
      stands: []
    }
  },
  created() {
    this.getStands();
    this.$store.watch(
        () => this.$store.getters.getRealStandList,
        standList => {
          this.stands = standList;
        }
    );
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
    getLang() {
      return this.$store.state.lang;
    },
    async getStands() {
      try {
        this.stands = await standsService.getAllStands();
      } catch(error) {
        console.error(error);
      }
    },
    async removeStand() {
      const standId = this.$store.state.standIdToRemove;
      try {
        await standsService.removeStand(standId);
        await this.$store.dispatch('updateStandList', await standsService.getAllStands());
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
      const usersCopy = [...this.users];

      const sortedUsers = usersCopy.sort((a, b) => (a[2].localeCompare(b[2])));
      return sortedUsers.filter(user => user[5] !== 'Admin' && user[5] !== 'Provider');
    },
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole === 'admin'">
      <CrudTable :items="stands"/>
    </div>
    <AddStandPopup :typeTitle="'Stands'" />
    <RemoveStandPopup :typeTitle="'Stands'" @confirmed-deletion="removeStand" />
    <EditStandPopup :typeTitle="'Stands'" />
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