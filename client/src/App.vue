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

  --primary: rgba(32, 31, 31, 0.8);
  --secondary: #22092C;
  --scnd1: #872341;
  --scnd2: #BE3144;
  --scnd3: #F05941;

  --background: #0C0F0B;
  --component-background: #D9D9D9;

  /* Crud colors */
  --crud-bleu: #006EF0;
  --crud-rouge: #D20000;
  --crud-vert: #00BF6F;
  --btn-green: #00BF6F;
  --btn-green-hover: #009b5a;

  /* Others */
  --accent-color: #C4A14A;

  /* Texts */
  --white: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
}

::-moz-selection {
  color: var(--primary);
}

::selection {
  color: var(--primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
