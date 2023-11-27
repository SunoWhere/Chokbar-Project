<script>

export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    selectedRole() {
      return this.$store.state.selectedRole;
    }
  },
  metaInfo() {
    return {
      title: 'Home'
    }
  }
}
</script>

<template>
  <div class="home">
    HOME
    {{ selectedRole }}
  </div>
</template>

<style>
.home {
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 40px;
}
</style>