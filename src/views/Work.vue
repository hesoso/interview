<script setup>
import feather from 'feather-icons'
import Button from '@/components/Button.vue'
import Footer from './components/Footer.vue'
import WorkCard from './components/WorkCard.vue'

import { onMounted } from 'vue'

onMounted(() => {
    feather.replace({
        width: 16,
        height: 16
    })
})

const workList = [
    {
        src: '/src/assets/images/skill_1.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验'
    },
    {
        src: '/src/assets/images/skill_1.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建'
    },
    {
        src: '/src/assets/images/skill_1.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握'
    },
    {
        src: '/src/assets/images/skill_1.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
]
</script>

<template>
    <div class="work_wrapper">
        <div class="top df">
            <div class="left df ai_center">
                <img class="work_logo w100" src="@/assets/images/work.png" draggable="false">
                <div class="introduce">为了节省您的宝贵时间，这里特地准备了一份作品集，还从C端、B端区分做成了相应的栏目🫶🏻</div>
            </div>
            <div class="right df">
                <Button class="ml16" :styles="{
                    width: '134px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(97,97,151,0.32)',
                    fontSize: '16px'
                }">
                        <div class="df ai_center">
                            <i data-feather="eye"></i>
                        <span class="ml8">查看作品集</span>
                        </div>
                    </Button>
                    <Button class="ml16" :styles="{
                    width: '134px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#616197',
                    fontSize: '16px'
                }">
                        <i data-feather="download"></i>
                        <span class="ml8">下载作品集</span>
                    </Button>
            </div>
        </div>
        <div class="banner"></div>
        <div class="list">
            <div class="list_title">具体项目：</div>
            <div class="label df ai_center">
                <div class="oval"></div>
                <span>UI / UX 设计师</span>
            </div>
            <div class="list_box">
                <WorkCard v-for="(item, index) in workList" :key="index" :info="item" />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.work_wrapper {
    margin-top: 128px;
    padding: 0 132px
}
.ml8 {
    margin-left: 8px;
}
.ml16 {
    margin-left:16px
}
.top {
    justify-content: space-between;
}
.work_logo {
    margin-right: 31px;
    width: 197px;
    height: 63px;
}
.introduce {
    padding-left: 24px;
    width: 374px;
    height: 36px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: #94A3B8;
    line-height: 16px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    border-left: 1px solid #94A3B8;
}
.banner {
    margin-top: 40px;
    height: 662px;
    border-radius: 40px;
    background: orange;
}

.list_title {
    margin-top: 96px;
    width: 689px;
    height: 23px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}
.oval {
    margin-right: 6px;
    width: 16px;
    height: 9px;
    border-radius: 9999px 9999px 9999px 9999px;
    border: 1px solid #94A3B8;
}
.label {
    margin-top: 16px;
    height: 21px;
    font-family: SF Pro Display, SF Pro Display;
    font-weight: 600;
    font-size: 14px;
    color: #0EA5E9;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}
.list_box {
    margin: 63px 0 73px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每行三个元素，宽度平均分配 */
    gap: 10px; /* 元素之间的间距 */
}
</style>