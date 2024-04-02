<template>
  <div class="modal" v-if="showPopup">
    <div class="modal-content">
      <div class="modal-header">
        <h1>{{getLang().btn_add}}</h1>
        <div class="close-container" @click="closePopup">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="content-sub-title">
        <h2>{{ getLang().popup_stands_title }}</h2>
      </div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="form-main-content">

            <div>
              <label for="name">Nom du stand</label>
              <input type="text" id="name" name="name" placeholder="Startup name" v-model="addStand.name" required>
            </div>

            <label id="location" name="location">{{getLang().crud_stands_location}}</label>
            <select required v-model="addStand.id_location">
              <option id="location" name="location" v-for="loc in locations" :key="loc.id_location" :value="loc.id_location">{{ loc.code }}</option>
            </select>

            <label id="location" name="location">{{getLang().crud_stands_provider}}</label>
            <select required v-model="addStand.id_provider">
              <option id="location" name="location" v-for="pr in providers" :key="pr.id_provider" :value="pr.id_provider">{{ pr.name }}</option>
            </select>

            <label id="location" name="location">Stand type</label>
            <select required v-model="addStand.id_stand_type">
              <option id="location" name="location" v-for="type in standTypes" :key="type.id_stand_type" :value="type.id_stand_type">{{ type.name }}</option>
            </select>

            <div class="descriptions">
              <div>
                <label for="story">Description française</label>
                <textarea id="story" v-model="addStand.description_fr" name="story" rows="5" cols="33" required>Decription française</textarea>
              </div>
              <div>
                <label for="story">Description anglaise</label>
                <textarea id="story" v-model="addStand.description_en" name="story" rows="5" cols="33" required>Decription anglaise</textarea>
              </div>
            </div>
          </div>

          <div class="submit-btn">
            <button type="submit">{{getLang().btn_add}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {providersService, standsService} from "@/services";
import {mapActions, mapState} from "vuex";

export default {
  name: 'AddStandPopup',
  data() {
    return {
      addStand: {
        id_location: '',
        id_provider: '',
        id_stand_type: '',
        name: '',
        description_en: '',
        description_fr: ''
      },
      locations: [],
      providers: [],
      message: null
    }
  },
  props: {
    typeTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['standTypes', 'showAddStandPopup']),
    showPopup() {
      return this.showAddStandPopup;
    }
  },
  methods: {
    ...mapActions(['fetchStandTypes', 'updateStandList']),
    closePopup() {
      this.$store.commit("setShowAddStandPopup", false);
    },
    clearAddStand() {
      this.addStand.id_location = '',
      this.addStand.id_provider = '',
      this.addStand.id_stand_type = '',
      this.addStand.name = '',
      this.addStand.description_en = '',
      this.addStand.description_fr = ''
    },
    async submitForm() {
      this.addStand.id_location = this.addStand.id_location.toString();
      this.addStand.id_provider = this.addStand.id_provider.toString();
      this.addStand.id_stand_type = this.addStand.id_stand_type.toString();

      const res = await standsService.addStand(this.addStand);
      console.log(res);

      if(res) {
        this.clearAddStand()
        this.closePopup();

        await this.updateStandList();
      }
    },
    async getLocations() {
      try {
        await standsService.getAllLocations().then((res) => {
          let locationNoStand = [];
          for(const item in res) {
            if(res[item].stand === null) {
              if(res[item].code[0] !== 'S') {
                locationNoStand.push(res[item]);
              }
            }
          }
          this.locations = locationNoStand;
        });
      } catch(error) {
        console.error(error);
      }
    },
    async getProviders() {
      try {
        const res = await providersService.getAllProvider();
        this.providers = res.data;
      } catch(error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getLocations();
    this.getProviders();
    this.fetchStandTypes();
  }
};

</script>

<style scoped>
.modal {
  position: absolute;
  align-self: center;
  border: 1px solid var(--background);
  background-color: var(--white);
  z-index: 999;
  height: 600px;
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

#name {
  width: 100%;
}

#story {
  width: 100%;
}

</style>
