<script setup>
import Button from '@/components/Button.vue'
import MobileFooter from './components/MobileFooter.vue'
import MobileWorkCard from './components/MobileWorkCard.vue'
import MobileTab from './components/MobileTab.vue'
import { ref, computed } from 'vue'
import { downloadPDF, getDownloadProgress } from '@/utils/index'

const peojectUrl = "/project.pdf"

const downloadProjectVisible = ref(false)
const downloadProjectProgress = ref(0)

const onPeojectProgress = (progress) => {
    if (progress >= 100 || !progress) {
        downloadProjectVisible.value = false
        downloadProjectProgress.value = 0
    } else if (progress >= 0) {
        downloadProjectVisible.value = true
        downloadProjectProgress.value = progress
    }
}

getDownloadProgress(peojectUrl, onPeojectProgress)

const downloadProject = () => {
    downloadPDF(peojectUrl, onPeojectProgress)
}

const workList = [
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
]

const tabIndex = ref(0)

const handleChangeTabIndex = (index) => {
    tabIndex.value = index
}

const selectedWorkList = computed(() => {
    return workList.filter(item => item.groupIndex === tabIndex.value)
})

const tabList = ['APP / 小程序', 'Web / B端', '平面 / 其他']
</script>

<template>
    <div class="mobile_work_wrapper">
        <div class="top dfc ai_center">
            <div class="work_logo">Work</div>
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
            <div class="list_title">具体项目</div>
            <MobileTab :tabList="tabList" @change="handleChangeTabIndex" />
            <div class="list_box">
                <MobileWorkCard style="margin-top: 24px" v-for="item in selectedWorkList" :key="item.src" :info="item" />
            </div>
        </div>
    </div>
    <MobileFooter />
</template>

<style scoped>
.mobile_work_wrapper {
    position: relative;
    margin: 0 auto;
    padding: 120px 0 30px;
    background-image: url('/images/light2.png');
    background-size: 100% 99px;
    background-repeat: no-repeat;
}
.top {
    padding: 0 16px;
}


.work_logo {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(to top right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.8) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.05) 100%);
  color: transparent;
  background-clip: text;
}


.introduce {
    margin-top: 24px;
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
.list_title {
    position: relative;
    width: 98px;
    margin: 0 auto 32px;
    padding-bottom: 12px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(to top right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.8) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.05) 100%);
    color: transparent;
    background-clip: text;
}

.list_title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 12px;
    width: 74px;
    height: 1px;
    background: linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.4), rgba(255,255,255,0.05)); /* 渐变颜色 */
    border-radius: 50px;
}

.progress-container {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 6px;
  background-color: #f3f3f3;
  border-radius: 3px;
}

.progress-container .progress-bar {
  height: 100%;
  background-color: #616197;
  border-radius: 3px;
  transition: width 0.4s ease;
}
</style>