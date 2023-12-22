<script setup>
import Card from './components/Card.vue'
import Pagination from './components/Pagination.vue'
import Modal from './components/Modal.vue'
import LoadingCard from './components/LoadingCard.vue'
import { onMounted } from 'vue';
import { useStarshipStore } from './stores/StarshipStore'

const starships = useStarshipStore();

onMounted(async () => {
  starships.getStarships();
});

</script>
<template>
  <Modal />
  <div class="title">
    <h1>💫Star Ships</h1>
    <h6>Amount of starships: <span class="badge text-bg-info" v-if="starships">{{ starships.count }}</span></h6>
  </div>
  <div class="wrapper" v-if="starships.loading">
    <LoadingCard v-for="i in 10" :key="i" />
  </div>

  <div class="wrapper" v-else>
    <Card v-for="starship in starships.starships" :starship="starship" />
  </div>
  <Pagination />
</template>

<style scoped>
.wrapper {
  margin-top: 12vw;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100% !important;
  flex-wrap: wrap;
  gap: 1rem
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5vw;
  position: fixed;
  background-color: #212529;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  padding-left: 5vw;
  padding-right: 5vw;
}

.badge {
  margin-left: 0.5rem;
}

h6 {
  font-weight: 400;
  opacity: 0.75
}
</style>
