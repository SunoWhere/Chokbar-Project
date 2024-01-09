<script>
import MapTooltip from "@/components/Global/Map/MapTooltip.vue";
import PlanningInfo from "@/components/Global/Map/PlanningInfo.vue";
import AddEventPopup from "@/components/Global/Map/AddEventPopup.vue";

import { eventsService } from "@/services";
import moment from "moment";

export default {
  components: {
    AddEventPopup,
    PlanningInfo,
    MapTooltip
  },
  name: 'InteractiveMap',
  data() {
    return {
      events: [],

      selectedBoothId: null,
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
      selectedDayId: 0,
      selectedDayString: "Lundi",

      selectedEvent: null,
    }
  },
  methods: {
    openTooltip(e) {
      this.selectedBoothId = e.target.id;
      this.$store.commit("setShowMapTooltip", true);
    },
    openPlanningInfo(id_event) {
      this.getEventById(id_event);
      this.$store.commit("setShowPlanningInfo", true);
    },
    openAddEvent() {
      this.$store.commit("setShowAddEvent", true);
    },
    nextDay() {
      if(this.selectedDayId === 4) return;
      this.selectedDayId++;
      this.selectedDayString = this.days[this.selectedDayId];
    },
    previousDay() {
      if(this.selectedDayId === 0) return;
      this.selectedDayId--;
      this.selectedDayString = this.days[this.selectedDayId];
    },
    moment(date) {
      moment.locale("fr");
      return moment(date).format("LT");
    },

    async getAllEvents() {
      try {
        const res = await eventsService.getEvents();
        this.events = res.data;
      } catch(err) {
        console.log(err);
      }
    },
    async getEventById(id) {
      try {
        const res = await eventsService.getEventById(id);
        this.selectedEvent = res.data;
      } catch(err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getAllEvents();

    this.$store.watch(
        () => this.$store.getters.getEventList,
        eventList => {
          this.events = eventList.data;
        }
    );
  },
  metaInfo() {
    return {
      title: 'Carte Interactive'
    }
  }
}
</script>

<template>
  <div class="container">
    <PlanningInfo v-if="this.$store.getters.getShowPlanningInfo" :event="selectedEvent[0]"/>
    <AddEventPopup v-if="this.$store.getters.getShowAddEvent"/>
    <MapTooltip v-if="this.$store.getters.getShowMapTooltip" :booth-id="selectedBoothId"/>
    <div class="planning-container">
      <ul class="timetable">
        <li class="table-head">
          <button class="day-selector" id="previous-day" @click="previousDay"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
          <span id="day-string">{{ this.selectedDayString }}</span>
          <button class="day-selector" id="next-day" @click="nextDay"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        </li>

        <li class="table-event hover-effect" v-for="(event, id_event) in events" :key="id_event" @click="openPlanningInfo(id_event)">
          <span class="event-name">{{ event.name }}</span>
          <span class="event-time">{{ moment(event.starting_time) }} - {{ moment(event.finishing_time) }}</span>
        </li>
      </ul>

      <div class="table-event-add" v-if="this.$store.state.isConnected">
        <button id="add" class="event-button" @click="openAddEvent">Ajouter</button>
      </div>
    </div>

    <div class="map-container">
      <svg class="map" width="100%" height="100%" viewBox="0 0 2236 1578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;">
        <g id="map-bg" transform="matrix(1,0,0,1,-783.554,-346.752)">
          <path d="M814.076,377.274L814.076,1302.49L1427.67,1893.6L2988.97,1893.6L2988.97,377.274L814.076,377.274Z" style="fill:none; stroke-width:33.86px;"/>
          <g transform="matrix(1.27907,0,0,1,-53.1968,0)">
              <rect id="A02" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-290.925,0)">
              <rect id="A01" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.4186,0,0,1,-924.706,0)">
              <rect id="A03" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.4186,0,0,1,-857.885,260.216)">
              <rect id="A11" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,1,6.12323e-17,1557.36,3774.83)">
              <rect id="A19" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.01497e-16,-3.2907,1,6.12323e-17,2275.92,4680.76)">
              <rect id="Scène" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.01497e-16,-3.2907,1,6.12323e-17,271.288,4453.47)">
              <rect id="Restauration" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,1414.22,4247.9)">
              <rect id="Espace VIP" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,405.576,3768.41)">
              <rect id="A18" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,651.244,4247.9)">
              <rect id="A25" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,568.116,0)">
              <rect id="A04" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,744.806,0)">
              <rect id="A05" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,921.496,0)">
              <rect id="A06" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1139.3,0)">
              <rect id="A07" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1373.69,0)">
              <rect id="A08" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-181.699,260.216)">
              <rect id="A09" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-5.00853,260.216)">
              <rect id="A10" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,652.921,260.216)">
              <rect id="A12" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,340.822,1098.62)">
              <rect id="A24" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,82.7905,537.212)">
              <rect id="A17" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-168.302,537.212)">
              <rect id="A16" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,891.935,260.216)">
              <rect id="A13" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1130.95,260.216)">
              <rect id="A14" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1367.39,260.216)">
              <rect id="A15" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1272.39,537.212)">
              <rect id="A21" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1095.7,537.212)">
              <rect id="A20" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1272.39,707.477)">
              <rect id="A23" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1095.7,707.477)">
              <rect id="A22" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1083.4,1098.62)">
              <rect id="A26" v-on:click="e => openTooltip(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>

.container {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
}

.map-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.map {
  background-color: white;
  height: auto;
  width: 70%;
  border-radius: 17px;
}

.map path {
  stroke: black ;
}

.map rect {
  fill: rgb(235,235,235);
  stroke: black;
  stroke-width: 13px;
  transition: fill 0.15s ease;
}

.map rect:hover {
  cursor: pointer;
  fill: var(--scnd3);
}




.planning-container {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timetable {
  width: 100%;
  height: 100%;
  background-color: white;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
}

.table-head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 1.5em;
  background-color: #ddd;
  padding: 5px;
}

.day-selector {
  text-align: center;
  border: none;
  padding: 5px 10px;
  font-size: 1.2em;
  background-color: var(--scnd2);
  color: var(--white);
  box-shadow: 0 0 10px var(--scnd2);
  border-radius: 13px;
  transition: all 0.3s ease;
}

.day-selector:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 10px var(--scnd3);
  cursor: pointer;
}

#day-string {
  text-align: center;
  font-size: 1.2em;
  width: 30%;
  margin: 0 10px;
}

.table-event {
  display: flex;
  justify-content: space-between;
  padding: 7px;
  margin: 3px;
  border-radius: 13px;
  transition: background-color 0.3s ease;
}

.table-event.hover-effect:hover {
  background-color: var(--component-background);
  cursor: pointer;
}

.table-event-add {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
}

.event-button {
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

.event-button:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 15px var(--scnd3);
  cursor: pointer;
}

</style>