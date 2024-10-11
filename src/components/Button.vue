<script setup>
</script>

<template>
    <div class="button_wrapper df_center">
        <slot></slot>
    </div>
</template>

<style scoped>
.button_wrapper {
    width: 237px;
    height: 62px;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: inset 0px -46px 106px 0px rgba(255, 255, 255, 0.05), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25);
    border-radius: 49px 49px 49px 49px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}
</style>