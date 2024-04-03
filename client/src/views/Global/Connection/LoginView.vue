<script>
import {authService} from '@/services';

  export default {
    name: 'LoginView',
    metaInfo() {
      return {
        title: 'Login'
      }
    },
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        loginError: null,
      }
    },
    methods: {
      async login() {
        try {
          const hashedUser = {
            email: this.user.email,
            password: authService.hashPassword(this.user.password),
          };

          const loginResponse = await authService.login(hashedUser);
          authService.saveUuid(loginResponse);

          const role = await authService.getRole();

          this.$store.commit('setRole', role);
          this.$store.commit('setConnected', true);

          await this.$router.push('/Dashboard');
        } catch (error) {
          console.error(error);
          this.loginError = "Identifiants incorrects";
        }
      },
      toggleShowPassword() {
        const passwordInput = document.getElementById("password");

        if(passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      },
    }
  }
</script>

<template>
  <div class="login">
    <div class="login-form">
      <h2>{{getLang().login_title }}</h2>
      <div v-if="loginError" id="error-message">
        <p class="error-message">{{ loginError }}</p>
      </div>
      <form action="/users/login" method="GET" @submit.prevent="login">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="user.email" placeholder="Email" required>

        <label for="password">{{ getLang().form_password }}</label>
        <input type="password" id="password" name="password" v-model="user.password" :placeholder="getLang().form_password" required>

        <p class="show-password">
          <input type="checkbox" id="show-password" @click="toggleShowPassword">
          <label for="show-password">{{ getLang().form_show_password }}</label>
        </p>

        <button type="submit">{{getLang().login_title }}</button>

        <a id="no-account" @click="$router.push('/Register')">{{ getLang().login_no_account }}</a>
      </form>
    </div>
  </div>
</template>

<style scoped>

#error-message {
  color: var(--white);
  height: 30px;
  width: auto;
  border-radius: 7px;
  background-color: var(--crud-rouge);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.login {
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 440px;
  padding: 20px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;

  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="email"],
input[type="text"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.show-password {
  margin-top: -5px;
  margin-bottom: 10px;
}

.show-password input {
  margin-right: 3px;
}

button {
  padding: 10px 20px;
  background-color: var(--btn-green);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--btn-green-hover);
}

#no-account {
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #333;
  transition: color 0.15s ease;
}

#no-account:hover {
  color: #222;
}
</style>
