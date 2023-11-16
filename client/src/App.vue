<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

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

<style>

:root {
  /* Green variations */
  --c-light-green: #9CFC97;
  --c-asparagus: #6BA368;
  --c-dark-moss-green: #515B3A;
  --c-black-olive: #353D2F;
  --c-ancient-green: #6D9777;

  /* Buttons */
  --c-dark-grey: #1E1E1E;

  /* Background colors */
  --c-background: #0C0F0B;
  --c-component-background: #D9D9D9;

  /* Crud colors */
  --c-crud-bleu: #006EF0;
  --c-crud-rouge: #D20000;
  --c-crud-vert: #00BF6F;

  /* Others */
  --c-accent-color: #C4A14A;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--c-background);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
