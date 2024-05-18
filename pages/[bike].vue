<template>
  <div class="bike__page" v-if="selectedBike">
    <h1 class="bike__header">Велосипед {{  selectedBike.brand }} {{ selectedBike.model }} {{ selectedBike.year }} {{ selectedBike.color }}</h1>
    <div class="bike__pay-block">
      <div class="pay__photos">
        <NuxtLink>
          <img :src="isActivePhoto" class="photos__image-active">
        </NuxtLink>
        <div class="photos__grid">
          <NuxtLink v-for="photo in selectedBike.photo" :key="photo" @click.prevent="setActivePhoto(photo)">
            <img :src="photo" class="photos__image">
          </NuxtLink>
        </div>
      </div>
      <div class="pay__info">
        <h1 class="info__price">{{ selectedBike.price }} <span>₽</span></h1>
        <div class="info__stock">
          <p>{{ inStockText }}</p>
          <font-awesome-icon :icon="['fas', 'check']" />
        </div>
        <div class="info__cart">
          <div class="cart__counter">
            <button class="counter__btn" @click="minusBikeAmount">-</button>
            <input class="counter__input" v-model="bikeCount">
            <button class="counter__btn" @click="plusBikeAmount">+</button>
            <p class="counter__warning" v-if="countWarning">Макс. кол-во <br> в наличии</p>
          </div>
          <div class="cart__add">
            <button class="add__favorites" @click="toggleFavorite">
              <font-awesome-icon :class="isFavorite ? 'favorites__icon-active' : 'favorites__icon'" :icon="isFavorite ? ['fas', 'heart'] : ['far', 'heart']"/>
            </button>
            <button class="add__pay" @click="addToCart">
              В корзину
              <font-awesome-icon :icon="['fas', 'bag-shopping']"/>
            </button>
          </div>
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
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store/index';

const route = useRoute()
const selectedBike = ref(null)
const isActivePhoto = ref(null)
onMounted(async() => {
  await store.dispatch('fetchBikes')
  selectedBike.value = store.state.bikes.find(item => item.model === route.path.replace(/^[^-]*-|-[^-]*$/g, ''))
  isActivePhoto.value = selectedBike.value.photo[0]
})

function setActivePhoto(photo) {
  isActivePhoto.value = photo
}

const inStockText = computed(() => selectedBike.value.inStock ? 'В наличии' : 'Временно нет')

const bikeCount = ref(1)
const countWarning = ref(false)
function minusBikeAmount() {
  if(bikeCount.value > 1) {
    bikeCount.value--
    countWarning.value = false
  }
}
function plusBikeAmount() {
  if(bikeCount.value < selectedBike.value.amount) {
    bikeCount.value++
  } else {
    countWarning.value = true
  }
}

function addToCart() {
  const bike = {
    cartItemId: store.state.cart.length + 1,
    id: selectedBike.value.id,
    brand: selectedBike.value.brand,
    model: selectedBike.value.model,
    color: selectedBike.value.color,
    year: selectedBike.value.year,
    price: selectedBike.value.price,
    photo: selectedBike.value.photo[0],
    amount: bikeCount.value,
    sum: selectedBike.value.price * bikeCount.value
  }
  store.dispatch('addToCart', bike)
}

const isFavorite = ref(false)
function toggleFavorite() {
  store.commit('ADD_TO_FAVORITES_IN_BIKE_PAGE', selectedBike.value)
  isFavorite.value = !isFavorite.value
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
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
    gap: 50px;

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

    .pay__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      .info__price {
        font-size: 35px;
        line-height: 100%;
        font-weight: 700;

        span {
          font-size: 25px;
        }
      }

      .info__stock {
        display: flex;
        align-items: center;
        gap: 5px;
        line-height: 100%;

        p {
          text-decoration: underline;
        }
      }

      .info__cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 50px;
        gap: 50px;

        .cart__counter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 120px;
          position: relative;

          .counter__btn {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background: none;
            border: none;
            font-size: 25px;
            width: 25px;
            height: 25px;
          }

          .counter__input {
            text-align: center;
            width: 50px;
            outline: none;
            border: none;
            box-shadow: 1px 1px 2px 1px #9e9e9e;
            padding: 3px;
            border-radius: 3px;
            font-size: 15px;
          }

          .counter__warning {
            position: absolute;
            color: rgba(204, 0, 0, 0.9);
            font-size: 13px;
            top: 30px;
            text-align: center;
            width: 100%;
          }
        }

        .cart__add {
          display: flex;
          width: 250px;
          gap: 10px;

          .add__favorites {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            padding: 7px;
            border-radius: 5px;
            color: #808080;
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

          .add__pay {
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
            width: 200px;
            gap: 10px;
          }
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