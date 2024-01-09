<script>
import SideBar from "@/components/Global/SideBar.vue";
import ProvidersCrudTable from "@/components/Admin/Providers/ProvidersCrudTable.vue";
import {usersService, providersService, standsService} from "@/services";
import EditProviderPopup from "@/components/Admin/Providers/EditProviderPopup.vue";
import AddProviderPopup from "@/components/Admin/Providers/AddProviderPopup.vue";
import NewClientOrNotPopup from "@/components/Admin/Providers/NewClientOrNotPopup.vue";
import LinkClientProviderPopup from "@/components/Admin/Providers/LinkClientProviderPopup.vue";
import RemoveProviderPopup from "@/components/Admin/Providers/RemoveProviderPopup.vue";
import LinkedStandsPopup from "@/components/Admin/Providers/DeleteLinkedStandsPopup.vue";

export default {
  name: 'CrudProvidersView',
  data() {
    return {
      tableColumns: ["Id", "Nom", "Mail"],
      users: [],
      providers: [],
      providerStands: [],
    }
  },
  created() {
    this.allUsers();
    this.allProviders();

    this.$store.watch(
        () => this.$store.getters.getUserList,
        userList => {
          this.users = userList.map(user => [user.uuid_user, user.password, user.first_name, user.last_name, user.email, this.getRoleLabel(user.id_role)]);
        }
    );

    this.$store.watch(
        () => this.$store.getters.getProviderList,
        async (providerList) => {
          await (async () => {
            this.providers = await Promise.all(
                providerList.map(async (provider) => {
                  const userData = await usersService.getUserById(provider.uuid_user);
                  return [provider.id_provider, provider.name, userData.email, provider.uuid_user, provider.description_fr, provider.description_en];
                })
            );
          })();
        }
    );
  },
  components: {
    LinkedStandsPopup,
    RemoveProviderPopup,
    NewClientOrNotPopup,
    AddProviderPopup,
    EditProviderPopup,
    ProvidersCrudTable,
    LinkClientProviderPopup,
    SideBar,
  },
  metaInfo() {
    return {
      title: 'CrudUsers'
    }
  },
  methods: {
    async allUsers() {
      try {
        const res = await usersService.getAllUser();
        this.users = res.data.map(user => [user.uuid_user, user.password, user.first_name, user.last_name, user.email, this.getRoleLabel(user.id_role)]);
      } catch (error) {
        console.log(error);
      }
    },
    async allProviders() {
      try {
        const res = await providersService.getAllProvider();

        this.providers = await Promise.all(
            res.data.map(async (provider) => {
              const userData = await usersService.getUserById(provider.uuid_user);
              return [provider.id_provider, provider.name, userData.email, provider.uuid_user, provider.description_fr, provider.description_en, provider.stand_ids];
            })
        );
      } catch (error) {
        if (error.message.includes("500")) {
          await this.$store.dispatch('updateProviderList', []);
        }
        console.log(this.providers)
        console.error(error)
      }
    },
    updateStandsList(updatedStandsList) {
      this.providerStands = updatedStandsList;
    },
    getRoleLabel(idRole) {
      switch (idRole) {
        case 1:
          return 'Client';
        case 2:
          return 'Provider';
        case 3:
          return 'Admin';
        default:
          return '';
      }
    },
    async removeProvider() {
      const providerId = this.$store.state.providerIdToRemove;
      const pr = await providersService.getProviderById(providerId);
      this.providerStands = [];
      try {
        if (pr.stand_ids.length > 0) {
          for (const standId of pr.stand_ids) {
            const stand = await standsService.getStandById(standId);
            this.providerStands.push({ id: standId, name: stand.name });
          }

          this.openRemoveStandsPopup();
        } else {
          await providersService.removeProvider(providerId);
        }
        await this.$store.dispatch('updateProviderList', await providersService.getAllProvider());
      } catch (error) {
        if (error.message.includes("No provider found")) {
          this.providers = [];
        }
        console.error(error);
      }
    },
    openAddPopup() {
      this.$store.commit("setShowAddProviderPopup", true);
    },
    openSyncPopup() {
      this.$store.commit("setShowLinkClientProviderPopup", true);
    },
    openRemoveStandsPopup() {
      this.$store.commit("setShowLinkedStandsPopup", true);
    }
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
    usersProviderList() {
      const usersCopy = [...this.users];

      const sortedProviders = usersCopy.sort((a, b) => (a[2].localeCompare(b[2])));
      return sortedProviders.filter(user => user[5] !== 'Admin' && user[5] !== 'Client');
    },
    providersList() {
      const providers = [...this.providers];
      return providers.sort((a, b) => a[0] - b[0]);
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
      <ProvidersCrudTable :column-names="tableColumns" :providers="providersList" :usersProviders="usersProviderList"/>
    </div>
    <NewClientOrNotPopup :typeTitle="'Intervenants'" @new-client="openAddPopup" @sync-client-provider="openSyncPopup"/>
    <AddProviderPopup :typeTitle="'Intervenants'"/>
    <EditProviderPopup :typeTitle="'Intervenants'"/>
    <RemoveProviderPopup type-title="Intervenants" @confirmed-deletion="removeProvider"/>
    <LinkClientProviderPopup :typeTitle="'Intervenants'" :users="usersClientList"/>
    <LinkedStandsPopup :type-title="'Intervenants'" :standsList="providerStands" @updateStandsList="updateStandsList"  @standsConfirmed="removeProvider"/>
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