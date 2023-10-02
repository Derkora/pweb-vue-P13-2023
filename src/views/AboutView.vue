<template>
  <div class="about">
    <div>
      <h1 class="ToDo">To-do List</h1>
    </div>
    <ToDo />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import ToDo from '../components/ToDo.vue'
</script>