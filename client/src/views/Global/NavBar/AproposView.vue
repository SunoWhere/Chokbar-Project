<script>
export default {
  name: "AproposView",
  methods: {
    getLang() {
      return this.$store.state.lang;
    },
  },
}
</script>

<template>
  <div class="Date">
    <h1 id="main-title">{{ getLang().about_main_title }}</h1>
    <div class="sub-container">
      <div class="p-content" id="p-content-1">
        <div id="pt-content">
          <h4 class="content-subtitle" id="scnd-sub-title">{{ getLang().about_first_p_title1 }} <br> {{ getLang().about_first_p_title2 }}</h4>
          <p class="content-p">{{ getLang().about_first_p }}</p>
        </div>
        <div class="img" id="foodtruck"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-2">
        <div id="pt-content">
          <h3 class="content-subtitle">{{ getLang().about_second_p_title }}</h3>
          <p class="content-p">{{ getLang().about_second_p }}</p>
        </div>
        <div class="img" id="figurine"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-3">
        <div id="pt-content">
          <h3 class="content-subtitle">{{ getLang().about_third_p_title }}</h3>
          <p class="content-p">{{ getLang().about_third_p }}</p>
          <div id="vr-button-container">
            <div id="vr-inscription-button" @click="$router.push('/map')">
              {{ getLang().about_go_map }}
            </div>
          </div>
        </div>
        <div class="img" id="vr-img-2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.Date {
  text-align: center;
  color: white;
  font-size: 40px;
}

#main-title {
  font-size: 1.3em;
  color: var(--scnd2);
  margin-top: 5%;
}

#title-h1 h1 {
  font-size: 1.3em;
  overflow: hidden;
  margin-bottom: -15px;
}

#title h2 {
  font-size: 0.7em;
}

#scnd-sub-title {
  color: var(--scnd3);
}

.content-p {
  font-size: 0.45em;
  text-align: justify;
}

.sub-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
}

.sub-container p {
  width: 35%;
}

.sub-container .img {
  border-radius: 7px;
  width: 50%;
  height: 60%;
  background-size: cover;
  background-position: center;
}

#foodtruck {
  background-image: url('../../../assets/foodtrucks.jpg');
}

#figurine {
  background-image: url('../../../assets/figurine.JPG');
}

#vr-img-2 {
  background-image: url('../../../assets/map.png');
}

.content-subtitle {
  margin-bottom: 10px;
  text-align: left;
  color: var(--scnd3);
}

.p-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-right: 7%;
}

#pt-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 10px 40px;
  margin-left: 3%;
}
#pt-content h3 {
  font-size: 1em;
}

#pt-content h4 {
  font-size: 0.85em;
}

#pt-content p {
  width: 80%;
}

#p-content-2 {
  flex-direction: row-reverse;
  margin-right: 0px;
  margin-left: 7%;
}

#vr-inscription-button {
  width: 8vw;
  height: 4vh;
  font-size: 17px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--scnd2);
  box-shadow: 0 0 25px -5px var(--scnd3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin-top: 10px;
}

#vr-inscription-button:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 25px -5px var(--scnd2);
}

#vr-button-container {
  width: 100%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
}

</style>