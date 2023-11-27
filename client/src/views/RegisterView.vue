<script>
export default {
  name: 'RegisterView',
  metaInfo() {
    return {
      title: 'Register'
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
  <div class="register">
    <div class="register-form">
      <h2>Register</h2>
      <form id="register-form" action="/register" method="POST">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <p class="show-password">
          <input type="checkbox" id="show-password" @click="toggleShowPassword">
          <label for="show-password">Show Password</label>
        </p>

        <button type="submit">Register</button>
        <a id="yes-account" @click="$router.push('/Login')">Vous avez déjà un compte ? Se connecter maintenant !</a>
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
  background-color: var(--c-text);
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

button {
  padding: 10px 20px;
  background-color: var(--c-btn-green);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--c-btn-green-hover);
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