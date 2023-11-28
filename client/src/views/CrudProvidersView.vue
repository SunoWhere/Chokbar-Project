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
  <section>
    <SideBar :user-type="this.selectedRole"/>
    <div v-if="this.selectedRole === '1'">
      <div id="crud-providers-container">

      </div>
    </div>
  </section>
</template>

<style scoped>

#crud-providers-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

</style>