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
      window.location.reload();
    }
  }
}
</script>

<template>
  <div class="tooltip">
    <button id="close-btn" @click="closeTooltip"><font-awesome-icon icon="fa-solid fa-x" /></button>
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

#close-btn {
  position: absolute;
  background-color: transparent;
  border: none;
  right: 10px;
  top: 5px;
  color: var(--white);
  font-size: 1.5em;
  cursor: pointer;
}
</style>