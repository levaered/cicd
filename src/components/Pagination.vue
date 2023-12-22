<script setup>
import { useStarshipStore } from '../stores/StarshipStore'

const starships = useStarshipStore();
</script>

<template>
    <div class="container">
        <nav aria-label="..." data-bs-theme="dark">
            <ul class="pagination">
                
                <li v-for="(index, item) in starships.pageCount" class="page-item numbers" :class="{ 'active': index === starships.page }" @click="starships.moveToPageByNumber(index)"><a class="page-link" href="#">{{index}}</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.card {
    background-color: #1b1f22 !important;
    border: #ffffff13 1px solid !important;
    color: #fff;
    width: 100%;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.numbers:hover{
    cursor: pointer;
}
</style>
