<script setup>
const props = defineProps({})
</script>

<template>
  <div class="card">
    <!-- Add dark gradient animation -->
  </div>
</template>

<style scoped>
.card {
  background: linear-gradient(90deg, #212529, #2c2f33, #212529);
  border: #ffffff13 1px solid !important;
  color: #fff;
  width: 100%;
  height: 75vh;
  background-size: 200% 100%;
  animation: darkGradientAnimation 3s linear infinite; /* Adjust the animation duration as needed */
}

@keyframes darkGradientAnimation {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
