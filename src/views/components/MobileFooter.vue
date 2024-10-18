<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="modile_footer_wrapper dfc">
        <div class="top df ai_center">
            <img class="icon" src="/images/logo_2.svg" draggable="false">
            <span>Barry’s Personal Designed blog</span>
        </div>
        <div class="middle">Interest is the Best Teacher, Designing with Purpose, Crafting with Precision</div>
        <div class="bottom">© 2024 Design by Barry | 京ICP备2024089195号-1</div>
    </div>
</template>

<style scoped>
.modile_footer_wrapper {
    padding: 16px 16px 24px;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background-color: #000;
}

.top {
    height: 24px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.top img {
    margin-right: 6px;
    width: 12px;
    height: 12px;
}

.middle, .bottom {
    margin-top: 10px;
    font-weight: 400;
    font-size: 10px;
    color: rgba(180, 188, 208, 0.6);
    line-height: 12px;
    letter-spacing: 1px;
    font-style: normal;
    text-transform: none;
    align-items: flex-end;
}


</style>