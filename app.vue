<template>
  <div class="app">
    <Header/>
    <NuxtPage>
      <Index/>
    </NuxtPage>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Index from './pages/index.vue';
</script>

<style>
@font-face {
  font-family: Mulish;
  src: url('/static/assets/Mulish.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Mulish;
}
</style>