<script>
import {usersService} from '@/services';

export default {
  name: 'NavBar',
  methods: {
    logout() {
      if (this.isConnected()) {
        this.$store.commit('setConnected', false);

        usersService.removeUuid();
        usersService.removeRole();

        if (this.$route.path !== '/') {
          this.$router.push('/');
        }
      }
    },
    isConnected() {
      return this.$store.state.isConnected;
    },
    role() {
      return usersService.getRole() !== null;
    }
  },
}

</script>

<template>
  <nav>
    <img src="../assets/logo.png" alt="Logo EZCon">
    <ul class="nav-list">
      <li>
        <button class="nav-item underline-animation">
          <router-link class="router-link" to="/">Accueil</router-link>
        </button>
      </li>
      <li>
        <button class="nav-item underline-animation" @click="$router.push('/Map')">
          Map
        </button>
      </li>
      <li>
        <button class="nav-item underline-animation" @click="$router.push('/Billetterie')">
          Billetterie
        </button>
      </li>
      <li id="dropdown">
        <button class="nav-item dropdown">A Propos <font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
        <ul class="dropdown-list">
          <li>
            <button class="dropdown-item underline-animation" @click="$router.push('/Infos/Ezcon')">
              La EZCon
            </button>
          </li>
          <li>
            <button class="dropdown-item underline-animation" @click="$router.push('/Infos/Dates')">
              Dates, Horaires, Accès
            </button>
          </li>
          <li>
            <button class="dropdown-item underline-animation">
              A Découvrir
            </button>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="nav-list">
      <li v-if="isConnected()">
        <button class="nav-btn">
          <router-link class="router-link" to="/Dashboard">Dashboard</router-link>
        </button>
      </li>
      <li v-if="!isConnected()">
        <button class="nav-item underline-animation" @click="$router.push('/Login')">
          <font-awesome-icon icon="fa-solid fa-user" /> Se Connecter
        </button>
      </li>
      <li v-if="isConnected()">
        <button class="nav-item underline-animation" @click="logout()">
          <font-awesome-icon icon="fa-solid fa-user" /> Se Déconnecter
        </button>
      </li>
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

.router-link {
  color: var(--white);
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
  background-color: var(--scnd2);
  box-shadow: 0 0 15px var(--scnd2);
  color: var(--white);
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  padding: 13px 20px;
  transition: all 0.15s ease
}

.nav-btn:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 15px var(--scnd3);
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
  background-color: var(--scnd1);
  min-width: 160px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  z-index: 999;
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
  color: var(--white);
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
  padding: 3px 0;
}

</style>