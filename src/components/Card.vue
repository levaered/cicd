<script setup>
import { usePeopleStore } from '../stores/PeopleStore'
const props = defineProps({
  starship: {
    type: Object,
    required: true
  }
})
const people = usePeopleStore();
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ starship.name }}</h5>
      <div class="item model">
        <span class="title">MODEL</span>
        <span class="value">{{starship.model}}</span>
      </div>
      <div class="item manufacturer">
        <span class="title">MANUFACTURER</span>
        <span class="value">{{starship.manufacturer}}</span>
      </div>
      <div class="item cost-in-credits">
        <span class="title">COST IN CREDITS</span>
        <span class="value">{{starship.cost_in_credits}}</span>
      </div>
      <div class="item max-atmosphering-speed">
        <span class="title">MAX ATMOSPHERING SPEED</span>
        <span class="value">{{starship.max_atmosphering_speed}}</span>
      </div>
      <div class="item pilots">
        <div class="value-container">
          <span class="title">PILOTS</span>
          <span class="value pilots-badge">{{starship.pilots.length}}</span>
        </div>
        <button v-if="starship.pilots.length === 0" type="button" class="btn btn-primary disabled" >See Pilots</button>
        <button v-else type="button" class="btn btn-primary" @click="people.getPeople(starship.pilots)" data-bs-toggle="modal" data-bs-target="#exampleModal">See Pilots</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #1b1f22 !important;
  border: #ffffff13 1px solid !important;
  color: #fff;
  width: 100%;
  height: 100%;
}
.card:hover{
  background-color: #1b1f22b8 !important;
}
.item{
  width: 100%;
  padding: 1rem;
  border: 1px solid #ffffff06;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.model{
  background-color: rgba(156, 63, 255, 5%);
  color: rgba(156, 63, 255);
}
.manufacturer{
  background-color: rgba(170, 141, 26, 0.05);
  color: rgba(170, 141, 26);
}
.cost-in-credits{
  background-color: rgba(225, 58, 58, 0.05);
  color: rgba(225, 58, 58);
}
.max-atmosphering-speed{
  background-color: rgba(25, 119, 159, 0.05);
  color: rgb(39, 146, 192);
}
.pilots{
  background-color: rgba(35, 90, 15, 0.05);
  color: rgb(72, 168, 38);
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
}
.value-container{
  display: flex;
  flex-direction: column;
}
.title{
  font-weight: 500;
  font-size: 14px;
}
.value{
  opacity: 0.85;
}
</style>
