<template>
  <div class="dashboard-container">
    <sideBar/>
    <div id="dc" v-if="isConnected && getRole === 'provider'">
      <CrudProviderArticle products="products"/>
    </div>
    <AddStandArticlePopUp :typeTitle="'Article'" />
    <RemoveStandArticlePopUp :typeTitle="'Article'"/>
    <EditStandPopup :typeTitle="'Article'" />
  </div>
</template>

<script>
//import {standsService} from "@/services";
import CrudProviderArticle from "@/components/Provider/ProviderArticleTable.vue";
import SideBar from "@/components/Global/SideBar.vue";
import AddStandArticlePopUp from "@/components/Provider/ProviderPopup/AddStandArticlePopUp.vue";
import RemoveStandArticlePopUp from "@/components/Provider/ProviderPopup/RemoveStandArticlePopUp.vue";
import EditStandPopup from "@/components/Provider/ProviderPopup/EditStandPopUp.vue";


export default {
  name: 'CrudArticleStandView',
  components: {
    EditStandPopup,
    RemoveStandArticlePopUp,
    AddStandArticlePopUp,
    CrudProviderArticle,
    SideBar,
  },
  data() {
    return {
      standArticles: [],
    }
  },

  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
  },
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