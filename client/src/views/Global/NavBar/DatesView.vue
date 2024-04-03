<script>
export default {
  name: "DateView"
}
</script>

<template>
  <div class="date">
    <div class="title">
      <h1 id="main-title">Dates, horaires et accès</h1>
    </div>
    <div class="sub-container">
      <p class="content-p">
        Découvrez les informations pratiques relatives aux dates,
        moyens d'accès & horaires au salon EzCon.
        Consultez cette page afin de préparer votre salon
        et de vivre une expérience inoubliable !
      </p>
    </div>
    <div class="title">
        <h2>Dates</h2>
    </div>
    <div class="sub-container">
      <p class="content-p ">
        <strong>Du 20 au 25 Mai 2024</strong> a Andelnans parc des Expositions
      </p>
    </div>
    <div class="title">
        <h2>Horaires</h2>
    </div>
    <div class="sub-container">
      <p class="content-p ">
        Tous les jours, de <strong>8h à 21h</strong>
      </p>
    </div>
    <div class="title">
        <h2>Mesures de sécurité</h2>
    </div>
    <div class="sub-container">
      <p class="content-p">
        En application du plan Vigipirate, les mesures de sécurité du salon ont été renforcées :
        contrôles systématiques aux entrées, interdiction d’accès aux personnes en possession de bagages volumineux
        (> 20litres ou de dimensions excédant 40cm x 20cm x 25cm).
      </p>
  </div>
    <div class="title">
        <h2>Accès</h2>
        <h3>Lieu</h3>
    </div>
    <div class="sub-container">
      <p class="content-p">
        AtraXion - Parc des Expositions - Andelnans
      </p>
    </div>
    <div class="title">
      <h3>Adresse</h3>
    </div>
    <div class="sub-container">
      <p class="content-p">
        23 Rue des Prés,
        <a href="https://www.latraxion.com/">AtraXion</a>
        , Andelnans
      </p>
    </div>
    <div class="title">
      <h3>Accès à la EzCon</h3>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.131766378521!2d6.85985149984985!3d47.60412747965564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923e1b276a30bb%3A0x2104ccadfe33b055!2sL&#39;%20AtraXion%20-%20Parc%20des%20Expositions%20de%20Belfort%20-%20H%C3%A9ricourt%20-%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1712152616687!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.date {
  text-align: center;
  color: white;
  font-size: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

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

 h2 {
   font-size: 30px;
   margin: 0 auto;
   display: flex;
   align-items: flex-start;
   justify-content: left;
   width: 50%;
}

 h3{
   font-size: 25px;
   margin: 0 auto;
   display: flex;
   align-items: flex-start;
   justify-content: left;
   width: 50%;
   padding-top: 10px;
   color: var(--scnd3);
 }

.sub-container {
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: fit-content;
  padding-top: 25px;
  padding-bottom: 20px;
}

.sub-container p {
  width: 100%;
  font-size: 18px;
  text-align: left;
  margin: 0;
  padding-top: 0;
  background-color: #0c0b0f;
  padding-bottom: 20px;
}


iframe{
  width: 50%;
  height: 500px;
  margin: 0 auto;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

a{
  color: white;
}
</style>