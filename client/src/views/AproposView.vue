<script>
export default {
  name: "AproposView"
}
</script>

<!--
<template>
  <div id="apropos-container">
    <div id="apropos-sub-container">
      <h1>Section Restauration :</h1>

      <h2>Explorez une Palette Culinaire Exceptionnelle :</h2>
      <p>
        Au cœur de l'excitation d'EZCon, découvrez une expérience culinaire unique
        Grâce à nos foods trucs soigneusement sélectionnés. Découvrez différentes cul
        tures que ce soit la cuisine locale ou la cuisine asiatique.
      </p>

      <h1>Section Goodies :</h1>

      <h2>Des goodies de toutes les couleurs :</h2>
      <p>
        Lors de votre expérience à EZCon, plongez dans un paradis des
        goodies où une variété exceptionnelle vous attend. Des figurines
        de la culture pop aux articles exclusifs, notre boutique propose
        une sélection soigneusement choisie pour satisfaire tous les passionnés.
        Que vous soyez à la recherche de souvenirs uniques, de vêtements
        pop ou de trésors de collection, vous trouverez tout ce que vous
        désirez.
      </p>

      <h1>Section Informations Pratiques :</h1>

      <h2>Planifiez Votre Journée à EZCon :</h2>
      <p>
        Pour vous assurer une expérience sans tracas, consultez
        notre map interactive ainsi que le planning pour planifier
        votre journée à EZCon. Découvrez les horaires des événements,
        les emplacements des stands de restauration, et
        assurez-vous de ne rien manquer des temps forts de
        l'événement.
      </p>
    </div>
  </div>
</template>

<style scoped>

#apropos-container {
  color: var(--white);
  height: 100vh;
  width: 100%;
  text-align: justify;
  padding: 3% 10%;
}

#apropos-container h1 {
  color: var(--scnd2);
}

#apropos-container h2 {
  color: var(--scnd3);
  padding-left: 10%;
}

#apropos-container p {
  margin-bottom:7%;
  padding-left: 10%;
}

#apropos-sub-container {
  width: 50%;
}

</style>-->


<template>
  <div class="Date">
    <h1 id="main-title">À propos:</h1>
    <div class="sub-container">
      <div class="p-content" id="p-content-1">
        <div id="pt-content">
          <h4 class="content-subtitle" id="scnd-sub-title">Explorez une palette culinaire <br>exceptionnelle</h4>
          <p class="content-p">Des compétitions de gaming acharnées aux expériences
            en réalité virtuelle captivantes, en passant par les démonstrations des
            derniers jeux des développeurs locaux, notre événement vous plonge
            entièrement dans un univers dynamique et passionnant. Parcourez les
            bornes d'arcade rétro, plongez dans des mondes virtuels grâce à nos
            expériences de réalité virtuelle époustouflantes et découvrez les créations
            les plus innovantes des talents locaux. EZCon 2023 est bien plus qu'un événement,
            c'est une aventure immersive qui célèbre toutes les facettes du jeu vidéo, du rétro au futuriste.
          </p>
        </div>
        <div class="img" id="foodtruck"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-2">
        <div id="pt-content">
          <h3 class="content-subtitle">Des goodies de toutes les couleurs</h3>
          <p class="content-p">
            Lors de votre expérience à EZCon, plongez dans un paradis des
            goodies où une variété exceptionnelle vous attend. Des figurines
            de la culture pop aux articles exclusifs, notre boutique propose
            une sélection soigneusement choisie pour satisfaire tous les passionnés.
            Que vous soyez à la recherche de souvenirs uniques, de vêtements
            pop ou de trésors de collection, vous trouverez tout ce que vous
            désirez.
          </p>
        </div>
        <div class="img" id="figurine"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-3">
        <div id="pt-content">
          <h3 class="content-subtitle">Planifiez Votre Journée à EZCon </h3>
          <p class="content-p">
            Pour vous assurer une expérience sans tracas, consultez
            notre map interactive ainsi que le planning pour planifier
            votre journée à EZCon. Découvrez les horaires des événements,
            les emplacements des stands de restauration, et
            assurez-vous de ne rien manquer des temps forts de
            l'événement.
          </p>
          <div id="vr-button-container">
            <div id="vr-inscription-button">
              S'inscrire
            </div>
          </div>
        </div>
        <div class="img" id="vr-img-2"></div>
      </div>
    </div>
  </div>
</template>

<style>

.Date {
  text-align: center;
  color: white;
  font-size: 40px;
}

#main-title {
  font-size: 1.5em;
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
  background-image: url('../assets/foodtrucks.jpg');
}

#figurine {
  background-image: url('../assets/figurine.JPG');
}

#vr-img-2 {
  background-image: url('../assets/map.png');
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