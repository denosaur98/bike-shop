<template>
  <div class="cart__page">
    <h1 class="cart__header">Корзина</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '../store/index.js'

onMounted(async() => await store.state.cart)
console.log(store.state.cart)
</script>

<style lang="scss" scoped>
.cart__page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 300px;

  .cart__header {
    font-weight: 900;
    margin-bottom: 30px;
    margin-right: auto;
  }
}
</style>