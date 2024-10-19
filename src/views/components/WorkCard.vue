<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="workcard_wrapper">
        <div class="border_box">
            <div class="img_box">
                <img class="img" :src="info.src" draggable="false">
            </div>
            <div class="info">
                <div class="label">
                    <div class="tag df_center">{{ info.tag }}</div>
                    <div class="title">{{ info.title }}</div>
                </div>
                <div class="desc">{{ info.desc }}</div>
            </div>
            <div class="btn df_center">&#x276F;</div>
        </div>
    </div>
</template>

<style scoped>
.workcard_wrapper {
    padding: 1px;
    position: relative;
    border-radius: 40px;
    background: linear-gradient(180deg, #1A1B2A 0%, #0F1120 100%);
    cursor: pointer;
}

.workcard_wrapper:hover {
    background: linear-gradient(to bottom right,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.1)) !important;
}

.workcard_wrapper:hover img {
    transform: scale(1.1);
}

.workcard_wrapper:hover .btn {
    background: #1A1C2A;
}

.border_box {
    background: linear-gradient(180deg, #1A1B2A 0%, #0F1120 100%);
    border-radius: 39px;
    height: calc(100% - 1px);
    overflow: hidden;
}

.btn {
    position: absolute;
    right: 32px;
    bottom: 32px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #080A19;
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: #969799;
}


.img_box {
    padding: 9px 12px 0 12px;
}

.img {
    width: 100%;
    height: 203px;
    border-radius: 32px 32px 0 0;
    transition: transform 0.3s ease;
}

.info {
    padding: 29px 32px 32px 32px;
}


.label {
    display: inline-flex;
    align-items: center;
    padding: 0 13px 0 3px;
    height: 28px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    color: #fff;
}

.tag {
    width: 26px;
    height: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
}

.title {
    margin-left: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}

.desc {
    margin-top: 12px;
    width: 260px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.3);
    line-height: 23px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}
</style>