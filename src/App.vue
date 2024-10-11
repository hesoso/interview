<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section class="logo"></section>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">项目作品</RouterLink>
      <RouterLink to="/mine">我的简历</RouterLink>
    </nav>
  </header>
  <RouterView :style="{ width: $route.path === '/' ? '100vw' : '1440px' }" />
</template>

<style scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
}

.logo {
  position: absolute;
  left: 132px;
  width: 92px;
  height: 18px;
  background-image: url('@/assets/images/logo.png');
  background-size: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-family: OPPO Sans-Bold;
}

nav a.router-link-exact-active {
  position: relative;
  color: #fff;
}

nav a.router-link-exact-active::before {
  content: '';
  position: absolute;
  left: -9px;
  bottom: -6px;
  width: 13px;
  height: 13px;
  background-image: url('@/assets/images/link_active.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  margin: 0 50px;
  font-size: 16px;
}
</style>
