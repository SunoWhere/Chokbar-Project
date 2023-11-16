<template>
  <div id="app">
    <NavBar></NavBar>
  
    <Footer></Footer> 
    <router-view/>
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
  --c-grey-button: #1E1E1E;

  /* Background colors */
  --c-black-background: #0C0F0B;

  /* Crud colors */
  --c-crud-bleu: #006EF0;
  --c-crud-rouge: #D20000;
  --c-crud-vert: #00BF6F;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
