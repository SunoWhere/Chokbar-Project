<script>
  import moment from "moment-timezone";
  import {lang_fr} from "@/datas/lang_fr";
  import {lang_en} from "@/datas/lang_en";
  import {eventsService} from "@/services";

  export default {
    computed: {
      lang_en() {
        return lang_en
      },
      lang_fr() {
        return lang_fr
      }
    },
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
      openEditPopup() {
        this.$store.commit("setShowEditEvent", true);
      },
      moment(date) {
        return moment(date).tz("Atlantic/Azores").format("HH:mm");
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
      deleteEvent() {
        eventsService.deleteEvent(this.selectedEvent.id_event)
          .then(async () => {
            this.closeInfo();

            const updatedEventList = await eventsService.getEvents();
            await this.$store.dispatch('updateEventList', updatedEventList);
          })
          .catch(err => {
              console.error(err);
          });
      }
    }
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

        <div class="event-info">
          <div class="line">
            <div class="line-item">
              <label for="location">{{ getLang().planning_info_location }}</label>
              <input v-if="getLang() === lang_en" id="location" type="text" :value="locationNameEN(selectedEvent.location.code)" readonly>
              <input v-if="getLang() === lang_fr" id="location" type="text" :value="locationNameFR(selectedEvent.location.code)" readonly>
            </div>
            <div class="line-item">
              <label for="capacity">{{ getLang().planning_info_capacity }}</label>
              <input id="capacity" type="text" :value="selectedEvent.max_capacity" readonly>
            </div>
          </div>
          <div class="line">
            <div class="line-item">
              <label for="starting-time">{{ getLang().planning_info_starting_time }}</label>
              <input id="starting-time" type="time" :value="moment(selectedEvent.starting_time)" readonly>
            </div>
            <div class="line-item">
              <label for="finishing-time">{{ getLang().planning_info_finishing_time }}</label>
              <input id="finishing-time" type="time" :value="moment(selectedEvent.finishing_time)" readonly>
            </div>
          </div>
            <div class="line">
              <div class="line-item">
                <label for="description">Description</label>
                <textarea v-if="getLang() === lang_en" id="description" :value="selectedEvent.description_en" readonly></textarea>
                <textarea v-if="getLang() === lang_fr" id="description" :value="selectedEvent.description_fr" readonly></textarea>
              </div>
            </div>
        </div>

        <div class="event-controls" v-if="this.$store.state.isConnected">
          <button class="event-controls-button" @click="openEditPopup">{{ getLang().planning_info_controls_edit }}</button>
          <button class="event-controls-button" @click="deleteEvent">{{ getLang().planning_info_controls_delete }}</button>
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
  height: fit-content;
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
input,
textarea {
  align-self: start;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: none;
}

textarea {
  height: 100px
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