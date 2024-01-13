<script>
export default {
  name: 'FooterSection',
  props: {

  },
  components: {

  },
  methods: {
  },
}

</script>

<template>
    <div class="footer">
      <div class="main-container">
        <div class="ezcon">
          <h4 class="title">EZCon</h4>
          <h5 class="footer-slogan">{{ getLang().home_subtitle.toUpperCase() }}</h5>
          <p id="fpr-1" class="footer-presentation">{{ getLang().footer_presentation_first }}</p>
          <p class="footer-presentation">{{ getLang().footer_presentation_second }}</p>
        </div>

        <div class="infos-pratiques">
          <h4 class="title">{{ getLang().footer_infos_pratiques }}</h4>

          <div class="button">{{ getLang().navbar_dp_dates }}s</div>
          <div class="button">{{ getLang().navbar_billetterie }}</div>
          <div class="button">{{ getLang().navbar_boutique }}</div>
          <div class="button">{{ getLang().footer_questions }}</div>
        </div>

        <div class="activities">
          <h4 class="title">{{ getLang().footer_activite }}</h4>

          <div class="button">Cosplay</div>
          <div class="button">Esport</div>
        </div>

        <div class="apropos">
          <h4 class="title">{{ getLang().footer_apropos }}</h4>

          <div class="button">{{ getLang().footer_mentions }}</div>
          <div class="button">{{ getLang().footer_politique }}</div>
          <div class="button">Cookies</div>
        </div>

        <div class="nous-contacter">
          <h4 class="title">{{ getLang().footer_contact }}</h4>
          <div class="mail-box">
            <div class="mail-icon">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </div>
            <div class="button mail-ref">
              <a href="mailto:ezcon.exposition.com">ezcon@exposition.com</a>
            </div>
          </div>
          <div class="contact">
          <button id="contact" class="contact-button" @click="$router.push('/Contact')">{{getLang(). footer_contact_button}}</button>
        </div>
        </div>
      </div>

      <div class="logo-reseaux">
        <div class="fb">
          <font-awesome-icon id="fb" class="logo" icon="fa-brands fa-facebook" />
        </div>
        <div class="x">
          <font-awesome-icon id="x" class="logo" icon="fa-brands fa-square-x-twitter" />
        </div>
        <div class="tiktok">
          <font-awesome-icon id="tiktok" class="logo" icon="fa-brands fa-tiktok" />
        </div>
        <div class="tiktok">
          <font-awesome-icon id="instagram" class="logo" icon="fa-brands fa-instagram" />
        </div>
      </div>

      <div class="tfoot-container">
          <div class="tfoot">
              <h4>{{ getLang().footer_foot }}</h4>
          </div>
      </div>
    </div>
</template>

<style scoped>

.footer {
  background-color: var(--primary);
  color: var(--white);
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  --columns-width: 25%;
  --last-column-width: 100%;

  --footer-padding-left: 14%;
  --footer-padding-right: 13%;
  --tfoot-container-height: 40px;

  font-size: clamp(0.5rem, 1.1vw, 1rem);
}

.main-container {
  padding: 4vw var(--footer-padding-right) 0 var(--footer-padding-left);
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
  color: var(--component-background)
}

.infos-pratiques {
  display: flex;
  flex-direction: column;
}

.tfoot-container {
  font-size: clamp(0.1rem, 0.7vw, 1rem);
  width: 100%;
  height: auto;
  background-color: var(--background);
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
    margin-left: var(--footer-padding-left);
}

.button {
  margin-bottom: 7%;
  text-align: left;
  font-size: clamp(0.5rem, 1.1vw, 1rem);
  background-color: transparent;
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

#contact {
  padding: 10px 20px;
  background-color: var(--scnd1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#contact:hover {
  background-color: var(--scnd2);
}

.button:hover {
  color: var(--scnd2);
}

.mail-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.mail-ref a {
  color: var(--white);
  transition: color 0.1s ease-in-out;
}

.mail-ref a:hover {
  color: var(--scnd1);
}

.mail-icon {
  margin-right: 6px;
}

.logo-reseaux {
  height: 4vw;
  margin-right: var(--footer-padding-right);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}

#fpr-1 {
  margin-bottom: 10%;
}

.logo {
  --logos-height: 2.5rem;
  height: var(--logos-height);
  cursor: pointer;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  color: var(--white);
}

.logo:hover {
  transform: scale(1.2);
}

#fb:hover {
  color: #006EF0;
}

#instagram:hover {
  color: #4728d4;
}

#x:hover {
  color: #070707;
}

#tiktok:hover {
  color: #D20000;
}

h5 {
  font-size: 0.8em;
}

</style>