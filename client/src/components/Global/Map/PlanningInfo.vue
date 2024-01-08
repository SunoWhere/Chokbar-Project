<script>
  export default {
    props: {
      title: String,
      time: String,
      provider: String
    },
    methods: {
      closeInfo() {
        this.$store.commit("setShowPlanningInfo", false);
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
        <p>{{ title }}</p>
        <p>{{ startingTime }} - {{ endingTime }}</p>
        <p></p>
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