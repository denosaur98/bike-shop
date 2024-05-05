<template>
  <div class="home">
    <div class="home__cards-wrapper">
      <BikeCard/>
    </div>
  </div>
</template>

<script setup>
import BikeCard from '../components/BikeCard';
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 50px;

  .home__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 50px;
  }
}
</style>