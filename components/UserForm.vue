<template>
  <div class="form__wrapper">
    <form class="user__form">
      <div class="form__item">
        <label for="username">Фамилия</label>
        <input placeholder="введите фамилию:">
      </div>
      <div class="form__item">
        <label for="username">Имя</label>
        <input placeholder="введите имя:">
      </div>
      <div class="form__item">
        <label for="username">Отчество</label>
        <input placeholder="введите отчество:">
      </div>
      <div class="form__item">
        <label for="username">Почта</label>
        <input placeholder="введите почту:">
      </div>
      <div class="form__item">
        <label for="username">Телефон</label>
        <input placeholder="введите телефон:">
      </div>
      <div class="form__item">
        <label for="username">Город</label>
        <input placeholder="введите город:">
      </div>
      <div class="form__item">
        <label for="username">Улица</label>
        <input placeholder="введите улицу:">
      </div>
      <div class="form__item-wrapper">
        <div class="form__item">
          <label for="username">Дом</label>
          <input placeholder="введите дом:">
        </div>
        <div class="form__item">
          <label for="username">Квартира/Офис</label>
          <input placeholder="введите кв/офис:">
        </div>
      </div>
      <div class="form__item">
        <label for="username">Индекс</label>
        <input placeholder="введите индекс:">
      </div>
      <div class="form__item">
        <label for="username">Способ доставки</label>
        <v-select
          :items="['Почта России', 'EMS', 'CDEK', 'DHL']"
          variant="outlined"
          style="width: 100%;"
        />
      </div>
      <button class="form__submit">Оформить</button>
    </form>
  </div>
</template>

<script setup>

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

      input {
        border-radius: 5px;
        border: 1px solid #9e9e9e;
        width: 100%;
        outline: none;
        padding: 5px;
        font-size: 12px;
        text-transform: uppercase;
      }
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