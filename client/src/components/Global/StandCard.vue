<script>

import {imagesService} from "@/services/images.service";

export default {
  name: 'StandCard',
  data() {
    return {
      imageUrl: '',
    }
  },
  props: {
    stand: {
      type: Object,
      required: true
    },
  },
  methods: {
    async getImageForStand(stand) {
      imagesService.getImageById(stand.stands_images[0].id_image).then(imageUrl => {
        this.imageUrl = imageUrl;
      }).catch(error => {
        console.error("Erreur lors de la récupération de l'image:", error);
      });
    },
  },
  computed: {

  },
  mounted() {
    this.getImageForStand(this.stand);
  },
}
</script>

<template>
  <router-link style="text-decoration: none;" :to="{ name:'BoutiqueStand', params: {id:stand.id_stand} }">
    <div class="global-card">
      <div class="image-stand" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
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
  transition: transform ease-in-out 0.5s, box-shadow ease-in-out 0.2s;
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
