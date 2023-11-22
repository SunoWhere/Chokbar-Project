<template>
  <div>
    <router-link v-for="link in links" :key="link.route" :to="link.route">
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    userType: {
      type: String,
      required: true
    }
  },
  computed: {
    links() {
      // Définissez les liens en fonction du type d'utilisateur
      if (this.userType === 'admin') {
        return [
          { label: 'User', route: '/admin/user' },
          { label: 'Intervenants', route: '/admin/intervenants' },
          { label: 'Produits', route: '/admin/produits' },
          { label: 'Calendrier', route: '/admin/calendrier' }
        ];
      } else if (this.userType === 'intervenant') {
        return [
          { label: 'User', route: '/intervenant/user' },
          { label: 'Produits', route: '/intervenant/produits' },
          { label: 'Calendrier', route: '/intervenant/calendrier' }
        ];
      } else {
        // Gérez d'autres types d'utilisateurs si nécessaire
        return [];
      }
    }
  }
};
</script>

<style>
/* Ajoutez vos styles ici */
</style>