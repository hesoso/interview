<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header v-if="$route.meta.showNav">
    <section class="logo"></section>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/work">项目作品</RouterLink>
      <RouterLink to="/resume">我的简历</RouterLink>
    </nav>
  </header>
  <RouterView style="width: 100vw" />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(8px);
  z-index: 999;
}

.logo {
  position: absolute;
  left: 50%;
  width: 92px;
  height: 18px;
  margin-left: -588px;
  background-image: url('/images/logo.png');
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
  background-image: url('/images/link_active.png');
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
