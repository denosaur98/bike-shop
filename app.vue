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

.v-input__details {
  display: none;
}

.v-input--density-default .v-field--variant-outlined, .v-field--single-line, .v-field--no-label, .v-field {
  --v-field-padding-bottom: 0;
  --v-field-padding-start: 0;
  --v-field-padding-end: 0;
  --v-field-input-padding-top: 0;
  padding: 5px;
  font-size: 15px;
}

input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>