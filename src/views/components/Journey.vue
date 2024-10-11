<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
    <div class="journey_wrapper dfc ai_center">
        <div class="introduce dfc ai_center">
            <img class="logo_3" src="@/assets/images/logo_3.png">
            <img class="text_1" src="@/assets/images/text_1.png">
            <div class="desc">
                我相信每一个界面背后都有一个故事，而我的任务是让这个故事为用户所理解并喜爱。从直观的导航到视觉的愉悦，我始终坚持<span
                    class="c_blue">以用户为中心</span>，用设计为他们的每一次点击创造价值</div>
        </div>
        <div class="keyboard"></div>
        <div class="ctrl_list"></div>
        <div class="todo_task"></div>
    </div>
</template>

<style scoped>
.journey_wrapper {
    position: relative;
    margin-top: 152px;
    display: flex;
}

.logo_3 {
    width: 58px;
    height: 59px;
}

.text_1 {
    margin-top: 48px;
    width: 416px;
    height: 130px;
}

.desc {
    margin-top: 24px;
    width: 650px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    letter-spacing: 1px;
    color: #fff;
}

.desc .c_blue {
    color: #00FFFF;
}
</style>