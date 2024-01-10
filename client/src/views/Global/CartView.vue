<script>

export default {
  name: 'CartView',
  components: {

  },
  metaInfo() {
    return {
      title: 'CartView'
    }
  },
}
</script>

<template>
  <div class="main-content">
    <div class="content">
      <div class="left-side">
        <p>Article</p>
      </div>
      <div class="right-side">
        <p>Total</p>
        <button class="checkout-btn">Continue to checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100vh;
  color: var(--white);
}

.content {
  width: 100%;
  min-height: 100vh;
  padding: 50px 15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.left-side {
  width: 600px;
  height: 100%;
  margin-left: 120px;
  background-color: red;
}

.right-side {
  width: 450px;
  height: 100%;
  margin-right: 150px;
  background-color: blue;
}

.checkout-btn {
  background-color: var(--white);
  margin-right: 10px;
  border: none;
  color: black;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: rgb(215, 215, 215);
}

</style>