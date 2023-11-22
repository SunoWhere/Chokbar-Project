<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer
  }
}

</script>

<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>

:root {
  /* Green variations */
  --c-light-green: #9CFC97;
  --c-asparagus: #6BA368;
  --c-dark-moss-green: #515B3A;
  --c-black-olive: #353D2F;
  --c-ancient-green: #6D9777;

  /* Buttons */
  --c-dark-grey: rgba(32, 31, 31, 0.8);
  --c-dark-grey-hover: rgba(47, 47, 47, 0.8);
  --c-btn-green: #00BF6F;
  --c-btn-green-hover: #009b5a;

  /* Background colors */
  --c-background: #0C0F0B;
  --c-component-background: #D9D9D9;

  /* Crud colors */
  --c-crud-bleu: #006EF0;
  --c-crud-rouge: #D20000;
  --c-crud-vert: #00BF6F;

  /* Others */
  --c-accent-color: #C4A14A;

  /* Texts */
  --c-text: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--c-background);
}

::-moz-selection {
  color: var(--c-dark-grey);
  background: var(--c-light-green);
}

::selection {
  color: var(--c-dark-grey);
  background: var(--c-light-green);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
