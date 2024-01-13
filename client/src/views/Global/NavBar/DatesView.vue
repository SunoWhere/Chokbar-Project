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
        moyens d'accès & horaires au salon Paris Games Week.
        Consultez cette page afin de préparer votre salon
        et de vivre une expérience inoubliable !
      </p>
    </div>
  </div>
</template>

<style scoped>

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

#title h2 {
  font-size: 0.7em;
}

.sub-container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: red;
}

.sub-container p {
  width: 35%;
  font-size: 0.45em;
  text-align: justify;
}

</style>