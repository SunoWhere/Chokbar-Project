<script setup>

</script>

<template>
  <div class="dashboard-container">
    <table class="tab">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>

  </div>
</template>

<style scoped>

td, th{
  border: 1px solid #ddd;
  padding: 8px;
  background: #2b2a31;
}

.dashboard-container{
  background: greenyellow;
  height: calc(100vh - 80px);
  width: 100%;
}

.tab{
  height: 60%;
  width: 90%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
}

</style>