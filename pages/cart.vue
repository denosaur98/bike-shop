<template>
  <div class="cart__page">
    <h1 class="cart__header">Корзина</h1>
    <div class="cart__content" v-if="store.state.cart.length !== 0">
      <div class="content__item-wrapper">
        <div class="content__item" v-for="bike in store.state.cart" :key="bike.id">
          <button class="item__remove" @click="removeItem(bike.id)">
            <font-awesome-icon :icon="['fa', 'xmark']" />
          </button>
          <div class="item__description">
            <img :src="bike.photo" class="description__photo">
            <h1 class="description__title">{{ bike.brand }} {{ bike.model }} {{ bike.year }} {{ bike.color }}</h1>
          </div>
          <div class="cart__counter">
            <button class="counter__btn" @click="minusBikeAmount">-</button>
            <input class="counter__input" v-model="bikeCount">
            <button class="counter__btn" @click="plusBikeAmount">+</button>
            <p class="counter__warning" v-if="countWarning">Макс. кол-во <br> в наличии</p>
          </div>
          <p class="item__price">{{ bike.price }} <span>₽</span></p>
        </div>
      </div>
      <UserForm/>
    </div>
    <p class="cart__info" v-else>В корзине пусто</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '../store/index.js'
import UserForm from '../components/UserForm';

onMounted(async() => await store.state.cart)

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

function removeItem(bikeId) {
  store.commit('REMOVE_FROM_CART', bikeId)
}
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

  .cart__content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .content__item-wrapper {
      display: flex;
      flex-direction: column;
      width: 900px;
      gap: 30px;

      .content__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 1px 1px 2px 1px #9e9e9e;
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        position: relative;

        .item__remove {
          cursor: pointer;
          position: absolute;
          right: 5px;
          top: 0px;
          background: none;
          border: none;
          font-size: 25px;
          opacity: 0.6;

          @media (hover:hover) {
            &:hover {
              color: #808080;
              transition: .3s;
            }
          }

          @media (hover:none) {
            &:active {
              color: #808080;
              transition: .3s;
            }
          }
        }

        .item__description {
          display: flex;
          flex-direction: column;
          width: 200px;
          gap: 20px;

          .description__photo {
            width: 100%;
            height: auto;
          }

          .description__title {
            font-size: 15px;
            white-space: nowrap;
          }
        }

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

        .item__price {
          font-size: 25px;
          line-height: 100%;
          font-weight: 700;

          span {
            font-size: 20px;
          }
        }
      }
    }
  }

  .cart__info {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 35px;
    font-weight: 300;
    transform: translate(-50%, -50%);
    color: #808080;
  }
}
</style>