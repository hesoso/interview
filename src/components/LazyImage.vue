<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
});

const isVisible = ref(false);

const createObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect(); // 图片加载后不再观察
      }
    });
  });
  
  observer.observe(document.querySelector('.lazy-image'));
};

const onLoad = () => {
  console.log('Image loaded');
};

onMounted(() => {
  createObserver();
});
</script>

<template>
  <div class="lazy-image">
    <img
      v-if="isVisible"
      :src="src"
      :alt="alt"
      @load="onLoad"
      class="image"
    />
    <div v-else class="placeholder"></div>
  </div>
</template>


<style scoped>
.lazy-image {
  width: 100%;
  height: auto;
  position: relative;
}

.placeholder {
  background-color: #f0f0f0;
  width: 100%;
  height: 200px; /* 可以根据实际图片大小调整 */
}

.image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 24px;
  overflow: hidden;
}
</style>
