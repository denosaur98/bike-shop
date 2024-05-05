<template>
  <div class="bike__item" v-for="bike in store.state.bikes" :key="bike.id">
    <div class="item__favorites-container">
      <button class="favorites__btn" @click="toggleFavorite(bike.id)">
        <font-awesome-icon class="favorites__icon" :icon="['fas', 'heart']" :class="{ 'favorites__icon-active': isFavorite(bike.id) }"/>
      </button>
    </div>
    <NuxtLink :to="`/bike/${bike.brand}-${bike.model}-${bike.year}`">
      <Swiper :photos="bike.photo"/>
    </NuxtLink>
    <div class="item__info">
      <NuxtLink :to="`/bike/${bike.brand}-${bike.model}-${bike.year}`" class="info__title" :title="`${bike.brand} ${bike.model} ${bike.year} ${bike.color}`">
        <span class="title__brand">{{ bike.brand }}&nbsp;</span> 
        <span class="title__model">{{ bike.model }}</span> {{ bike.year }} {{ bike.color }}
      </NuxtLink>
      <div class="info__pay">
        <h2 class="info__price">{{ bike.price }}₽</h2>
        <button class="pay__btn">В корзину
          <font-awesome-icon :icon="['fas', 'bag-shopping']"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import store from '../store/index.js'
import Swiper from '../components/Swiper'

onMounted(async() => await store.dispatch('fetchBikes'))

function isFavorite(id) {
  return store.state.favorites.some(bike => bike.id === id)
}
function toggleFavorite(id) {
  store.dispatch('addToFavorites', id)
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
.bike__item {
  display: flex;
  flex-direction: column;
  width: 350px;
  border: none;
  overflow: hidden;
  position: relative;

  @media (hover:hover) {
    &:hover {
      border-radius: 10px;
      box-shadow: 1px 1px 5px 1px #808080;
      transition: .3s;
    }
  }

  @media (hover:none) {
    &:active {
      border-radius: 10px;
      box-shadow: 1px 1px 5px 1px #808080;
      transition: .3s;
    }
  }

  .item__favorites-container {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    width: 100%;
    z-index: 999;

    .favorites__btn {
      cursor: pointer;
      background: none;
      border: none;

      .favorites__icon {
        width: 20px;
        height: 20px;
      }

      .favorites__icon-active {
        color: rgb(199, 0, 0);
        width: 20px;
        height: 20px;
        transition: .2s;
      }
    }
  }

  .item__info {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
    overflow: hidden;
    text-align: center;

    .info__title {
      font-size: 20px;
      overflow: hidden;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .title__brand {
        font-weight: 900;
        text-transform: uppercase;
      }

      .title__model {
        font-weight: 700;
        font-style: italic;
      }
    }

    .info__pay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 10px;

      .info__price {
        font-size: 25px;
        font-weight: 800;
      }

      .pay__btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: #000;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        padding: 7px;
        min-width: 120px;
        gap: 10px;
      }
    }
  }
}
</style>