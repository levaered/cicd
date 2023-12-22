<script setup>
import People from './People.vue';
import LoadingPeople from './LoadingPeople.vue';
import { usePeopleStore } from '../stores/PeopleStore'
const people = usePeopleStore();
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Pilots</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="people.loading">
                    <LoadingPeople/>
                </div>
                <div class="modal-body" v-else>
                    <People v-for="person in people.people" :person="person"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal-body{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
