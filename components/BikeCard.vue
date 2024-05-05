<template>
  <div class="bike__item" v-for="bike in store.state.bikes" :key="bike.id">
    <Swiper :photos="bike.photo"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import store from '../store/index.js'
import Swiper from '../components/Swiper'

onMounted(async() => await store.dispatch('fetchBikes'))
</script>

<style lang="scss" scoped>
.bike__item {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  border: 1px solid #000;
  overflow: hidden;
}
</style>