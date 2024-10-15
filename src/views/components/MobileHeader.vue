<script setup>
</script>

<template>
  <div class="mobile_header_wrapper">
    <div class="border_box df ai_center jc_between">
      <img class="logo" src="/images/mobile/logo.png" draggable="false">
      <img class="logo_2" src="/images/mobile/logo_3.png" draggable="false">
      <img class="icon_line" src="/images/mobile/icon_line.png" draggable="false">
    </div>
  </div>
</template>

<style scoped>
.mobile_header_wrapper {
  margin: 56px 16px;
  padding: 1px;
  height: 56px;
  border-radius: 28px;
  background: linear-gradient(to top right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.3) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.02) 100%);
  background-blend-mode: screen;
}

.border_box {
  position: relative;
  padding: 16px;
  height: 100%;
  border-radius: 27px;
  background: #000212;
  backdrop-filter: blur(80px);
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
</style>
