<script setup>
import SideBar from '@/components/Sidebar.vue';
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'DashboardView',
  components: {
    SideBar
  },
  metaInfo() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<template>
  <div>
    <NavBar/>
    <div class="dashboard-container">
      <SideBar />
      <DashboardContent />
    </div>
  </div>
</template>

<style scoped>



</style>