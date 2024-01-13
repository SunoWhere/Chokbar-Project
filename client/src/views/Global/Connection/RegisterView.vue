<script>
import {usersService} from "@/services";

export default {
  name: 'RegisterView',
  metaInfo() {
    return {
      title: 'Register'
    }
  },
  data() {
    return {
      addUser: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      passwordMatch: false,
    }
  },
  methods: {
    toggleShowPassword() {
      const passwordInput = document.getElementById("password");
      const cpasswordInput = document.getElementById("confirm-password");

      if(passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
      if(cpasswordInput.type === "password") {
        cpasswordInput.type = "text";
      } else {
        cpasswordInput.type = "password";
      }
    },
    clearAddUser() {
      this.addUser.first_name = '';
      this.addUser.last_name = '';
      this.addUser.email = '';
      this.addUser.password = '';
      this.addUser.confirmPassword = '';
    },
    register() {
      if (this.addUser.password === this.addUser.confirmPassword) {
        usersService.addUser(this.addUser)
            .then(async res => {
              this.message = res.data;

              this.clearAddUser()

              const updatedUserList = await usersService.getAllUser();
              await this.$store.dispatch('updateUserList', updatedUserList);

              await this.$router.push('/login');
            })
            .catch(err => {
              console.error(err);
              this.message = err ? err : "Erreur lors de l'ajout.";
            });
      }
      else {
        this.message = "Passwords dosn't matchs.";
      }
    },
  }
}
</script>

<template>
  <div class="register">
    <div class="register-form">
      <h2>{{ getLang().register_title }}</h2>
      <form id="register-form" action="/api/users/" method="POST" @submit.prevent="register">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@ezcon.fr" v-model="addUser.email" required>

        <label for="first_name">{{ getLang().register_prenom }}</label>
        <input type="text" id="first_name" name="first_name" :placeholder="getLang().form_firstname" v-model="addUser.first_name" required>

        <label for="last_name">{{ getLang().register_nom }}</label>
        <input type="text" id="last_name" name="last_name" :placeholder="getLang().form_lastname" v-model="addUser.last_name" required>

        <label for="password">{{ getLang().form_password }}</label>
        <input type="password" id="password" name="password" :placeholder="getLang().form_password" v-model="addUser.password" required>

        <label for="confirm-password">{{ getLang().form_confirm_password }}</label>
        <input type="password" id="confirm-password" name="confirm-password" :placeholder="getLang().form_confirm_password" v-model="addUser.confirmPassword" required>

        <p class="show-password">
          <input type="checkbox" id="show-password" @click="toggleShowPassword">
          <label for="show-password">{{ getLang().form_show_password}}</label>
        </p>

        <button type="submit">Register</button>
        <a id="yes-account" @click="$router.push('/Login')">{{ getLang().register_have_account }}</a>
      </form>
    </div>
  </div>
</template>

<style scoped>

.register {
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-form {
  width: 440px;
  padding: 20px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
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
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--btn-green-hover);
}

#yes-account {
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease;
}

#yes-account:hover {
  color: #222;
}
</style>