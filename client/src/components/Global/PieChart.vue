<template>
  <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import {statsService} from "@/services";

export default {
  data() {
    return {
      chartData: null,
      chart: null,
    }
  },
  methods: {
    async fetchTicketSales() {
      try {
        const response = await statsService.getTicketSales();
        const labels = response.map(item => item.name);
        const data = response.map(item => parseInt(item.tickets_total));

        this.chartData = {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: ['red', 'green', 'blue'],
          }],
        };
        this.updateChart();
      } catch (error) {
        console.error("Erreur lors de la récupération des ventes de tickets: ", error);
      }
    },
    renderPieChart() {
      const ctx = this.$refs.pieChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
    updateChart() {
      if (this.chart) {
        this.chart.data = this.chartData;
        this.chart.update();
      } else {
        this.renderPieChart();
      }
    }
  },
  async mounted() {
    await this.fetchTicketSales();
  },
};
</script>

<style>

</style>