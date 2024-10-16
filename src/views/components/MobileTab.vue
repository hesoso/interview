<script setup>
import { ref } from 'vue';
const emit = defineEmits(['change']);
const props = defineProps(['tabList'])
const tabList = props.tabList

const activeIndex = ref(0)
const handleClick = (index) => {
  activeIndex.value = index
  emit('change', index)
}
</script>

<template>
  <div class="mobile_tab_wrapper df">
    <div v-for="(item, index) in tabList" :key="index" @click="handleClick(index)"  class="tab df_center" :class="{ 'active': index === activeIndex }">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.mobile_tab_wrapper {
  width: 100%;
  height: 40px;
  background: rgba(118,118,128,0.16);
  border-radius: 9px;
  overflow: hidden;
}
.tab {
  width: 33.3%;
  font-weight: 400;
  font-size: 13px;
  color: #FFFFFF;
  line-height: 18px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}
.active {
  background: #616197;
  border-radius: 9px;
}
</style>
