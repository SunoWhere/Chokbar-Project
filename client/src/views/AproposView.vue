<script>
export default {
  name: "AproposView"
}
</script>

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

</style>