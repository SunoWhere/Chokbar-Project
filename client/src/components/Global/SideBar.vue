<template>
  <div id="links-contener">
    <router-link style="text-decoration: none; color: inherit;" v-for="link in links" :key="link.route" :to="link.route">
      <div class="link">
        {{ link.label }}
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  data() {
    return {

    }
  },
  methods: {
    getRole() {
      return this.$store.state.role;
    }
  },
  computed: {
    links() {
      console.log(this.$store.state.role)
      switch (this.getRole()) {
        case 'admin':
          return [
            {label: this.getLang().sidebar_admin_users, route: '/admin/user'},
            {label: this.getLang().sidebar_admin_providers, route: '/Admin/Intervenants'},
            {label: this.getLang().sidebar_admin_stands, route: '/Admin/Stands'},
            {label: this.getLang().sidebar_admin_calandar, route: '/map'}
          ];
        case 'provider':
          return [
            {label: this.getLang().sidebar_provider_stands, route: '/intervenant/stands'},
            {label: this.getLang().sidebar_provider_products, route: '/intervenant/produits'},
            {label: this.getLang().sidebar_provider_comands, route: '/intervenant/events'},
          ];
        case 'user':
          return [
            {label: this.getLang().sidebar_user_commands, route: '/users/orders'},
          ];
        default:
          return [];
      }
    }
  },
};
</script>

<style>

#links-contener {
  background-color: var(--primary);
  width: 15%;
  height: 100%;
  padding-left: 3%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
}

.link:hover {
  color: var(--scnd3);
}

.link {
  text-decoration: none;
  color: var(--white);
  margin-bottom: 10px;
  font-size: 1.2rem;
}

</style>
