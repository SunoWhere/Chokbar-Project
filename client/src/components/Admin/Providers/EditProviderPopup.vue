<template>
  <div class="modal" v-if="showPopup">
    <div class="modal-content">
      <div class="modal-header">
        <h1>{{getLang().btn_edit}}</h1>
        <div class="close-container" @click="closePopup">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="content-sub-title">
        <h2>{{getLang().popup_providers_title}}</h2>
      </div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="form-main-content">

            <label for="name">{{getLang().edit_popup_providers_name}}</label>
            <input type="text" id="name" name="name" placeholder="Startup name" v-model="$store.state.providerToEdit.visibleColumns.name" required>

            <div class="descriptions">
              <div>
                <label for="story">{{getLang().edit_popup_providers_description_fr}}</label>
                <textarea id="story" name="story" rows="5" cols="33"  v-model="$store.state.providerToEdit.description_fr" required>Decription française</textarea>
              </div>
              <div>
                <label for="story">{{getLang().edit_popup_providers_description_en}}</label>
                <textarea id="story" name="story" rows="5" cols="33" v-model="$store.state.providerToEdit.description_en" required>Decription anglaise</textarea>
              </div>
            </div>
            <label for="firstname">{{getLang().form_firstname}}</label>
            <input type="text" id="firstname" name="firstname" placeholder="Firstname" v-model="$store.state.userToEdit.first_name" required>

            <label for="lastname">{{getLang().form_lastname}}</label>
            <input type="text" id="lastname" name="lastname" placeholder="Lastname" v-model="$store.state.userToEdit.last_name" required>

            <label for="email">{{getLang().form_email}}</label>
            <input type="email" id="email" name="email" placeholder="Email" v-model="$store.state.userToEdit.email" required>

            <label for="password">{{getLang().form_password}}</label>
            <input type="password" id="password" name="password" placeholder="Password" v-model="editUser.password">

            <label for="confirm-password">{{getLang().form_confirm_password}}</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" v-model="editUser.confirmPassword">

            <p class="show-password">
              <input type="checkbox" id="show-password" @click="toggleShowPassword">
              <label for="show-password">{{getLang().form_show_password}}</label>
            </p>
          </div>

          <div class="buttons">
            <div class="submit-btn">
              <button type="submit">{{getLang().btn_edit}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {providersService, usersService} from "@/services";

export default {
  name: 'EditProviderPopup',
  data() {
    return {
      editUser: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      editProvider: {
        id: '',
        name: '',
        uuid_user: '',
        description_fr: '',
        description_en: ''
      },
      passwordMatch: false,
      message: null,
    }
  },
  props: {
    typeTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    showPopup() {
      return this.$store.state.showEditProviderPopup;
    }
  },
  methods: {
    closePopup() {
      this.$store.commit("setShowEditProviderPopup", false);
    },
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
    submitForm() {
      this.editProvider.id = this.$store.state.providerToEdit.visibleColumns.id;
      this.editProvider.name = this.$store.state.providerToEdit.visibleColumns.name;
      this.editProvider.uuid_user = this.$store.state.providerToEdit.uuid_user;
      this.editProvider.description_fr = this.$store.state.providerToEdit.description_fr;
      this.editProvider.description_en = this.$store.state.providerToEdit.description_en;

      this.editUser.id = this.$store.state.userToEdit.uuid_user;
      this.editUser.first_name = this.$store.state.userToEdit.first_name;
      this.editUser.last_name = this.$store.state.userToEdit.last_name;
      this.editUser.email = this.$store.state.userToEdit.email;

      if (this.editUser.password === this.editUser.confirmPassword) {
        if(this.editUser.password == null || this.editUser.password === '') {
          this.editUser.password = this.$store.state.userToEdit.password;
        }
        else {
          this.editUser.password = usersService.hashPassword(this.editUser.password);
        }
        usersService.editUser(this.editUser)
            .then(async res => {
              this.message = res.data;

              await providersService.editProvider(this.editProvider)
                  .then(async res => {
                    this.message = res.data;
                    this.closePopup();
                  })
                  .catch(err => {
                    console.error(err);
                    this.message = err ? err : "Erreur lors de l'edit.";
                  });
              const updatedUserList = await usersService.getAllUser();
              await this.$store.dispatch('updateProviderList', updatedUserList);
            })
            .catch(err => {
              console.error(err);
              this.message = err ? err : "Erreur lors de l'edit.";
            });
      }
      else {
        this.message = "Passwords dosn't matchs.";
      }
      this.editUser.password = '';
      this.editUser.confirmPassword = '';
    },
  },
};

</script>


<style scoped>

.show-password {
  display: flex;
  align-items: center;
}

.show-password input {
  margin-right: 5px;
}

.show-password label {
  margin-bottom: -2px;
}

.modal {
  position: absolute;
  align-self: center;
  border: 1px solid var(--background);
  background-color: var(--white);
  z-index: 999;
  height: 750px;
  width: 600px;
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
  background-color: var(--crud-bleu);
  border-radius: 17px 17px 0 0;
  height: 10%;
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
  padding-top: 10px;
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

.descriptions {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

textarea {
  resize: none;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

label {
  display: block;
  margin-bottom: 5px;
  margin-right: 5px;

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
  width: 100%;
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
  background-color: var(--crud-bleu);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #004eab;
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