<script setup>
const props = defineProps(['textUrl', 'pure'])
const textUrl = props.textUrl
const pure = props.pure
</script>

<template>
    <div class="masktitle_wrapper dfc ai_center" :class="pure ? '' : 'mask'">
      <img class="logo" src="@/assets/images/logo_3.png" draggable="false">
      <img class="text" :src="textUrl" draggable="false">
      <slot></slot>
    </div>
</template>

<style scoped>
.masktitle_wrapper {
    padding-top: 160px;
}

.mask {
    background-image: url('@/assets/images/mask.png');
    background-size: 588px 588px;
    background-position: 64px 0;
    background-repeat: no-repeat;
}

.logo {
    width: 58px;
    height: 59px;
}

.text {
    margin-top: 48px;
    height: 130px;
}
</style>