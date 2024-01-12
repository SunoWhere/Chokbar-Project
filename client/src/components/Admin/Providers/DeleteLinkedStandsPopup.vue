<template>
  <div class="modal" v-if="showPopup">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Remove linked stands</h1>
        <div class="close-container" @click="closePopup">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="content-sub-title">
        <h2>{{typeTitle}}</h2>
        <div v-if="message" id="error-message">
          <p class="error-message"></p>
        </div>
        <p>Des stands sont liés à ce {{typeTitle}}.</p>
        <p>Vous devez les supprimer pour pouvoir supprimer ce {{typeTitle}}.</p>

        <table>
          <tr v-for="(item, index) in standsList" :key="index">
            <td>{{ item.name }}</td>
            <td>
              <div class="delete-btn">
                <button class="delete-button" @click.prevent="removeStand(item.id)">Supprimer</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="buttons">
            <div class="submit-btn">
              <button type="submit">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {standsService} from "@/services";

export default {
  name: 'LinkedStandsPopup',
  data() {
    return {
      message: null,
    }
  },
  props: {
    typeTitle: {
      type: String,
      required: true
    },
    standsList: {
      type: Array,
      required: true
    }
  },
  computed: {
    showPopup() {
      return this.$store.state.showLinkedStandsPopup;
    }
  },
  methods: {
    closePopup() {
      this.$store.commit("setShowLinkedStandsPopup", false);
    },
    submitForm() {
      this.$emit('standsConfirmed');
      this.closePopup();
    },
    async removeStand(id) {
      try {

        if(this.standsList) {
          await standsService.removeStand(id);
          const updatedStandsList = this.standsList.filter(stand => stand.id !== id);
          this.$emit('updateStandsList', updatedStandsList);

        } else {
          this.closePopup()
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
};

</script>

<style scoped>

table {
  width:100%;
  border-collapse: collapse;
  border-radius: 5px;
  margin-top: 15px;
  text-align: left;
}

tr {
  padding-top: 10px;
  padding-bottom: 10px;
}

tr:nth-child(even){
  background-color: var(--component-background);
}

.modal {
  position: absolute;
  align-self: center;
  border: 1px solid var(--background);
  background-color: var(--white);
  z-index: 999;
  height: 400px;
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
  background-color: var(--crud-rouge);
  border-radius: 17px 17px 0 0;
  height: 20%;
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
  padding: 10px 10px 0 10px;
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
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--btn-green-hover);
}

.submit-btn {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.submit-btn button {
  width: 120px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
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

td:nth-child(1) {
  border: none;
}

td{
  padding: 5px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.delete-button{
  background-color: var(--crud-rouge);
  border: none;
  color: white;
  padding: 5px 5px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover{
  background-color: #a80000;
}

.delete-btn {
  display: flex;
  align-items: center;
}

</style>