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
        <h2>LA conférence terrifortaine du jeu vidéo !</h2>
        <div class="button-home" @click="$router.push('/Billetterie')">Billetterie</div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-1">
        <div id="pt-content">
          <h3 class="content-subtitle" id="first-sub-title">EZCon 2024</h3>
          <h4 class="content-subtitle" id="scnd-sub-title">La convergence ludique à Belfort !</h4>
          <p class="content-p">
            Des compétitions de gaming acharnées aux expériences
            en réalité virtuelle captivantes, en passant par les démonstrations des
            derniers jeux des développeurs locaux, notre événement vous plonge
            entièrement dans un univers dynamique et passionnant. Parcourez les
            bornes d'arcade rétro, plongez dans des mondes virtuels grâce à nos
            expériences de réalité virtuelle époustouflantes et découvrez les créations
            les plus innovantes des talents locaux. EZCon 2023 est bien plus qu'un événement,
            c'est une aventure immersive qui célèbre toutes les facettes du jeu vidéo, du rétro au futuriste.
          </p>
        </div>
        <div class="img" id="borne-arcade"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-2">
        <div id="pt-content">
          <h3 class="content-subtitle">Tournois, créateurs et plus</h3>
          <p class="content-p">Découvrez les dernières nouveautés, participez
            à des tournois passionnants, rencontrez des créateurs
            de jeux et plongez-vous dans une communauté vibrante
            de joueurs.
          </p>
        </div>
        <div class="img" id="tournois"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-3">
        <div id="pt-content">
          <h3 class="content-subtitle">Réalité virtuelle, EVA...</h3>
          <p class="content-p">
            Pour l'édition 2024, une expérience VR exceptionnelle s'offre à nous avec
            l'arrivée d'EVA. Ne manquez pas cette opportunité unique et inscrivez-vous
            dès maintenant pour vivre l'une des expériences VR les plus captivantes à ce
            jour ! Plongez au cœur de la réalité virtuelle et explorez des mondes fascinants,
            le tout lors d'un événement qui promet d'être mémorable. Rejoignez-nous pour une
            aventure inédite et soyez prêt à repousser les frontières de l'immersion. Votre place
            dans cette folle expérience VR vous attend – réservez-la dès aujourd'hui !
          </p>
          <div id="vr-button-container">
            <div id="vr-inscription-button">
              S'inscrire
            </div>
          </div>
        </div>
        <div class="img" id="vr-img"></div>
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

#title-h1 h1 {
  font-size: 1.3em;
  overflow: hidden;
  margin-bottom: -15px;
}

#title h2 {
  font-size: 0.7em;
}

#first-sub-title {
  color: var(--scnd2);
  overflow: hidden;
  margin-bottom: -15px;
}

#scnd-sub-title {
  color: var(--scnd3);
}

.content-p {
  font-size: 0.45em;
  text-align: justify;
}

#title-section {
  color: var(--white);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  flex-direction: row;
  background-image: url('../assets/ezcon.png');
  background-size: cover;
  position: relative;
  overflow: hidden;
}

#title-section::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

#title {
  position: absolute;
  top: 35%;
  left: 0%;
  color: var(--white);
  z-index: 2;
  text-align: left;
  width: 100%;
  height: calc(100vh - 80px);
  margin-bottom: 40px;
  margin-left: 15%;
}

.button-home {
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
  box-shadow: 0 0 25px -5px var(--scnd3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.button-home:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 25px -5px var(--scnd2);
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
  width: 60%;
  height: 60%;
  background-size: cover;
  background-position: center;
}

#borne-arcade {
  background-image: url('../assets/2.jpg');
}

#tournois {
  background-image: url('../assets/3.jpg');
}

#vr-img {
  background-image: url('../assets/4.jpg');
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
  margin-left: 8%;
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