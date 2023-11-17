<template>
    <div class="footer">
      <div class="main-container">
        <div class="ezcon">
          <h4 class="title">EzCon</h4>
          <h5 class="footer-slogan">LE SALON FRANÇAIS DU JEU VIDEO</h5>
          <p class="footer-presentation">But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the grea
            t explorer of the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it is ple
            asure, but because those who do not know how to pursue pleasure rat
            ionally encounter consequences that are extremely painful. Nor again
          </p>
        </div>

        <div class="infos-pratiques">
          <h4 class="title">INFOS PRATIQUES </h4>
          <div class="button-container">
            <div class="button">ceci est un lien</div>
          </div>

          <div class="button-container">
            <div class="button">ceci est un lien</div>
          </div>

          <div class="button-container">
            <div class="button">ceci est un lien</div>
          </div>

          <div class="button-container">
            <div class="button">ceci est un lien</div>
          </div>
        </div>

        <div class="apropos">
          <h4 class="title">À PROPOS</h4>
        </div>

        <div class="nous contacter">
          <h4>NOUS CONTACTER</h4>
        </div>
      </div>

      <div class="tfoot-container">
          <div class="tfoot">
              <h4>EZCon @ 2023 | 20 au 25 MAI 2023 | ANDELNAN SALLE D'EXPOSITION</h4>
          </div>
          <div class="logos">
          </div>
      </div>
    </div>
</template>
  
<script>

export default {
    name: 'FooterSection',
    props: {

    },
    components: {

    },
}

</script>

<style scoped>

.footer {
  background-color: var(--c-asparagus);
  color: white;
  height: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  --table-space: 40px;

  --columns-width: 25%;
  --last-column-width: 100%;

  --footer-padding: 10%;
  --logos-margin: 20%;
  --tfoot-container-height: 40px;

  font-size: clamp(1.3rem, 1.1vw, 2.3rem);
}

.main-container {
  padding: 30px var(--footer-padding);

  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.ezcon {
  width: var(--columns-width);
}

.title {
  margin-bottom: 1.5em;
}

.footer-slogan {
  margin-bottom: 1.5em;
}

.footer-presentation {
  text-align: justify;
}

.infos-pratiques {
  display: flex;
  flex-direction: column;
}

.tfoot-container {
    width: 100%;
    height: var(--tfoot-container-height);
    background-color: var(--c-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.tfoot {
    width: auto;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: var(--footer-padding);
}

.logos {
    width: auto;
    margin-right: var(--logos-margin);
}

.logo{
    width: 3em;
    height: 3em;
    cursor: pointer;
    margin-right: 1.5em;
}

.button-container {
  margin: 10% 0px;
  display: flex;
  justify-content: flex-start;
}

.button {
  text-align: left;
  font-size: clamp(1rem, 1.1vw, 2rem);
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

.button:hover {
  color: #006EF0;
}

</style>