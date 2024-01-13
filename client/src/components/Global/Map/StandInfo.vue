<script>
import {lang_en, lang_fr, providersService} from "@/services";
import moment from "moment-timezone";
export default {
  computed: {
    lang_en() {
      return lang_en
    },
    lang_fr() {
      return lang_fr
    }
  },
  props: {
    boothId: {
      type: String,
      required: true
    },
    selectedLocation: Object,
  },
  data() {
    return {
      provider: null,
    }
  },
  methods: {
    closeTooltip() {
      this.$store.commit("setShowStandInfo", false);
    },
    locationNameFR(locationCode) {
      switch (locationCode) {
        case "S01": return "Restauration";
        case "S02": return "Scène";
        case "S03": return "Espace VIP";
        default: return locationCode;
      }
    },
    locationNameEN(locationCode) {
      switch (locationCode) {
        case "S01": return "Catering";
        case "S02": return "Scene";
        case "S03": return "VIP Area";
        default: return locationCode;
      }
    },
    standTypeFR(standTypeId) {
      switch (standTypeId) {
        case 1: return "Vente de Biens";
        case 2: return "Nourriture";
        case 3: return "Démonstration";
        case 4: return "Autographes";
      }
    },
    standTypeEN(standTypeId) {
      switch (standTypeId) {
        case 1: return "Goods Selling";
        case 2: return "Food";
        case 3: return "Demonstration";
        case 4: return "Autographs";
      }
    },
    moment(date) {
      return moment(date).tz("Atlantic/Azores").format("HH:mm");
    },
    async getProviderById(id_provider) {
      try {
        const res = await providersService.getProviderById(id_provider);
        this.provider = res;
      } catch(err) {
        console.error(err);
      }
    }
  },
  created() {
    if(this.selectedLocation.stand) {
      this.getProviderById(this.selectedLocation.stand.id_provider);
    }
  }
}
</script>

<template>
  <div class="tooltip-container">
    <div class="tooltip">
      <div class="close-container" @click="closeTooltip">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </div>

      <div class="tooltip-content">
        <p v-if="selectedLocation.stand && getLang() === lang_fr" id="tooltip-name">[{{ locationNameFR(selectedLocation.code) }}] - {{ selectedLocation.stand.name }}</p>
        <p v-else-if="!selectedLocation.stand && getLang() === lang_fr" id="tooltip-name">[{{ locationNameFR(selectedLocation.code) }}]</p>
        <p v-if="selectedLocation.stand && getLang() === lang_en" id="tooltip-name">[{{ locationNameEN(selectedLocation.code) }}] - {{ selectedLocation.stand.name }}</p>
        <p v-else-if="!selectedLocation.stand && getLang() === lang_en" id="tooltip-name">[{{ locationNameEN(selectedLocation.code) }}]</p>

        <div class="stand-info" v-if="selectedLocation.stand">
          <div class="line">
            <div class="line-item">
              <label for="provider">{{ getLang().stand_info_provider }}</label>
              <input id="provider" type="text" v-model="provider.name" readonly>
            </div>
            <div class="line-item">
              <label for="booth-type">{{ getLang().stand_info_booth_type }}</label>
              <input id="booth-type" v-if="getLang() === lang_fr" type="text" :value="standTypeFR(selectedLocation.stand.id_stand_type)" readonly>
              <input id="booth-type" v-if="getLang() === lang_en" type="text" :value="standTypeEN(selectedLocation.stand.id_stand_type)" readonly>
            </div>
          </div>
        </div>
        <div class="no-stand" v-else-if="selectedLocation.code.includes('S')">
          <p>{{ getLang().stand_info_special_booth }}</p>
        </div>
        <div v-else class="no-stand">
          <p>{{ getLang().stand_info_no_booth }}</p>
        </div>

        <div class="events-info" v-if="selectedLocation.events.length > 0">
          <p class="events-info-title">{{ getLang().stand_info_table_title }}</p>
          <table class="event-table">
            <thead>
            <tr class="event-table-head">
              <th class="event-table-head-item">{{ getLang().stand_info_table_head_name }}</th>
              <th class="event-table-head-item">{{ getLang().stand_info_table_head_capacity }}</th>
              <th class="event-table-head-item">{{ getLang().stand_info_table_head_time }}</th>
            </tr>
            </thead>
            <tbody>
            <tr class="event-table-body" v-for="(event, id_event) in selectedLocation.events" :key="id_event">
              <td class="event-table-body-item">{{ event.name }}</td>
              <td class="event-table-body-item">{{ event.max_capacity }}</td>
              <td class="event-table-body-item">{{ moment(event.starting_time) }} - {{ moment(event.finishing_time) }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <router-link id="stand-info-button" v-if="selectedLocation.stand" :to="{ name:'BoutiqueStand', params: { id:selectedLocation.stand.id_stand } }">
          <button class="stand-info-button" @click="closeTooltip">{{ getLang().stand_info_booth_shop }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
}

.tooltip {
  position: absolute;
  align-self: center;
  height: fit-content;
  width: 30%;
  border: 2px solid var(--scnd3);
  background-color: var(--background);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.tooltip-content {
  margin: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
}

#tooltip-name {
  text-align: center;
  color: var(--white);
  font-size: 1.5em;
  margin-bottom: 5px;
}

.stand-info {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.line-item {
  width: 100%;
  margin: 0 10px;
}

label {
  color: white;
  align-self: start;
}
input {
  align-self: start;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: none;
}

.no-stand {
  height: 100%;
}

.no-stand p {
  font-size: 1.1em;
  text-align: center;
  margin-top: 10px;
}

.events > p {
  font-size: 1.3em;
  margin-bottom: 5px;
}

.events-info {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}

.events-info-title {
  align-self: start;
  margin-left: 10px;
  margin-bottom: 5px;
}

.event-table {
  width: calc(100% - 20px);
  text-align: center;
  border: solid 1px white;
  border-collapse: collapse;
}

thead {
  background-color: white;
  color: black;
}

.event-table-body-item {
  border: solid 1px white;
  height: 20px;
}


#stand-info-button {
  margin-top: auto;
  width: fit-content;
}

.stand-info-button {
  margin: 10px;
  font-size: 1.2em;
  border: none;
  background-color: var(--scnd2);
  color: var(--white);
  padding: 10px;
  border-radius: 13px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px var(--scnd2);
}

.stand-info-button:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 15px var(--scnd3);
  cursor: pointer;
}


.close-container {
  position: absolute;
  display: flex;
  align-items: center;
  margin: auto;
  width: 35px;
  height: 35px;
  cursor: pointer;
  top: 5px;
  right: 5px;
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
</style>