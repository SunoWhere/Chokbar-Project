<script>
  export default {
    name: 'LoginView',
    metaInfo() {
      return {
        title: 'Login'
      }
    },
    methods: {
      toggleShowPassword() {
        const passwordInput = document.getElementById("password");

        if(passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      }
    }
  }
</script>

<template>
  <div class="login">
    <div class="login-form">
      <h2>Login</h2>
      <form action="/users/login" method="GET">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <p class="show-password">
          <input type="checkbox" id="show-password" @click="toggleShowPassword">
          <label for="show-password">Show Password</label>
        </p>

        <button type="submit">Login</button>

        <a id="no-account" @click="$router.push('/Register')">Vous n'avez pas de compte ? S'inscrire maintenant !</a>
      </form>
    </div>
  </div>
</template>

<style scoped>

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
  background-color: var(--c-text);
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
  background-color: var(--c-btn-green);
  color: var(--c-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--c-btn-green-hover);
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