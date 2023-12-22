<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div class="card" style="width: 100%rem;">
        <div class="card-body">
            <h5 class="card-title">{{ person.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Height: </b> {{ person.height }}</li>
            <li class="list-group-item"><b>Eye Color: </b> 
                {{ person.eye_color }}
                <span class="color" :style="{ backgroundColor: person.eye_color }"></span>
            </li>
            <li class="list-group-item"><b>Mass: </b> {{ person.mass }}</li>
            <li class="list-group-item"><b>Hair Color: </b> {{ person.hair_color }}</li>
            <li class="list-group-item"><b>Skin Color: </b> {{ person.skin_color }}</li>
            <li class="list-group-item"><b>Birth Year: </b> {{ person.birth_year }}</li>
            <li class="list-group-item"><b>Gender: </b> {{ person.gender }}</li>
        </ul>
    </div>
</template>

<style scoped>
    .list-group-item{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .color{
        width: 20px;
        height: 20px;
        border-radius: 100000px;
        display: inline-block;
    }
</style>
