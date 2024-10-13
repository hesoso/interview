<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['close']);

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

// 记录当前选择的图片状态
const isImageOpen = ref(false)
const selectedImage = ref(null)

// 打开图片
const openImage = (index) => {
  selectedImage.value = index
  isImageOpen.value = true
}

// 关闭图片
const closeImage = () => {
  isImageOpen.value = false
  selectedImage.value = null
}

const close = () => {
  emit('close', false);
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动到顶部
  });
}


const imgList = Array.from(Array(32)).map((_, index) => {
  return `/images/project/p${index + 1}.jpg`
})

</script>

<template>
  <div class="layer">
    <div class="project_wrapper">
      <div v-if="showButton" class="top df_center" @click="scrollToTop">
        <img class="icon" src="/images/icon_top.png" draggable="false">
      </div>
      <div class="title">PORTFOLIO</div>
      <div class="close df_center" @click="close">
        <img class="icon" src="/images/icon_close.png" draggable="false">
      </div>
      <div class="image_list">
        <img class="img_item" v-for="(item, index) in imgList" @click="openImage(index)" style="width: 100%;"
          v-lazy="item" />
      </div>
    </div>

    <transition name="fade">
      <!-- 放大图片展示 -->
      <div v-if="isImageOpen" class="overlay" @click="closeImage">
        <div class="modal df jc_center" @click.stop>
          <img :src="imgList[selectedImage]" class="large-image" />
          <div class="close-btn df_center" @click="closeImage">
            <img class="icon" src="/images/icon_close.png" draggable="false">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.layer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  padding-top: 164px;
}

.project_wrapper {
  position: relative;
  margin: 0 auto;
  max-width: 1091px;
  height: 100%;
  box-sizing: border-box;
  padding: 48px 21px 32px;
  background: rgba(0, 2, 9, 0.8);
  border-radius: 24px 24px 0 0;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.title {
  width: 266px;
  margin: 0 auto 50px;
  padding: 5px 0 20px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 39px;
  line-height: 47px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(to right, #978D9C, #FFFFFF, #978D9C);
  -webkit-background-clip: text;
  color: transparent;
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1 1;
}

.mb16 {
  margin-bottom: 16px;
}

.image_list {
  padding-right: 5px;
  position: relative;
  height: 100%;
  overflow: scroll;
}

.image_list .img_item {
  cursor: pointer;
  margin-bottom: 16px;
  border-radius: 24px;
  overflow: hidden;
}

.close:hover,
.top:hover {
  background: rgba(118, 118, 128, 0.24);
  transform: scale(1.05);
}

.close {
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 32px;
  width: 40px;
  height: 40px;
  background: #151517;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.close .icon {
  width: 18px;
  height: 18px;
}

.top {
  cursor: pointer;
  position: fixed;
  bottom: 200px;
  left: 50%;
  margin-left: 600px;
  width: 60px;
  height: 60px;
  background: #151517;
  border-radius: 8px;
  z-index: 9999;
}

.top .icon {
  width: 36px;
  height: 36px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  position: relative;
}

.large-image {
  margin: 0 auto;
  width: 1440px;
  height: auto;
  border-radius: 24px;
  transition: transform 0.3s;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #151517;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.close-btn .icon {
  width: 18px;
  height: 18px;
}

.close-btn:hover {
  background: rgba(118, 118, 128, 0.24);
  transform: scale(1.05);
}

/* 定义过渡的基础类 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  /* 0.5 秒平滑过渡 */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* 进入时从透明变为不透明，离开时从不透明变为透明 */
}
</style>
