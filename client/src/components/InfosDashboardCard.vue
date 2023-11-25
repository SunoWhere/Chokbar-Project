<template>
  <div id="card-container">
    <font-awesome-icon id="icon" :icon="[icon[0], icon[1]]" />
    <h2>{{number}}</h2>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'InfosDashboardCard',
  props: {
    dataType: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      if (this.dataType === 'user') {
        return  ['fas', 'user']
      } else if (this.dataType === 'product') {
        return ['fas', 'p'];
      } else {
        return ['none', 'none'];
      }
    }
  }
};
</script>

<style>
#card-container {
  background-color: var(--c-asparagus);
  width: 25%;
  height: 7%;
  margin-bottom: 40px;
  border-radius: 18px;

  padding: 1.5em 1em;
  box-shadow: 0 0 30px var(--c-ancient-green);
}

@media (max-width:1112px) {
  #card-container {
    width: 80%;
  }
}

#icon {
  height: 3rem;
}



</style>