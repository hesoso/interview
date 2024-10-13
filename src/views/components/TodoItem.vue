<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="todoitem_wrapper df">
        <div class="left df_center">
            <div class="icon">
                <img class="wh100" :src="info.src" draggable="false">
            </div>
            <div class="title">{{ info.title }}</div>
            <div class="desc">{{ info.desc }}</div>
        </div>
        <span class="right df ai_center">open</span>
    </div>
</template>

<style scoped>
.todoitem_wrapper {
    padding: 0 20px 0 23px;
    height: 55px;
    justify-content: space-between;
}

.todoitem_wrapper:hover {
    /* cursor: pointer; */
    /* background-color: rgba(255, 255, 255, 0.1); */
}

.icon {
    width: 26px;
    height: 26px;
}

.title {
    margin: 0 14px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 16px;
    text-align: left;
    text-transform: none;
}

.desc {
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 16px;
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