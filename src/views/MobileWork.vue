<script setup>
import Button from '@/components/Button.vue'
import MobileFooter from './components/MobileFooter.vue'
import WorkCard from './components/WorkCard.vue'
import MobileTab from './components/MobileTab.vue'
import { ref } from 'vue';
import { downloadPDF } from '@/utils/index'



const downloadProjectVisible = ref(false)
const downloadProjectProgress = ref(0)
const downloadProject = () => {
    downloadProjectVisible.value = true
    downloadPDF("/project.pdf", (progress) => {
        if (progress == 100) downloadProjectVisible.value = false
        downloadProjectProgress.value = progress
    })
}

const workList = ref([
    {
        src: '/images/p1.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验',
        groupIndex: 1,
    },
    {
        src: '/images/p2.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建',
        groupIndex: 2,
    },
    {
        src: '/images/p3.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握',
        groupIndex: 0,
    },
    {
        src: '/images/p4.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现',
        groupIndex: 1,
    },
    {
        src: '/images/p5.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现',
        groupIndex: 2,
    },
    {
        src: '/images/p6.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验',
        groupIndex: 0,
    },
    {
        src: '/images/p7.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建',
        groupIndex: 1,
    },
    {
        src: '/images/p8.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握',
        groupIndex: 2,
    },
    {
        src: '/images/p9.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现',
        groupIndex: 0,
    },
    {
        src: '/images/p10.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现',
        groupIndex: 1,
    },
])

const selectedWorkList = ref(workList.value.filter(item => item.groupIndex === 0))

const handleChangeWork = (index) => {
    selectedWorkList.value = [...workList.value.filter(item => item.groupIndex === index)];
}

const tabList = ['APP / 小程序', 'Web / B端', '平面 / 其他']
</script>

<template>
    <div class="mobile_work_wrapper">
        <div class="top dfc ai_center">
            <img class="work_logo" src="/images/work.png" draggable="false">
            <div class="introduce">为了节省您的宝贵时间，这里特地准备了一份作品集，还从C端、B端区分做成了相应的栏目🫶🏻</div>
            <img class="banner" src="/images/project/p1.jpg" draggable="false">
            <div class="btn df" style="position: relative;">
                <Button @click="downloadProject" :styles="{
                    width: '134px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#616197',
                    fontSize: '16px'
                }">
                    <i data-feather="download"></i>
                    <span class="ml8">下载作品集</span>
                </Button>
                <!-- 进度条 -->
                <div v-if="downloadProjectVisible" class="progress-container">
                    <div class="progress-bar" :style="{ width: downloadProjectProgress + '%' }"></div>
                </div>
            </div>
        </div>

        <div class="list">
            <!-- <div class="list_title">具体项目：</div> -->
            <MobileTab :tabList="tabList" @change="handleChangeWork" />
            <div class="label df ai_center">
                <div class="oval"></div>
                <span>UI / UX 设计师</span>
            </div>
            <div class="list_box">
                <WorkCard v-for="(item, index) in selectedWorkList" :key="index" :info="item" />
            </div>
        </div>
    </div>
    <MobileFooter />
</template>

<style scoped>
.mobile_work_wrapper {
    position: relative;
    margin: 0 auto;
    padding-top: 157px;
    background-image: url('/images/light2.png');
    background-size: 1440px 388px;
    background-repeat: no-repeat;
}
.top {
    padding: 0 16px;
}
.work_logo {
    width: 81px;
    height: 41px;
}
.introduce {
    margin-top: 24px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: rgba(148,163,184,0.9);
    line-height: 16px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}
.banner {
    margin-top: 24px;
    width: 100%;
    border-radius: 12px;
}
.btn {
    margin-top: 32px;
}
.list {
    padding: 0 16px;
    margin-top: 73px;
    padding-top: 91px;
    background: radial-gradient(100% 90% at 50% 0%, #31324f 0%, transparent 45%, transparent 75%, transparent 100%);
    background-position: 50% -100px;
    background-size: 100% 450px;
    background-repeat: no-repeat;
}
/* .list_title {
    padding-bottom: 12px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(to top right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.6) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.05) 100%);
    color: transparent;
    background-clip: text;
} */

</style>