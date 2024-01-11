<script>
  import { eventsService } from "@/services";
  import { locationsService } from "@/services/locations.service";

  export default {
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
        addEvent: {
          name: "",
          max_capacity: null,
          starting_time: null,
          finishing_time: null,
          description_en: "english desc",
          description_fr: "french desc",
          id_location: null,

        }
      }
    },
    methods: {
      closeAddEventPopup() {
        this.$store.commit("setShowAddEvent", false);
      },
      concatTimestamp() {
        this.addEvent.starting_time = `${this.selectedDay.timestamp}T${this.startingTime}:00.000Z`;
        this.addEvent.finishing_time = `${this.selectedDay.timestamp}T${this.finishingTime}:00.000Z`;
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
          eventsService.addEvent(this.addEvent)
              .then(async res => {
                this.errMessage = res.data;
                this.closeAddEventPopup();

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
    }
  }
</script>

<template>
 <div class="add-event-container">
   <div class="content">
     <div class="close-container" @click="closeAddEventPopup">
       <div class="leftright"></div>
       <div class="rightleft"></div>
     </div>
     <div class="add-event-header"><p>Ajouter un Événement</p></div>

     <div v-if="errMessage" class="err-msg">{{ errMessage }}</div>

     <form class="edit-form" action="#" method="post" @submit.prevent="submitForm">

       <div class="item-group">
         <div class="group">
           <label for="name">Nom</label>
           <input id="name" type="text" v-model="addEvent.name" required>
         </div>

         <div class="group">
           <label for="max-capacity">Capacité</label>
           <input id="max-capacity" type="number" v-model="addEvent.max_capacity" required>
         </div>
       </div>

       <div class="item-group">
         <div class="group">
           <label for="description">Description FR</label>
           <textarea id="description" cols="30" rows="10" v-model="addEvent.description_fr" required></textarea>
         </div>

         <div class="group">
           <label for="description">Description EN</label>
           <textarea id="description" cols="30" rows="10" v-model="addEvent.description_en" required></textarea>
         </div>
       </div>

       <div class="item-group">
         <div class="group">
           <label for="jour">Jour</label>
           <select id="jour" v-model="selectedDay" @change="concatTimestamp" required>
             <option v-for="(day, id_day) in days" :key="id_day" :value="day">{{ day.name }}</option>
           </select>
         </div>

         <div class="group">
           <label for="location">Emplacement</label>
           <select id="location" v-model="addEvent.id_location" required>
             <option v-for="(location, id_location) in locations" :key="id_location" :value="id_location+1">{{ location.code }}</option>
           </select>
         </div>
       </div>

       <div class="item-group">
         <div class="group">
           <label for="starting-time">Heure de Début</label>
           <input id="starting-time" type="time" v-model="startingTime" @change="concatTimestamp" required>
         </div>

         <div class="group">
           <label for="finishing-time">Heure de Fin</label>
           <input id="finishing-time" type="time" v-model="finishingTime" @change="concatTimestamp" required>
         </div>
       </div>

       <input id="sumbit-add" type="submit" value="Ajouter">
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