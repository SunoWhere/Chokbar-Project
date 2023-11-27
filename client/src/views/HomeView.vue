<script>
import Banderole from '@/components/Banderole.vue';

export default {
  name: 'HomeView',
  components: {
    Banderole,
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
    <Banderole/>
    <div id="title-container">
      <div id="title">
        <h1>LA CONFERENCE DU JEU VIDÉO</h1>
        <p id="subtitle">Inscrit toi dès maintenant</p>
      </div>
    </div>
    <div id="first-background-container">

    </div>
  </div>
</template>

<style>
.home {
  height: 100vh;
  text-align: center;
  font-size: 40px;
}

#first-background-container {
  height: 80vh;
  background-image: url(../assets/p1.png);
}

h1 {
  font-size: 1.2em;
}

#subtitle {
  font-size: 0.7em;
}

#title {
  text-align: left;
}

#title-container {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>