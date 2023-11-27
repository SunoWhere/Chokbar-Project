<script>
import MapTooltip from "@/components/MapTooltip.vue";
export default {
  components: {
    MapTooltip
  },
  name: 'InteractiveMap',
  data() {
    return {
      selectedBooth: null,
      selectedBoothId: "---",
      tooltipTop: 0,
      tooltipLeft: 0
    }
  },
  props: {
    line_color: String
  },
  methods: {
    changeSelectedBooth(e) {
      this.tooltipTop = e.clientY;
      this.tooltipLeft = e.clientX;
      this.selectedBooth = e.target;
      this.selectedBoothId = e.target.id;
    },
  }
}
</script>

<template>
  <div class="container">
    <div class="map-container">
      <h1 id="selected-booth">Selected Booth: {{ this.selectedBoothId }}</h1>
      <svg class="map" width="100%" height="100%" viewBox="0 0 2236 1578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;">
        <g transform="matrix(1,0,0,1,-783.554,-346.752)">
          <path d="M814.076,377.274L814.076,1302.49L1427.67,1893.6L2988.97,1893.6L2988.97,377.274L814.076,377.274Z" style="fill:none;stroke-width:33.86px;"/>
          <g transform="matrix(1.27907,0,0,1,-53.1968,0)">
              <rect id="A02" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-290.925,0)">
              <rect id="A01" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.4186,0,0,1,-924.706,0)">
              <rect id="A03" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.4186,0,0,1,-857.885,260.216)">
              <rect id="A11" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,1,6.12323e-17,1557.36,3774.83)">
              <rect id="A19" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.01497e-16,-3.2907,1,6.12323e-17,2275.92,4680.76)">
              <rect id="Scène" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(2.01497e-16,-3.2907,1,6.12323e-17,271.288,4453.47)">
              <rect id="Bouffe" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,1414.22,4247.9)">
              <rect id="Espace VIP" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,405.576,3768.41)">
              <rect id="A18" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.48097e-16,-2.4186,2.20755,1.35173e-16,651.244,4247.9)">
              <rect id="A25" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,568.116,0)">
              <rect id="A04" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,744.806,0)">
              <rect id="A05" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,921.496,0)">
              <rect id="A06" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1139.3,0)">
              <rect id="A07" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1373.69,0)">
              <rect id="A08" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-181.699,260.216)">
              <rect id="A09" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-5.00853,260.216)">
              <rect id="A10" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,652.921,260.216)">
              <rect id="A12" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,340.822,1098.62)">
              <rect id="A24" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,82.7905,537.212)">
              <rect id="A17" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,-168.302,537.212)">
              <rect id="A16" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,891.935,260.216)">
              <rect id="A13" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1130.95,260.216)">
              <rect id="A14" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1367.39,260.216)">
              <rect id="A15" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1272.39,537.212)">
              <rect id="A21" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1095.7,537.212)">
              <rect id="A20" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1272.39,707.477)">
              <rect id="A23" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1095.7,707.477)">
              <rect id="A22" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
          <g transform="matrix(1.27907,0,0,1,1083.4,1098.62)">
              <rect id="A26" v-on:click="e => changeSelectedBooth(e)" x="973.413" y="542.788" width="138.14" height="170.265" />
          </g>
        </g>
      </svg>
      <MapTooltip v-if="selectedBoothId !== '---'" :booth="selectedBooth" :top="tooltipTop" :left="tooltipLeft" />
    </div>
    <div class="planning-container">

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
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#selected-booth {
  position: absolute;
  top: 80px;
  color: white;
}

.map {
  background-color: white;
  height: auto;
  width: 90%;
}

.map path {
  stroke: black;
}

.map rect {
  fill: rgb(235,235,235);
  stroke: black;
  stroke-width: 13.07px;
}

.map rect:hover {
  cursor: pointer;
  fill: chartreuse;
}

.planning-container {
  width: 40%;
  background-color: rgba(255, 0, 0, 0.2);
}
</style>