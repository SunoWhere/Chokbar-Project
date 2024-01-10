<script>
  import moment from "moment-timezone";

  export default {
    data() {
      return {
      }
    },
    props: {
      selectedEvent: Object
    },
    methods: {
      closeInfo() {
        this.$store.commit("setShowPlanningInfo", false);
      },
      moment(date) {
        return moment(date).tz("Atlantic/Azores").format("HH:mm");
      },
      locationName(locationCode) {
        switch (locationCode) {
          case "S01": return "Restauration";
          case "S02": return "Scène";
          case "S03": return "Espace VIP";
          default: return locationCode;
        }
      }
    },
  }
</script>

<template>
  <div class="planning-info">
    <div class="info">
      <div class="close-container" @click="closeInfo">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </div>

      <div class="content">
        <div class="event-info-header"><p>{{ selectedEvent.name }}</p></div>

        <ul class="event-info">
          <li id="time" class="event-info-item">Horaire: {{ moment(selectedEvent.starting_time) }} - {{ moment(selectedEvent.finishing_time) }}</li>
          <li id="location" class="event-info-item">Emplacement: {{ locationName(selectedEvent.location.code) }}</li>
          <li id="max-capacity" class="event-info-item">Capacité: {{ selectedEvent.max_capacity }}</li>
          <li id="description-fr" class="event-info-item">Description: {{ selectedEvent.description_fr }}</li>
        </ul>
        <div class="event-controls" v-if="this.$store.state.isConnected">
          <button class="event-controls-button">Modifier</button>
          <button class="event-controls-button">Supprimer</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.planning-info {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
}

.info {
  position: absolute;
  align-self: center;
  height: 50%;
  width: 30%;
  border: 2px solid var(--scnd3);
  background-color: var(--background);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-info-header {
  height: fit-content;
  border-radius: 17px;
}

.event-info-header > p {
  color: white;
  font-size: 1.5em;
  margin: 7px 15px;
}

.event-info {
  list-style: none;
}

.event-info-item {
  color: white;
  font-size: 1.1em;
}

.event-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: auto;
}

.event-controls-button {
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

.event-controls-button:hover {
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