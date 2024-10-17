<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['close']);
const scrollArea = ref(null)
const showButton = ref(false)
const isImageOpen = ref(false)
const selectedImage = ref(null)

// 监听滚动事件，显示或隐藏"回到顶部"按钮
const handleScroll = () => {
  if (scrollArea.value) {
    showButton.value = scrollArea.value.scrollTop > 200;
  }
}

onMounted(() => {
  if (scrollArea.value) {
    scrollArea.value.addEventListener('scroll', handleScroll);
  }
})

onBeforeUnmount(() => {
  if (scrollArea.value) {
    scrollArea.value.removeEventListener('scroll', handleScroll);
  }
})

// 打开图片的函数
const openImage = (index) => {
  selectedImage.value = index
  isImageOpen.value = true
}

// 关闭图片的函数
const closeImage = () => {
  isImageOpen.value = false
  selectedImage.value = null
}

// 滚动到顶部
const scrollToTop = () => {
  if (scrollArea.value) {
    scrollArea.value.scrollTop = 0; // 滚动到顶部
  }
}

// 图片列表
const imgList = Array.from(Array(40)).map((_, index) => {
  return `/images/project/p${index + 1}.jpg`
})

</script>

<template>
  <div class="layer">
    <div class="project_wrapper anim_scale">
      <div v-if="showButton" class="top df_center" @click="scrollToTop">
        <img class="icon" src="/images/icon_top.png" draggable="false">
      </div>

      <div class="title"><img class="icon" src="/images/protfolio.png" draggable="false"></div>

      <div class="close df_center" @click="emit('close', false)">
        <img class="icon" src="/images/icon_close.png" draggable="false">
      </div>

      <div class="image_list" ref="scrollArea">
        <img class="img_item" v-for="(item, index) in imgList" :key="index" @click="openImage(index)" v-lazy="item"
          alt="Image" />
      </div>
    </div>
    <div v-if="isImageOpen" class="modal df_center"></div>
    <!-- 图片放大展示 -->
    <transition name="fade">
      <div v-if="isImageOpen" class="modal2 df_center" @click.stop="closeImage">
        <img :src="imgList[selectedImage]" class="large-image" />
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
  z-index: 4;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  padding-top: 40px;
}

.project_wrapper {
  position: relative;
  margin: 0 auto;
  max-width: 1091px;
  height: 100%;
  padding: 32px;
  background: rgba(0, 2, 9, 0.8);
  border-radius: 24px 24px 0 0;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.title {
  text-align: center;
  color: transparent;
}

.title img {
  margin-bottom: 10px;
  width: 266px;
  height: 63px;
}

.image_list {
  padding-right: 5px;
  padding-bottom: 80px;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.img_item {
  cursor: pointer;
  margin-bottom: 16px;
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
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
  margin-left: 570px;
  width: 60px;
  height: 60px;
  background: #151517;
  border-radius: 8px;
  z-index: 5;
}

.top .icon {
  width: 36px;
  height: 36px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 6;
}

.modal2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  transition: opacity 0.5s ease, transform 0.5s ease;
  /* 图片的平滑缩放 */
}

.large-image {
  max-width: 1300px;
  border-radius: 24px;
}

/* 定义过渡的基础类 */


.fade-enter-from,
.fade-leave-to {
  transform: scale(0.8);
  /* 图片缩放过渡效果 */
  opacity: 0;
}
</style>