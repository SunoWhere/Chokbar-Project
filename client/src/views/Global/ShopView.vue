<script>
import {standsService} from "@/services";
import StandCard from "@/components/Global/StandCard.vue";

export default {
  name: 'ShopView',
  components: {
    StandCard
  },
  metaInfo() {
    return {
      title: 'ShopView'
    }
  },
  data() {
    return {
      stands: [],
    }
  },
  mounted() {
    this.getStands();
  },
  methods: {
    async getStands() {
      try {
        this.stands = await standsService.getAllStands();
      } catch(error) {
        console.error(error);
      }
    },
  },
  computed: {
    standsInRows() {
      const standsCopy = [...this.stands];
      const standsInRows = [];
      while (standsCopy.length > 0) {
        standsInRows.push(standsCopy.splice(0, 4));
      }
      return standsInRows;
    },
  }
}
</script>

<template>
  <div class="main-content">
    <div class="card-table">
      <div v-for="(row, rowIndex) in standsInRows" :key="rowIndex" class="stand-card">
        <div v-for="(stand, columnIndex) in row" :key="columnIndex" class="stand-item">
          <StandCard :stand="stand"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  min-height: 100vh;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
}

.stand-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.stand-item {
  margin: 5px;
}

</style>