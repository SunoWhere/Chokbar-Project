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
  props: {
    userType: {
      type: String,
      required: true
    }
  },
  computed: {
    links() {
      console.log(this.userType);
      if (this.userType === '2') {
        return [
          { label: 'User', route: '/admin/user' },
          { label: 'Intervenants', route: '/admin/intervenants' },
          { label: 'Produits', route: '/admin/produits' },
          { label: 'Calendrier', route: '/admin/calendrier' }
        ];
      } else if (this.userType === '1') {
        return [
          { label: 'Produits', route: '/intervenant/produits' },
          { label: 'Stands', route: '/intervenant/stands' },
          { label: 'Events', route: '/intervenant/events'},
        ];
      } else {
        return [];
      }
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