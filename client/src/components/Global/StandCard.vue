<script>

export default {
  name: 'StandCard',
  props: {
    stand: {
      type: Object,
      required: true
    }
  },
  methods: {

  },
  computed: {
    getStoredLang() {
      const storedLang = localStorage.getItem('lang');
      if(storedLang) {
        return storedLang;
      }
      return 'FR';
    }
  },
  mounted() {

  }
}
</script>

<template>
  <router-link :to="{ name:'BoutiqueStand', params: {id:stand.id_stand} }">
    <div class="global-card">
      <div class="image-stand"></div>
      <div class="stand-title">
        <h1>{{stand.name}}</h1>
      </div>
      <div class="content-card">
        <p>{{stand.id_stand_type_stand_type.name}}</p>
        <p v-if="'EN' === $store.state.lang_name">{{ stand.description_en }}</p>
        <p v-else>{{ stand.description_fr }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.global-card {
  color: var(--white);
  width: 300px;
  height: 500px;
  background-color: white;
  border-radius: 7px 25px 7px;
  margin: 50px 25px 20px;
  transition: transform ease-in-out 0.5s;
}

.global-card:hover {
  transform: scale(1.07);
  box-shadow: 0px 0px 25px -2px rgba(255, 255, 255, 0.6);
}

.image-stand {
  width: 100%;
  height: 60%;
  background-image: url("@/assets/placeholder.png");
  background-position: center;
  border-radius: 6px 24px 0 0;
}

.stand-title {
  text-align: center;
  width: 100%;
}

h1 {
  font-size: 1.5em;
  color: black;
}

p {
  color: black;
}

.content-card {
  padding-left: 10px;
  padding-right: 10px;
}

</style>