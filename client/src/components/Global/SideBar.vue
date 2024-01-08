<template>
  <div id="links-contener">
    <router-link v-for="link in links" :key="link.route" :to="link.route">
      <div class="link">
        {{ link.label }}
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  methods: {
    getRole() {
      return this.$store.state.role;
    }
  },
  computed: {
    links() {
      if (this.getRole() === 'admin') {
        return [
          { label: 'Utilisateurs', route:  '/admin/user' },
          { label: 'Intervenants', route: '/Admin/Intervenants' },
          { label: 'Produits', route: '/admin/produits' },
          { label: 'Calendrier', route: '/admin/calendrier' }
        ];
      }
      if (this.getRole() === 'provider') {
        return [
          { label: 'Stands', route: '/intervenant/stands' },
          { label: 'Produits', route: '/intervenant/produits' },
          { label: 'Events', route: '/intervenant/events'},
        ];
      }
      return [];
    }
  }
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