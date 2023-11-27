<script>

export default {
  name: 'NavBar',
  data: () => ({
    selectedRole: "0",
  }),
  methods: {
    updateSelectedRole() {
      this.$store.dispatch('setSelectedRole', this.selectedRole);
    }
  }
}

</script>

<template>
  <nav>
    <img src="../assets/logo.png" alt="Logo EZCon">
    <ul class="nav-list">
      <li><button class="nav-item underline-animation" @click="$router.push('/')">Accueil</button></li>
      <li><button class="nav-item underline-animation" @click="$router.push('/Map')">Map</button></li>
      <li><button class="nav-item underline-animation" @click="$router.push('/Billetterie')">Billetterie</button></li>
      <li id="dropdown">
        <button class="nav-item dropdown">A Propos <font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
        <ul class="dropdown-list">
          <li><button class="dropdown-item underline-animation">La EZCon</button></li>
          <li><button class="dropdown-item underline-animation">A Découvrir</button></li>
        </ul>
      </li>
      <li>
        <select v-model="selectedRole" @change="updateSelectedRole" name="role" id="role-selector">
          <option value="0">user</option>
          <option value="1">prestataire</option>
          <option value="2">admin</option>
        </select>
      </li>
    </ul>
    <ul class="nav-list">
      <li v-if="parseInt(selectedRole) !== 0" ><button class="nav-btn" @click="$router.push('/Dashboard')">Dashboard</button></li>
      <li><button class="nav-item underline-animation" @click="$router.push('/Login')"><font-awesome-icon icon="fa-solid fa-user" /> Se Connecter</button></li>
      <li><button class="nav-item underline-animation"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Panier</button></li>
      <li><button class="nav-item underline-animation">FR</button></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 80px;
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

img {
  height: 80%;
  width: auto;
  margin: 0 10px 0 15px;
}

.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-list:last-child {
  margin-right: 15px;
}

.nav-item {
  display: inline-block;
  position: relative;
  border: none;
  background-color: transparent;
  color: var(--white);
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
  padding: 3px 0;
}

.nav-btn {
  border: none;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  padding: 13px 20px;
  transition: background-color 0.15s ease
}

.nav-btn:hover {
  background-color: var(--secondary);
}

.underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-list {
  list-style: none;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: var(--white);
  min-width: 160px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  z-index: 1;
  transition: all 0.2s ease;
}

#dropdown:hover .dropdown-list {
  opacity: 1;
  visibility: visible;
}

.dropdown-item {
  display: inline-block;
  position: relative;
  border: none;
  background-color: transparent;
  color: var(--primary);
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
  padding: 3px 0;
}

#role-selector {
  border: solid 1px black;
  border-radius: 8px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 18px;
}

</style>