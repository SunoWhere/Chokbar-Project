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
  --c-light-green: var(#9CFC97);
  --c-asparagus: var(#6BA368);
  --c-dark-moss-green: var(#515B3A);
  --c-black-olive: var(#353D2F);
  --c-ancient-green: var(#6D9777);

  /* Buttons */
  --c-grey-button: var(#1E1E1E);

  /* Background colors */
  --c-black-background: var(#0C0F0B);

  /* Crud colors */
  --c-crud-bleu: var(#006EF0);
  --c-crud-rouge: var(#D20000);
  --c-crud-vert: var(#00BF6F);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
