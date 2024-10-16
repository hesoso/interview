<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const expand = ref(false)

const handleChangeExpand = () => expand.value = !expand.value
</script>

<template>
  <div class="mobile_header_wrapper">
    <div class="mobile_header_box" :class="{ expand }">
      <div class="top_box">
        <div class="nav_tab_box df ai_center jc_between" :class="{ 'half-radius': !expand }">
          <img class="logo" src="/images/mobile/logo.png" draggable="false">
          <img class="logo_2" src="/images/mobile/logo_3.png" draggable="false">
          <img class="icon_line" @click="handleChangeExpand" src="/images/mobile/icon_line.png" draggable="false">
        </div>
      </div>
        <div class="nav" v-if="expand" @click="handleChangeExpand">
          <RouterLink to="/"><div class="nav_item df ai_center">Home</div></RouterLink>
          <RouterLink to="/work"><div class="nav_item df ai_center">项目作品</div></RouterLink>
          <RouterLink to="/resume"><div class="nav_item df ai_center">我的简历</div></RouterLink>
        </div>
    </div>
  </div>
</template>

<style scoped>
.mobile_header_wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
}
.expand {
  height: 100vh;
}

.mobile_header_box {
  position: absolute;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
}

.top_box {
  padding: 56px 16px 0;
}

.nav_tab_box {
  position: relative;
  border-radius: 27px 27px 0 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.8);
}

.half-radius {
  border-radius: 27px;
}

.logo {
  width: 69px;
  height: 16px;
}

.logo_2 {
  position: absolute;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
}
.icon_line {
  width: 24px;
  height: 24px;
}

.nav {
  margin: 0 16px ;
  height: calc(100% - 128px);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 27px 27px;
}

.nav_item {
  padding-left: 16px;
  height: 59px;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 19px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  animation: expand 300ms ease-out forwards;
  will-change: transform, opacity;
}
</style>
