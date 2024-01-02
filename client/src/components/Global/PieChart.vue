<template>
  <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    this.renderPieChart();
  },
  methods: {
    renderPieChart() {
      const ctx = this.$refs.pieChart.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['red', 'green', 'blue'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },
};
</script>

<style>
/* Ajoutez vos styles ici si nécessaire */
</style>