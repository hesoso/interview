<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="noteitem_wrapper df">
        <div class="left df ai_center">
            <img class="icon" :src="info.icon" draggable="false">
            <div class="desc">{{ info.desc }}</div>
        </div>
    </div>
</template>

<style scoped>
.noteitem_wrapper {
    padding-left: 12px;
    height: 28px;
}

.noteitem_wrapper:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
}

.icon {
    width: 10px;
    height: 10px;
}

.desc {
    margin-left: 7px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 10px;
    color: #F7F8F8;
    line-height: 13px;
    text-align: left;
    text-transform: none;
}

.right {
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 16px;
    text-align: right;
    text-transform: none;
}
</style>