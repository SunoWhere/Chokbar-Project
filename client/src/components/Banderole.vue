<script>
export default {
  name: 'BanderoleSection',
  props: {

  },
}
</script>

<template>
  <div class="nav-banner">
    <div class="titres">
      <h1>EZCON - ATRAXION À ANDELNANS</h1>
      <h2>20 - 25 Mai 2024</h2>
    </div>
    <div class="shop-btn">
      <button>Billetterie</button>
    </div>
  </div>
</template>

<style scoped>
.nav-banner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 130px;
  background: transparent;
  border-bottom: solid 2px var(--c-asparagus);
}

.titres * {
  font-weight: normal;
}

.titres h1 {
  font-size: 24px;
}

.titres h2 {
  font-size: 22px;
}

.shop-btn button {
  font-family: Poppins, sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 15px 25px;
  font-size: 24px;
  color: var(--c-dark-grey);
  background-color: rgb(154, 236, 150);
  box-shadow: 0 0 25px rgba(156, 252, 151, .7);
  cursor: pointer;
  transition: all 1s ease;
}

.shop-btn button:hover {
  background-color: rgb(119, 255, 112);
  box-shadow: 0 0 25px rgba(119, 255, 112, 0.7);
}
</style>