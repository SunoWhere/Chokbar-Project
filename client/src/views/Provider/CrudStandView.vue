<template>
  <div class="dashboard-container">
    <sideBar/>
    <div id="dc" v-if="isConnected && getRole === 'provider'">
      <CrudProviderStands v-if="StandId" :stands="StandId"/>
    </div>
   <EditStandPopup :stands="StandId" @standEdited="getConnectedProviderStands"/>
  </div>
</template>

<script>
import {standsService} from "@/services";
import CrudProviderStands from "@/components/Provider/ProviderStandsTable.vue";
import EditStandPopup from "@/components/Provider/ProviderPopup/EditStandPopUp.vue";
import SideBar from "@/components/Global/SideBar.vue";

export default {
  name: 'CrudStandView',
  components: {
    CrudProviderStands,
    SideBar,
    EditStandPopup,
  },
  data() {
    return {
      providerStands: [],
      StandId: [],
      selectedStand: null,
    };
  },
  created() {
    this.getConnectedProviderStands();
  },

  methods: {
    async getConnectedProviderStands() {
      try {
        const providers = await standsService.getProvider();
        const uuid = standsService.getUuid(); // Assuming this returns the uuid of the connected provider
        const connectedProvider = providers.find(provider => provider.uuid_user === uuid);
        if (connectedProvider) {
          this.providerStands = connectedProvider.stand_ids;
          const standDetailsPromises = this.providerStands.map(standId => standsService.getStandById(standId));
          const standDetails = await Promise.all(standDetailsPromises);
          this.StandId = standDetails.map(stand => ({
            id: stand.id,
            name: stand.name,
            description_fr: stand.description_fr,
            description_en: stand.description_en,
          }));
        } else {
          console.log('No provider found with the connected uuid');
        }
        console.log("providerStands", this.providerStands);
      } catch (error) {
        console.error(error);
      }
    }
  },

  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
  }
}
</script>

<style scoped>
.dashboard-container {
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
}

#dc {
  width: 100%;
}
</style>