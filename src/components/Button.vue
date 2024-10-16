<script setup>
const props = defineProps(['styles'])
const style = props.styles || {}
</script>

<template>
    <div :style="style" class="button_wrapper df_center">
        <slot></slot>
    </div>
</template>

<style scoped>
.button_wrapper {
    cursor: pointer;
    width: 237px;
    height: 62px;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: inset 0px -46px 106px 0px rgba(255, 255, 255, 0.05), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25);
    border-radius: 49px 49px 49px 49px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: none;
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.button_wrapper:hover {
    background: rgba(255, 255, 255, 0.28);
    /* background: transparent; */
    /* box-shadow: 0 0 10px rgba(0, 123, 255, 0.3),
        0 0 10px rgba(0, 123, 255, 0.2),
        0 0 10px rgba(0, 123, 255, 0.1); */
        transform: scale(1.03);
}
</style>