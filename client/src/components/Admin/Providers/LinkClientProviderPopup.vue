<template>
  <div class="modal" v-if="showPopup">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Add</h1>
        <div class="close-container" @click="closePopup">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="content-sub-title">
        <h2>{{typeTitle}}</h2>
        <div v-if="message" id="error-message">
          <p class="error-message">{{ message }}</p>
        </div>
      </div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="form-main-content">
            <label for="name">Nom Intervenant</label>
            <input type="text" id="name" name="name" placeholder="Startup name" v-model="addProvider.name" required>

            <label for="userId">Sélectionner un utilisateur</label>
            <select v-model="addProvider.id" id="userId" name="userId" required>
              <option v-for="user in users" :key="user[0]" :value="user[0]">{{ user[2] }} {{ user[3] }}</option>
            </select>
          </div>

          <div class="submit-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {providersService} from "@/services";

export default {
  name: 'LinkClientProviderPopup',
  data() {
    return {
      addUser: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      addProvider: {
        name: '',
        id: ''
      },
      passwordMatch: false,
      message: null
    }
  },
  props: {
    typeTitle: {
      type: String,
      required: true
    },
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    showPopup() {
      return this.$store.state.showLinkClientProviderPopup;
    },
  },
  methods: {
    closePopup() {
      this.$store.commit("setShowLinkClientProviderPopup", false);
    },
    submitForm() {
      if (this.addProvider.name != null || this.addProvider.name !== "") {
        providersService.addProvider(this.addProvider)
            .then(async res => {
              this.message = res.data;
              this.closePopup();

              await this.$store.dispatch('updateProviderList');
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
  },
};

</script>

<style scoped>
.modal {
  position: absolute;
  align-self: center;
  border: 1px solid var(--background);
  background-color: var(--white);
  z-index: 999;
  height: 350px;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -50%);
  border-radius: 17px;
  box-shadow: 0 0 30px var(--background);
}

.modal-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px 10px;
  background-color: var(--crud-vert);
  border-radius: 17px 17px 0 0;
  height: 15%;
  color: var(--white);
}

.modal-content {
  position: absolute;
  color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  margin: 20px 0;
}

.content-sub-title {
  width: 100%;
  text-align: center;
  padding: 10px 10px;
}

.close-container {
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.leftright {
  height: 4px;
  width: 35px;
  position: absolute;
  background-color: var(--scnd2);
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft {
  height: 4px;
  width: 35px;
  position: absolute;
  background-color: var(--scnd3);
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

.close-container:hover .leftright {
  transform: rotate(-45deg);
}
.close-container:hover .rightleft {
  transform: rotate(45deg);
}

.form-main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
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

.submit-btn {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

.submit-btn button {
  width: 100%;
}

#error-message {
  color: var(--white);
  height: 30px;
  width: auto;
  border-radius: 7px;
  background-color: var(--crud-rouge);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 20px 10px;
}
</style>