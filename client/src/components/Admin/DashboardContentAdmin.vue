<template>
  <div id="dashboard-content-container">
    <div id="cards">
      <InfosCard :number="totalUsers" :text="getLang().dashboard_admin_total_users" data-type="user"/>
      <InfosCard :number="totalProviders" :text="getLang().dashboard_admin_total_providers" data-type="user"/>
      <InfosCard :number="totalProducts" :text="getLang().dashboard_admin_total_products" data-type="product"/>
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
import {statsService} from "@/services";

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
      totalUsers: '',
      totalProviders: '',
      totalProducts: '',
    }
  },
  methods: {
    async fetchTotalUsers() {
      try {
        const usersCount = await statsService.getTotalUsers();
        this.totalUsers = usersCount.users_total;
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre total d'utilisateurs: ", error);
        this.totalUsers = 'Erreur';
      }
    },
    async fetchTotalProviders() {
      try {
        const providersCount = await statsService.getTotalProviders();
        this.totalProviders = providersCount.providers_total;
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre total d'utilisateurs: ", error);
        this.totalProviders = 'Erreur';
      }
    },async fetchTotalProductsSales() {
      try {
        const productsCount = await statsService.getTotalProductsSales();
        if(productsCount.length === 0) {
          this.totalProducts = '0';
        }
        else {
          this.totalProducts = productsCount.products_total;
        }
        console.log(this.totalProducts)
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre total d'utilisateurs: ", error);
        this.totalProducts = 'Erreur';
      }
    },
  },
  mounted() {
    this.fetchTotalUsers();
    this.fetchTotalProviders();
    this.fetchTotalProductsSales();
  },
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