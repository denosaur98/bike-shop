<template>
  <div class="header">
    <NuxtLink to="/" class="header__home">
      <img src="../static/assets/logo/logo-header.png" class="home__logo">
    </NuxtLink>
    <div class="header__nav-wrapper">
      <div class="header__nav">
        <NuxtLink to="/" class="nav__links">Главная</NuxtLink>
        <NuxtLink to="/bikes" class="nav__links">Велосипеды</NuxtLink>
        <NuxtLink to="/details" class="nav__links">Запчасти</NuxtLink>
        <NuxtLink to="/brands" class="nav__links">Бренды</NuxtLink>
      </div>
    </div>
    <NuxtLink to="/cart" class="header__cart">
      <span>Корзина</span>
      <font-awesome-icon :icon="['fas', 'bag-shopping']"/>
    </NuxtLink>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.header {
  display: flex;
  align-items: center;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 1px 1px 5px 1px #757575;
  background: #000;
  padding: 15px;
  height: 100px;

  .header__home {
    position: absolute;
    left: 50px;

    .home__logo {
      width: 115px;
      height: auto;
    }
  }

  .header__nav-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;

    .header__nav {
      display: flex;
      align-items: center;
      gap: 20px;

      .nav__links {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: auto;
        margin-right: 20px;
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        position: relative;
        overflow: hidden;

        &::before, &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #fff;
          transition: width 0.3s ease-in-out;
        }

        &::before {
          left: 50%;
        }

        &::after {
          right: 50%;
        }

        @media (hover: hover) {
          &:hover {
            &::before, &::after {
              width: 50%;
            }
          }
        }
      }
    }
  }

  .header__cart {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    margin-right: 20px;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    

    span {
      position: relative;
      
      &::before, &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.3s ease-in-out;
      }

      &::before {
        left: 50%;
      }

      &::after {
        right: 50%;
      }

      @media (hover: hover) {
        &:hover {
          &::before, &::after {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>