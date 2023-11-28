<script>
export default {
  props: {
    booth: {
      type: Object,
      required: true
    },
    top: {
      type: Number,
      required: true
    },
    left: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <div class="tooltip" :style="{ top: `${top}px`, left: `${left}px` }">
    <div class="tooltip-content">
      <p>Name: RAHHHHHHHHHHHHHHHHH</p>
      <p>Category: IUHSDFGYSTQDGUYSDQFGUSYDHFG</p>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  background-color: lime;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 9999;
}

.tooltip-content {
  /* Style your tooltip content as needed */
}
</style>