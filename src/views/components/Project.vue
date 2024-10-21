<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps(['topSrc', 'imgRange'])
const topSrc = props.topSrc
const imgRange = props.imgRange

const emit = defineEmits(['close']);
const scrollArea = ref(null)
const showButton = ref(false)
const isImageOpen = ref(false)
const selectedImage = ref(null)

const imgList = computed(() => {
  if (imgRange?.length) {
    const [start, end] = imgRange
    return Array.from(Array(end - start + 1)).map((_, index) => {
      return `/images/project/p${start + index}.jpg`
    })
  } else {
    return Array.from(Array(55)).map((_, index) => {
      return `/images/project/p${index + 1}.jpg`
    })
  }
})

// 图片懒加载的自定义指令
const vLazyLoad = {
  mounted(el, binding) {
    const loadImage = () => {
      const rect = el.getBoundingClientRect()
      
      // 检查图片是否已经加载过
      if (el.dataset.loaded) return;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.src = binding.value
        el.dataset.loaded = 'true'  // 标记为已加载
      }
    }

    // 加载占位图
    el.src = '/images/holder.png'

    // 监听滚动事件
    const scrollContainer = scrollArea.value
    const handleScroll = () => {
      loadImage()

      if (scrollArea.value) {
        showButton.value = scrollArea.value.scrollTop > 200;
      }
    }

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    }

    // 初次渲染时检查图片是否应该被加载
    onMounted(() => loadImage())

    // 组件卸载时移除事件监听
    onBeforeUnmount(() => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    })
  }
}

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
      <div class="image_box">
        <div class="image_list" ref="scrollArea">
          <img v-if="topSrc" class="img_item" :src="topSrc" draggable="false">
          <img
            class="img_item"
            v-for="(item, index) in imgList.slice(0, 3)"
            :key="`first_${index}`"
            @click="openImage(index)"
            :src="item"
            alt="Image"
          />
          <img
            class="img_item"
            v-for="(item, index) in imgList.slice(3)"
            :key="`second_${index}`"
            @click="openImage(index)"
            v-lazyLoad="item"
            alt="Image"
          />
        </div>
      </div>
    </div>

    <div v-if="isImageOpen" class="modal df_center"></div>
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
  padding-top: 30px;
}

.project_wrapper {
  position: relative;
  margin: 0 auto;
  max-width: 1091px;
  height: calc(100% - 20px);
  padding: 32px 32px 0 32px;
  background: rgba(0, 2, 9, 0.8);
  border-radius: 24px;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* overflow: hidden; */
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

.image_box {
  overflow: hidden;
  height: calc(100% - 82px);
}
.image_list {
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.image_list::-webkit-scrollbar {
  display: none;
}
.image_list .img_item:last-child {
  margin-bottom: 24px;
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
  top: 500px;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.large-image {
  max-width: 1300px;
  border-radius: 24px;
}


.fade-enter-from,
.fade-leave-to {
  transform: scale(0.8);
  /* 图片缩放过渡效果 */
  opacity: 0;
}
</style>