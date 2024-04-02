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
        <h2>{{ getLang().popup_stands_title }}</h2>
      </div>
      <div class="content">
        <form @submit.prevent="submitForm">
          <div class="form-main-content">

            <div>
              <label for="name">Nom du stand</label>
              <div v-if="editStand">
                <input type="text" id="name" name="name" placeholder="Startup name" v-model="editStand.name" required>
              </div>
            </div>

            <label id="location" name="location">{{getLang().crud_stands_location}}</label>
            <select required v-model="editStand.id_location">
              <option id="location" name="location" v-for="loc in locations" :key="loc.id_location" :value="loc.id_location">{{ loc.code }}</option>
            </select>

            <label id="location" name="location">{{getLang().crud_stands_provider}}</label>
            <select required v-model="editStand.id_provider">
              <option id="location" name="location" v-for="pr in providers" :key="pr.id_provider" :value="pr.id_provider">{{ pr.name }}</option>
            </select>

            <label id="location" name="location">Stand type</label>
            <select required v-model="editStand.id_stand_type">
              <option id="location" name="location" v-for="type in standTypes" :key="type.id_stand_type" :value="type.id_stand_type">{{ type.name }}</option>
            </select>

            <div class="descriptions">
              <div>
                <label for="story">Description française</label>
                <textarea id="story" v-model="editStand.description_fr" name="story" rows="5" cols="33" required>Decription française</textarea>
              </div>
              <div>
                <label for="story">Description anglaise</label>
                <textarea id="story" v-model="editStand.description_en" name="story" rows="5" cols="33" required>Decription anglaise</textarea>
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
  name: 'EditStandPopup',
  data() {
    return {
      editStand: {
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
  watch: {
    standToEdit: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.editStand = JSON.parse(JSON.stringify(newValue));
          this.getLocations();
          this.getProviders();
        }
      }
    }
  },
  props: {
    typeTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['standTypes', 'standToEdit']),
    showPopup() {
      return this.$store.state.showEditStandPopup;
    }
  },
  methods: {
    ...mapActions(['fetchStandTypes', 'updateStandList']),
    closePopup() {
      this.$store.commit("setShowEditStandPopup", false);
    },
    clearAddStand() {
      this.editStand.id_location = '',
      this.editStand.id_provider = '',
      this.editStand.id_stand_type = '',
      this.editStand.name = '',
      this.editStand.description_en = '',
      this.editStand.description_fr = ''
    },
    async submitForm() {
      this.editStand.id_location = this.editStand.id_location.toString();
      this.editStand.id_provider = this.editStand.id_provider.toString();
      this.editStand.id_stand_type = this.editStand.id_stand_type.toString();
      this.editStand.name = this.editStand.name.toString();

      const res = await standsService.updateStandById(this.editStand);

      if(res) {
        this.clearAddStand()
        this.closePopup();

        await this.updateStandList();
      }
    },
    async getLocations() {
      try {
        const res = await standsService.getAllLocations();
        if (Array.isArray(res)) {
          let locationNoStand = [];
          for (const item of res) {
            if (item.stand?.id_stand === this.standToEdit?.id_stand) {
              locationNoStand.push(item);
            } else if (item.stand === null && item.code[0] !== 'S') {
              locationNoStand.push(item);
            }
          }
          this.locations = JSON.parse(JSON.stringify(locationNoStand));
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
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
