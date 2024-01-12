<script>
import { eventsService } from "@/services";
import { locationsService } from "@/services/locations.service";

export default {
  props: {
    selectedEvent: Object
  },
  data() {
    return {
      locations: [],
      errMessage: null,
      days: [
        {
          name: "Lundi",
          timestamp: "2024-05-20"
        },
        {
          name: "Mardi",
          timestamp: "2024-05-21"
        },
        {
          name: "Mercredi",
          timestamp: "2024-05-22"
        },
        {
          name: "Jeudi",
          timestamp: "2024-05-23"
        },
        {
          name: "Vendredi",
          timestamp: "2024-05-24"
        },
        {
          name: "Samedi",
          timestamp: "2024-05-25"
        }
      ],
      selectedDay: null,
      startingTime: null,
      finishingTime: null,
      editEvent: {
        name: this.selectedEvent.name,
        max_capacity: this.selectedEvent.max_capacity,
        starting_time: this.selectedEvent.starting_time,
        finishing_time: this.selectedEvent.finishing_time,
        description_en: this.selectedEvent.description_en,
        description_fr: this.selectedEvent.description_fr,
        id_location: this.selectedEvent.id_location,
      }
    }
  },
  methods: {
    closeEditEventPopup() {
      this.$store.commit("setShowEditEvent", false);
    },
    concatTimestamp() {
      this.editEvent.starting_time = `${this.selectedDay.timestamp}T${this.startingTime}:00.000Z`;
      this.editEvent.finishing_time = `${this.selectedDay.timestamp}T${this.finishingTime}:00.000Z`;
    },
    splitTimestamp() {
      let day = this.editEvent.starting_time.split("T")[0];
      let startingTime = `${this.editEvent.starting_time.split("T")[1].split(":")[0]}:${this.editEvent.starting_time.split("T")[1].split(":")[1]}`;
      let finishingTime = `${this.editEvent.finishing_time.split("T")[1].split(":")[0]}:${this.editEvent.finishing_time.split("T")[1].split(":")[1]}`;

      this.selectedDay.timestamp = day;
      this.startingTime = startingTime;
      this.finishingTime = finishingTime;
    },
    getLang() {
      return this.$store.state.lang;
    },

    async getLocations() {
      try {
        const res = await locationsService.getLocations();
        this.locations = res.data;
      } catch(err) {
        console.log(err);
      }
    },
    submitForm() {
      if(this.selectedDay && this.startingTime && this.finishingTime) {
        eventsService.editEvent(this.editEvent, this.selectedEvent.id_event)
            .then(async res => {
              this.errMessage = res.data;
              this.closeEditEventPopup();


              const updatedEventList = await eventsService.getEvents();
              await this.$store.dispatch('updateEventList', updatedEventList);
            })
            .catch(err => {
              this.errMessage = err;
              console.log(err);
            });
      } else {
        this.errMessage = "Il manque des infos chef";
      }
    }
  },
  created() {
    this.getLocations();
    this.splitTimestamp();
  }
}
</script>

<template>
  <div class="add-event-container">
    <div class="content">
      <div class="close-container" @click="closeEditEventPopup">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </div>
      <div class="add-event-header"><p>{{ getLang().event_edit_title }} {{ selectedEvent.name }}</p></div>

      <div v-if="errMessage" class="err-msg">{{ errMessage }}</div>

      <form class="edit-form" action="#" method="post" @submit.prevent="submitForm">

        <div class="item-group">
          <div class="group">
            <label for="name">{{ getLang().event_edit_form_name }}</label>
            <input id="name" type="text" v-model="editEvent.name" required>
          </div>

          <div class="group">
            <label for="max-capacity">{{ getLang().event_edit_form_capacity }}</label>
            <input id="max-capacity" type="number" v-model="editEvent.max_capacity" required>
          </div>
        </div>

        <div class="item-group">
          <div class="group">
            <label for="description">Description FR</label>
            <textarea id="description" cols="30" rows="10" v-model="editEvent.description_fr" required></textarea>
          </div>

          <div class="group">
            <label for="description">Description EN</label>
            <textarea id="description" cols="30" rows="10" v-model="editEvent.description_en" required></textarea>
          </div>
        </div>

        <div class="item-group">
          <div class="group">
            <label for="jour">{{ getLang().event_edit_form_day }}</label>
            <select id="jour" v-model="selectedDay" @change="concatTimestamp" required>
              <option v-for="(day, id_day) in days" :key="id_day" :value="day">{{ day.name }}</option>
            </select>
          </div>

          <div class="group">
            <label for="location">{{ getLang().event_edit_form_location }}</label>
            <select id="location" v-model="editEvent.id_location" required>
              <option :value="editEvent.id_location"></option>
              <option v-for="(location, id_location) in locations" :key="id_location" :value="id_location+1">{{ location.code }}</option>
            </select>
          </div>
        </div>

        <div class="item-group">
          <div class="group">
            <label for="starting-time">{{ getLang().event_edit_form_starting_time }}</label>
            <input id="starting-time" type="time" v-model="startingTime" @change="concatTimestamp" required>
          </div>

          <div class="group">
            <label for="finishing-time">{{ getLang().event_edit_form_finishing_time }}</label>
            <input id="finishing-time" type="time" v-model="finishingTime" @change="concatTimestamp" required>
          </div>
        </div>

        <input id="sumbit-add" type="submit" :value="getLang().event_edit_form_submit">
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-event-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  position: absolute;
  height: fit-content;
  width: 50%;
  border: 2px solid var(--scnd3);
  background-color: var(--background);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.add-event-header {
  height: fit-content;
  border-radius: 17px;
}

.add-event-header > p {
  color: white;
  font-size: 1.5em;
  margin: 7px 15px;
}

.err-msg {
  color: white;
  padding: 7px;
  margin: 15px auto;
  width: 80%;
  background-color: var(--scnd2);
  box-shadow: 0 0 10px var(--scnd2);
  border-radius: 13px;
}

.edit-form {
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  margin: 20px auto auto;
}

.item-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.group {
  width: 100%;
  margin: 0 10px;
}

label {
  color: white;
  align-self: start;
}

input[type="number"],
input[type="text"],
input[type="time"],
select,
textarea {
  align-self: start;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: none;
}

#sumbit-add {
  margin: 10px auto 30px;
  border: none;
  background-color: var(--scnd2);
  box-shadow: 0 0 10px var(--scnd2);
  color: white;
  font-size: 1.1em;
  padding: 10px;
  width: 30%;
  border-radius: 13px;
  transition: all 0.3s ease;
}

#sumbit-add:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 10px var(--scnd3);
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