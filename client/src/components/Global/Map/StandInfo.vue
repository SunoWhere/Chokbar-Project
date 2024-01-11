<script>
import { providersService } from "@/services";
import moment from "moment-timezone";
export default {
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
    locationName(locationCode) {
      switch (locationCode) {
        case "S01": return "Restauration";
        case "S02": return "Scène";
        case "S03": return "Espace VIP";
        default: return locationCode;
      }
    },
    standType(standTypeId) {
      switch (standTypeId) {
        case 1: return "Vente de biens";
        case 2: return "Nourriture";
        case 3: return "Démonstration";
        case 4: return "Autographes";
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
        <!-- TODO: rendre la chose plus sympa visuellement pcq c'est horrible -->

        <p v-if="selectedLocation.stand" id="booth-id">[{{ locationName(selectedLocation.code) }}] - {{ selectedLocation.stand.name }}</p>
        <p v-else id="booth-id">[{{ locationName(selectedLocation.code) }}]</p>

        <ul v-if="selectedLocation.stand" class="stand-info">
          <li class="stand-info-item">Prestataire: {{ provider.name }}</li>
          <li class="stand-info-item">Type: {{ standType(selectedLocation.stand.id_stand_type) }}</li>
        </ul>
        <div class="no-stand" v-else-if="selectedLocation.code.includes('S')">
          <p>Ceci est un emplacement spécial.</p>
        </div>
        <div v-else class="no-stand">
          <p>Il n'y a pas de stand associé à cet emplacement.</p>
        </div>

        <div class="events" v-if="selectedLocation.events.length > 0">
          <p>Événements:</p>
          <ul class="stand-events">
            <li class="stand-events-item" v-for="(event, id_event) in selectedLocation.events" :key="id_event">
                <p>{{ event.name }}</p>
                <p>{{ moment(event.starting_time) }} - {{ moment(event.finishing_time) }}</p>
            </li>
          </ul>
        </div>

        <router-link v-if="selectedLocation.stand" :to="{ name:'BoutiqueStand', params: { id:selectedLocation.stand.id_stand } }">
          <button class="stand-info-button" @click="closeTooltip">En savoir plus</button>
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
  height: 50%;
  width: 30%;
  border: 2px solid var(--scnd3);
  background-color: var(--background);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.tooltip-content {
  margin: 8px;
  color: white;
}

#booth-id {
  text-align: center;
  color: var(--white);
  font-size: 1.5em;
  margin-bottom: 5px;
}

.stand-info {
  list-style: none;
}

.stand-info-item {
  font-size: 1.2em;
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

.stand-events {
  list-style: none;
}

.stand-events-item {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  margin-bottom: 5px;

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