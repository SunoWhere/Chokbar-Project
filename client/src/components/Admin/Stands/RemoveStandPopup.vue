<template>
  <div class="modal" v-if="showPopup">
    <div class="modal-content">
      <div class="modal-header">
        <h1>{{getLang().btn_delete}}</h1>
      </div>
      <div class="content-sub-title">
        <h2>{{getLang().popup_stands_title}}</h2>
        <p>{{ getLang().remove_popup_stand_1 }}</p>
        <p>{{ getLang().remove_popup_2 }}</p>
      </div>
      <div class="content">
        <form action="/users/" method="POST" @submit.prevent="submitForm">
          <div class="buttons">
            <div class="close-btn">
              <button id="close-button" @click="closePopup">{{getLang().btn_not}}</button>
            </div>
            <div class="submit-btn">
              <button id="submit-button" type="submit">{{getLang().btn_yes}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RemoveStandPopup',
  data() {
    return {
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
      return this.$store.state.showRemoveUserPopup;
    }
  },
  methods: {
    closePopup() {
      this.$store.commit("setShowRemoveUserPopup", false);
    },
    submitForm() {
      this.$emit('confirmed-deletion');
      this.closePopup();
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
  height: 200px;
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
  padding: 10px 10px;
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

#close-button {
  width: 120px;
  background-color: var(--crud-rouge);
}

#close-button:hover {
  background-color: #a20000;
}

#submit-button {
  width: 120px;
  background-color: var(--crud-vert);
}

#submit-button:hover {
  background-color: var(--btn-green-hover);
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

</style>