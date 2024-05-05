<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop="true"
      :grab-cursor="true"
    >
      <swiper-slide class="item" v-for="(photo, index) in photos" :key="index">
        <img class="item__photo" :src="photo">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps({
  photos: Array
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 350px;
  height: auto;
  overflow: hidden;

  .item__photo {
    width: 350px;
    height: auto;
    background-size: cover;
  }
}
</style>