<script setup>
import Button from '@/components/Button.vue'
import MobileFooter from './components/MobileFooter.vue'
import MobileWorkCard from './components/MobileWorkCard.vue'
import MobileProject from './components/MobileProject.vue'
import MobileTab from './components/MobileTab.vue'
import { ref, onMounted, computed } from 'vue'
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

// 图片列表
const imgList = Array.from(Array(3)).map((_, index) => {
  return `/images/project/p${index + 1}.jpg`
})

const preloadImages = (images) => {
  images.forEach(imageUrl => {
    const img = new Image();
    img.src = imageUrl;  // 提前加载图片
    img.onload = () => {
      console.log(`${imageUrl} 预加载完成`);
    };
    img.onerror = () => {
      console.log(`${imageUrl} 加载失败`);
    };
  });
}

onMounted(() => {
    preloadImages(imgList)
})

const topSrc = ref(null)
const imgRange = ref([])
const projectVisible = ref(false);
const setProjectVisible = (flag = true) => {
    topSrc.value = null
    imgRange.value = []
    projectVisible.value = flag
}

const showProject = (val) => {
    if (!val.imgRange) return
    imgRange.value = val.imgRange
    topSrc.value = val.topSrc
    projectVisible.value = true
}

const workList = [
    {
        src: '/images/p1.png',
        tag: 'A',
        title: '日上集团',
        desc: '日上门业启动了门业、师傅端、录单端、后端在内的四端联合开发项目',
        imgRange: [4, 26],
        topSrc: '/images/project/top_1.png',
        groupIndex: 0
    },
    {
        src: '/images/p2.png',
        tag: 'B',
        title: '造化科技',
        desc: '为当代中国创造摩登明艳、精致的生活万物，把正员设计，带入大众真实生活',
        imgRange: [27, 32],
        topSrc: '/images/project/top_2.png',
        groupIndex: 0
    },
    {
        src: '/images/p3.png',
        tag: 'C',
        title: 'Web设计',
        desc: '致力于打造直观且引人入胜的网站，为用户提供卓越的浏览体验',
        imgRange: [45, 48],
        topSrc: '/images/project/top_3.png',
        groupIndex: 1
    },
    {
        src: '/images/p4.png',
        tag: 'D',
        title: 'B端设计',
        desc: '熟悉设计原则、设计系统，有利用组件设计、规范搭建和维护经验',
        imgRange: [34, 43],
        topSrc: '/images/project/top_4.png',
        groupIndex: 1
    },
    {
        src: '/images/p5.png',
        tag: 'E',
        title: '平面设计',
        desc: '能够为各种媒体平台创作引人注目的视觉设计，提升品牌形象和用户体验',
        imgRange: [50, 54],
        topSrc: '/images/project/top_5.png',
        groupIndex: 2
    },
    {
        src: '/images/p6.png',
        tag: 'F',
        title: 'Waiting...',
        desc: `非常期待与您的合作与共建！`,
        groupIndex: 2
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
        <MobileProject v-if="projectVisible" :topSrc="topSrc" :imgRange="imgRange" @close="setProjectVisible" />
        <div class="top dfc ai_center">
            <div class="work_logo">Work</div>
            <div class="introduce">为了节省您的宝贵时间，这里特地准备了一份作品集，还从C端、B端区分做成了相应的栏目🫶🏻</div>
            <img @click="setProjectVisible" class="banner" src="/images/project/p1.jpg" draggable="false">
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
                <MobileWorkCard @click="showProject(item)" style="margin-top: 24px" v-for="item in selectedWorkList" :key="item.src" :info="item" />
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