<template>
  <div class="form__wrapper">
    <form class="user__form">
      <div class="form__item">
        <label>Фамилия</label>
        <v-text-field
          v-model="surname"
          placeholder="введите фамилию:"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Имя</label>
        <v-text-field
          v-model="name"
          placeholder="введите имя:"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Отчество</label>
        <v-text-field
          v-model="patronymic"
          placeholder="введите отчество:"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Почта</label>
        <v-text-field
          v-model="mail"
          placeholder="введите почту:"
          type="email"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Телефон</label>
        <v-text-field
          v-model="phone"
          placeholder="введите телефон:"
          type="number"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Город</label>
        <v-text-field
          v-model="city"
          placeholder="введите город:"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Улица</label>
        <v-text-field
          v-model="street"
          placeholder="введите улицу:"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item-wrapper">
        <div class="form__item">
          <label>Дом</label>
          <v-text-field
            v-model="home"
            placeholder="введите дом:"
            variant="outlined"
            style="width: 100%;"
          />
        </div>
        <div class="form__item">
          <label>Квартира/Офис</label>
          <v-text-field
            v-model="flat"
            placeholder="введите кв/офис:"
            type="number"
            variant="outlined"
            style="width: 100%;"
          />
        </div>
      </div>
      <div class="form__item">
        <label>Индекс</label>
        <v-text-field
          v-model="indexNum"
          placeholder="введите индекс:"
          type="number"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <div class="form__item">
        <label>Способ доставки</label>
        <v-select
          v-model="deliveryMethod"
          :items="['Почта России', 'EMS', 'CDEK', 'DHL']"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <button class="form__submit" @click="addOrder">Оформить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import store from '../store/index';

const surname = ref('')
const name = ref('')
const patronymic = ref('')
const mail = ref('')
const phone = ref('')
const city = ref('')
const street = ref('')
const home = ref('')
const flat = ref('')
const indexNum = ref('')
const deliveryMethod = ref('')

function addOrder() {
  const order = {
    surname: surname.value,
    name: name.value,
    patronymic: patronymic.value,
    mail: mail.value,
    phone: phone.value,
    city: city.value,
    street: street.value,
    home: home.value,
    flat: flat.value,
    indexNum: indexNum.value,
    deliveryMethod: deliveryMethod.value,
    bikes: store.state.cart
  }
  store.commit('ADD_ORDER', order)
}
</script>

<style lang="scss" scoped>
.form__wrapper {
  display: flex;
  flex-direction: column;
  width: 350px;

  .user__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 1px 1px 2px 1px #9e9e9e;
    border-radius: 5px;
    padding: 15px;
    gap: 10px;

    .form__item-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .form__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 5px;
    }

    .form__submit {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #000;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      padding: 7px;
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>