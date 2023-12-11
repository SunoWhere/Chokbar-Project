<script>
export default {
  props: {
    boothId: {
      type: String,
      required: true
    }
  },
  methods: {
    closeTooltip() {
      this.$store.state.isMapTooltipOpen = false;
    }
  }
}
</script>

<template>
  <div class="tooltip">
    <div class="close-container" @click="closeTooltip">
      <div class="leftright"></div>
      <div class="rightleft"></div>
    </div>
    <div class="tooltip-content">
      <p id="booth-id">{{ boothId }}</p>
      <p>Prestataire: M. Ambert</p>
      <p>Catégorie: Stand</p>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  align-self: center;
  border: 1px solid var(--background);
  background-color: var(--background);
  padding: 10px;
  z-index: 9999;
  height: 30%;
  width: 20%;
  border-radius: 17px;
  box-shadow: 0 0 30px var(--background);
}

.tooltip-content {
  margin: 8px;
  color: var(--white);
  font-size: 1.2em;
}

#booth-id {
  text-align: center;
  color: var(--white);
  font-size: 1.3em;
  margin-bottom: 5px;
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