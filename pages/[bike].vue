<template>
  <div class="bike__page" v-if="selectedBike">
    <h1 class="bike__header">Велосипед {{  selectedBike.brand }} {{ selectedBike.model }} {{ selectedBike.year }} {{ selectedBike.color }}</h1>
    <div class="bike__pay-block">
      <div class="pay__photos">
        <NuxtLink>
          <img :src="selectedBike.photo[0]" class="photos__image-active">
        </NuxtLink>
        <div class="photos__grid">
          <NuxtLink v-for="photo in selectedBike.photo" :key="photo" :to="photo">
            <img :src="photo" class="photos__image">
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="bike__info">
      <h1 class="info__title">Описание</h1>
      <p class="info__description">{{ selectedBike.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Swiper from '../components/Swiper';
import store from '../store/index';

const route = useRoute()
const selectedBike = ref(null)
onMounted(async() => {
  await store.dispatch('fetchBikes')
  selectedBike.value = store.state.bikes.find(item => item.model === route.path.replace(/^[^-]*-|-[^-]*$/g, ''))
})
</script>

<style lang="scss" scoped>
.bike__page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 300px;

  .bike__header {
    font-weight: 900;
    margin-bottom: 30px;
    margin-right: auto;
  }

  .bike__pay-block {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;

    .pay__photos {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 850px;

      .photos__image-active {
        width: 100%;
        height: auto;
      }

      .photos__grid {
        display: grid;
        grid-template-columns: repeat(5, auto);
        gap: 20px;
        width: 100%;
        margin-right: auto;

        .photos__image {
          width: 154px;
          height: auto;
        }
      }
    }
  }

  .bike__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .info__title {
      font-size: 25px;
      font-weight: 900;
      margin-bottom: 10px;
    }

    .info__description {
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>