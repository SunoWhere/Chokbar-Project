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
    <div id="title-section">
      <div id="title">
        <div id="title-h1">
          <h1>EZCon</h1>
        </div>
        <h2>Là où la magie du jeu devient réalité !</h2>
        <div id="button" @click="$router.push('/Billetterie')">Billetterie</div>
      </div>
      <div id="right-image">

      </div>
    </div>
    <div class="sub-container">
      <div id="p-content">
        <div id="pt-content">
          <h3 class="content-subtitle">Tournois, créateurs et plus</h3>
          <p class="content-p">Découvrez les dernières nouveautés, participez
            à des tournois passionnants, rencontrez des créateurs
            de jeux et plongez-vous dans une communauté vibrante
            de joueurs.
          </p>
        </div>
        <div id="img"></div>
      </div>
    </div>
    <div class="sub-container">
      <div id="p-content">
        <div id="pt-content">
          <h3 class="content-subtitle">Tournois, créateurs et plus</h3>
          <p class="content-p">Découvrez les dernières nouveautés, participez
            à des tournois passionnants, rencontrez des créateurs
            de jeux et plongez-vous dans une communauté vibrante
            de joueurs.
          </p>
        </div>
        <div id="img"></div>
      </div>
    </div>
    <div class="sub-container">
      <div id="p-content">
        <div id="pt-content">
          <h3 class="content-subtitle">Tournois, créateurs et plus</h3>
          <p class="content-p">Découvrez les dernières nouveautés, participez
            à des tournois passionnants, rencontrez des créateurs
            de jeux et plongez-vous dans une communauté vibrante
            de joueurs.
          </p>
        </div>
        <div id="img"></div>
      </div>
    </div>
  </div>
</template>

<style>

.home {
  text-align: center;
  color: white;
  font-size: 40px;
}

h1 {
  font-size: 1.3em;
  overflow: hidden;
  line-height: 0.8;
}

h2 {
  font-size: 0.7em;
}

.content-subtitle {
  color: var(--scnd3);
}

.content-p {
  font-size: 0.45em;
  text-align: justify;
}

#title-section {
  color: var(--white);
  height: calc(100vh - 80px);
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
}

#title {
  text-align: left;
  width: 100%;
  margin-bottom: 40px;
  margin-left: 10%;
}

#title #button {
  margin-top: 20px;
  width: 10%;
  height: 5%;
  font-size: 17px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--scnd2);
  box-shadow: 0px 0px 25px -5px var(--scnd3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

#title #button:hover {
  background-color: var(--scnd3);
  box-shadow: 0px 0px 25px -5px var(--scnd2);
}

.sub-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}

.sub-container p {
  width: 35%;
}

.sub-container #img {
  border-radius: 7px;
  width: 60%;
  height: 50%;
  background-image: url('../assets/3.jpg');
  background-size: cover;
  background-position: center;
}

#p-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

#pt-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 10px 40px;
  margin-left: 10%;
}
#pt-content h3 {
  font-size: 0.8em;
}

#pt-content p {
  width: 80%;
}

</style>