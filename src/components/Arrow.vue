<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="arrow"></div>
</template>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  padding: 5px;
}
</style>
