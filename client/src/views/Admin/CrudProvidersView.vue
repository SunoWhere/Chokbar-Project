<script>
import SideBar from "@/components/Global/SideBar.vue";
import ProvidersCrudTable from "@/components/Admin/Providers/ProvidersCrudTable.vue";
import {usersService, providersService} from "@/services";
import EditProviderPopup from "@/components/Admin/Providers/EditProviderPopup.vue";
import AddProviderPopup from "@/components/Admin/Providers/AddProviderPopup.vue";
import NewClientOrNotPopup from "@/components/Admin/Providers/NewClientOrNotPopup.vue";
import LinkClientProviderPopup from "@/components/Admin/Providers/LinkClientProviderPopup.vue";
import RemoveProviderPopup from "@/components/Admin/Providers/RemoveProviderPopup.vue";

export default {
  name: 'CrudProvidersView',
  data () {
    return {
      tableColumns: ["Id", "Nom", "Mail"],
      users: [],
      providers: [],
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
        providerList => {
          console.log('Provider List:', providerList);
          this.providers = providerList.map(provider => [provider.id_provider, provider.name, provider.uuid_user_user.email]);
        }
    );
  },
  components: {
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
        this.providers = res.data.map(provider => [provider.id_provider, provider.name, provider.uuid_user_user.email]);
      } catch (error) {
        console.log(error);
      }
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
      try {
        await providersService.removeProvider(providerId);
        await this.$store.dispatch('updateProviderList', await providersService.getAllProvider());
      } catch (error) {
        console.error(error);
      }
    },
    openAddPopup() {
      this.$store.commit("setShowAddProviderPopup", true);
    },
    openSyncPopup() {
      this.$store.commit("setShowLinkClientProviderPopup", true);
    },
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
    <NewClientOrNotPopup :typeTitle="'Intervenants'" @new-client="openAddPopup" @sync-client-provider="openSyncPopup" />
    <AddProviderPopup :typeTitle="'Intervenants'"/>
    <EditProviderPopup :typeTitle="'Intervenants'"/>
    <RemoveProviderPopup type-title="'Intervenants" @confirmed-deletion="removeProvider"/>
    <LinkClientProviderPopup :typeTitle="'Intervenants'" :users="usersClientList"/>
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