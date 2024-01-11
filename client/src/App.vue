<script>
import NavBar from '@/components/Global/NavBar.vue'
import Footer from '@/components/Global/Footer.vue'

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

  --primary: #201F1FCC;
  --secondary: #3a0f4c;
  --scnd1: #872341;
  --scnd2: #BE3144;
  --scnd3: #F05941;

  --background: #0c0b0f;
  --component-background: #D9D9D9;

  /* Crud colors */
  --crud-bleu: #006EF0;
  --crud-rouge: #D20000;
  --crud-vert: #00BF6F;
  --btn-green: #00BF6F;
  --btn-green-hover: #009b5a;

  /* Others */
  --accent-color: #C4A14A;

  /* Buttons */
  --secondary-hover: #501568;

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
  background-color: var(--scnd2);
  color: white;
}

::selection {
  background-color: var(--scnd2);
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
