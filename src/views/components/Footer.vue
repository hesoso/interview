<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="footer_wrapper df">
        <div class="left df ai_center">
            <img class="icon" src="/images/logo_2.png" draggable="false">
            <span>Barry’s Personal Designed blog</span>
        </div>
        <div class="right dfc">
            <span class="top">Interest is the Best Teacher, Designing with Purpose, Crafting with Precision</span>
            <span class="bottom">© 2024 Design by Barry | 京ICP备2024089195号-1</span>
        </div>
    </div>
</template>

<style scoped>
.footer_wrapper {
    justify-content: space-between;
    padding: 50px 132px 0;
    width: 100%;
    height: 190px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.left {
    height: 24px;
    font-family: Inter, Inter;
    font-weight: 500;
    font-size: 14px;
    color: rgba(180, 188, 208, 0.6);
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.left img {
    margin-right: 6px;
    width: 12px;
    height: 12px;
}

.right {
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: rgba(180, 188, 208, 0.6);
    line-height: 16px;
    letter-spacing: 1px;
    text-align: right;
    font-style: normal;
    text-transform: none;
    align-items: flex-end;
}

.top {
    width: 313px;
}

.bottom {
    margin-top: 27px;
}
</style>