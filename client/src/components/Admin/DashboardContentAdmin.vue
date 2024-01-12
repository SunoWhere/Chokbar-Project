<template>
  <div id="dashboard-content-container">
    <div id="cards">
      <InfosCard :number="2500" :text="getLang().dashboard_admin_total_users" data-type="user"/>
      <InfosCard :number="60" :text="getLang().dashboard_admin_total_providers" data-type="user"/>
      <InfosCard :number="1645" :text="getLang().dashboard_admin_total_products" data-type="product"/>
    </div>
    <div id="charts">
      <div id="first-chart">
        <Bar :data="data" :options="options" />
      </div>
      <div id="second-chart">
        <PieChart/>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/Global/PieChart.vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

//TODO: Implémenter les messages d'erreur pour les popup

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

import InfosCard from "@/components/Admin/InfosDashboardCard.vue";

export default {
  name: 'DashboardContent',
  components: {
    Bar,
    PieChart,
    InfosCard
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      },
    }
  },
  methods: {
    getLang() {
      return this.$store.state.lang;
    },
  }
};



</script>

<style>

#dashboard-content-container {
  width: auto;
  padding: 3% 3%;
  display: flex;
  flex-direction: column;
}

#charts {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
}

#first-chart {
  width: 40%;
  background-color: var(--component-background);
  border-radius: 18px;
}

#second-chart {
  width: 40%;
  background-color: var(--component-background);
  border-radius: 18px;
}

#cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width:1112px) {

  #cards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}

</style>