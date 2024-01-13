<script>
export default {
  name: 'RegisterView',
  metaInfo() {
    return {
      title: 'Contact'
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      dropdownOptions: [
        {label: "Admin", value: "admin"},
        {label: "Provider1", value: "provider1"},
        {label: "Provider2", value: "provider2"},
        {label: "Provider3", value: "provider3"},
        {label: "Provider4", value: "provider4"},
        {label: "Provider5", value: "provider5"},
        {label: "Provider6", value: "provider6"},
        {label: "Provider7", value: "provider7"},
        {label: "Provider8", value: "provider8"},

      ],
      selectedOption: null,
    }
  },
  methods: {
  }
}
</script>
<template>
  <div class="container">
    <h1 id="main-title">{{getLang().contact_title}}</h1>
    <div class="register">
      <div class="register-form">
        <h2>Contact</h2>
        <form>
          <label for="email">{{getLang().contact_mail}}</label>
          <input type="email" id="email" name="email" required>

          <label for="selectOptions">{{getLang().contact_destinataire}} </label>
          <select id="selectOptions" v-model="selectedOption" class="dropdown-select">
            <option v-for="(option, index) in dropdownOptions" :key="index" class="dropdown-option">{{ option.label }}</option>
          </select>

          <label for="first_name">{{getLang().contact_sujet}}</label>
          <input type="text" id="first_name" name="first_name" required>

          <label for="last_name">{{getLang().contact_sujet}}</label>
          <textarea id="last_name" name="last_name" required></textarea>

          <button type="submit" @click="$router.push('/')">{{getLang().contact_envoyer}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

#main-title {
  position: absolute;
  color: var(--scnd2);
  margin: 70px
}


.dropdown-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}

.dropdown-option {
  font-size: 16px;
}

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

textarea {
  height: 150px;
  max-height: 150px;
  resize: none;
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
input[type="text"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: var(--scnd1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--scnd2);
}
</style>

