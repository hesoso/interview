<script setup>
import feather from 'feather-icons'
import Button from '@/components/Button.vue'
import Footer from './components/Footer.vue'
import WorkCard from './components/WorkCard.vue'
import Project from './components/Project.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { downloadPDF, getDownloadProgress } from '@/utils/index'
import Atropos from 'atropos';
import 'atropos/css'


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


const isButtonVisible = ref(false);
const buttonStyle = ref({
    top: '0px',
    left: '0px',
    opacity: '0',
});

const showButton = () => {
    isButtonVisible.value = true;
};

const hideButton = () => {
    isButtonVisible.value = false;
};

let currentMouseX = 0;
let currentMouseY = 0;


// 更新按钮位置的函数
const updateButtonPosition = () => {
    const container = document.querySelector('.banner');
    const rect = container.getBoundingClientRect();
    const offsetX = currentMouseX - rect.left;
    const offsetY = currentMouseY - rect.top;
    const buttonOffset = 20;

    buttonStyle.value = {
        top: `${offsetY + buttonOffset - 4}px`,
        left: `${offsetX + buttonOffset - 4}px`,
        opacity: '1',
    };
};

// 处理鼠标移动的函数，更新当前位置
const handleMouseMove = (event) => {
    currentMouseX = event.clientX;
    currentMouseY = event.clientY;
    updateButtonPosition();
};

// 监听页面滚动的函数
const handleScroll = () => {
    if (isButtonVisible.value) {
        updateButtonPosition();
    }
};

// 监听页面滚动事件
onMounted(() => {
    feather.replace({
        width: 16,
        height: 16
    })
    window.addEventListener('scroll', handleScroll);

    const myAtropos = Atropos({
        el: '.my-atropos',
        activeOffset: 10,
        shadowScale: 1.05,
        shadowOffset: 50,
        rotateXMax: 1,
        rotateYMax: 1,
    });

    preloadImages(imgList)

});

// 移除滚动监听
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

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
        title: '日上集团',
        desc: '日上门业启动了门业、师傅端、录单端、后端在内的四端联合开发项目',
        imgRange: [4, 26],
        topSrc: '/images/project/top_1.png'
    },
    {
        src: '/images/p2.png',
        tag: 'B',
        title: '造化科技',
        desc: '为当代中国创造摩登明艳、精致的生活万物，把正员设计，带入大众真实生活',
        imgRange: [27, 32],
        topSrc: '/images/project/top_2.png'
    },
    {
        src: '/images/p3.png',
        tag: 'C',
        title: 'Web设计',
        desc: '致力于打造直观且引人入胜的网站，为用户提供卓越的浏览体验',
        imgRange: [45, 48],
        topSrc: '/images/project/top_3.png'
    },
    {
        src: '/images/p4.png',
        tag: 'D',
        title: 'B端设计',
        desc: '熟悉设计原则、设计系统，有利用组件设计、规范搭建和维护经验',
        imgRange: [34, 43],
        topSrc: '/images/project/top_4.png'
    },
    {
        src: '/images/p5.png',
        tag: 'E',
        title: '平面设计',
        desc: '能够为各种媒体平台创作引人注目的视觉设计，提升品牌形象和用户体验',
        imgRange: [50, 54],
        topSrc: '/images/project/top_5.png'
    },
    {
        src: '/images/p6.png',
        tag: 'F',
        title: 'Waiting...',
        desc: `非常期待与您的合作与共建！`
    },
]
</script>

<template>
    <div class="work_wrapper">
        <Project v-if="projectVisible" :topSrc="topSrc" :imgRange="imgRange" @close="setProjectVisible" />
        <div class="top df">
            <div class="left df ai_center">
                <img class="work_logo w100" src="/images/work.png" draggable="false">
                <div class="introduce">为了节省您的宝贵时间，这里特地准备了一份作品集，还从C端、B端区分做成了相应的栏目🫶🏻</div>
            </div>
            <div class="right df" style="position: relative;">
                <Button class="ml16" :styles="{
            width: '134px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(97,97,151,0.32)',
            fontSize: '16px'
        }">
                    <div class="df ai_center" @click="setProjectVisible">
                        <i data-feather="eye"></i>
                        <span class="ml8">查看作品集</span>
                    </div>
                </Button>
                <Button @click="downloadProject" class="ml16" :styles="{
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
        <div class="atropos my-atropos">
            <!-- scale container (required) -->
            <div class="atropos-scale">
                <!-- rotate container (required) -->
                <div class="atropos-rotate">
                    <!-- inner container (required) -->
                    <div class="atropos-inner" style="border-radius: 40px;">
                        <!-- put your custom content here -->
                        <div class="banner" @click="setProjectVisible" @mousemove="handleMouseMove"
                            @mouseenter="showButton" @mouseleave="hideButton">
                            <div v-if="isButtonVisible" :style="buttonStyle" class="confirm_button df_center">查看作品集
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="list">
            <div class="list_title">具体项目：</div>
            <div class="label df ai_center">
                <div class="oval"></div>
                <span>UI / UX 设计师</span>
            </div>
            <div class="list_box">
                <WorkCard @click="showProject(item)" v-for="(item, index) in workList" :key="index" :info="item" />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.work_wrapper {
    position: relative;
    margin: 0 auto;
    padding: 180px 132px 0;
    width: 1440px;
    background-image: url('/images/light2.png');
    background-size: 1440px 388px;
    background-repeat: no-repeat;
}


.my-atropos {
    margin-top: 40px;
    width: 1176px;
    height: 662px;
}


.ml8 {
    margin-left: 8px;
}

.ml16 {
    margin-left: 16px
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
    position: relative;
    height: 662px;
    border-radius: 40px;
    background-image: url('/images/project/p1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    transition: transform 0.2s ease;
    /* 添加平滑的缩放动画效果 */
    perspective: 1000px;
    /* 3D 透视效果 */
    transform-style: preserve-3d;
    /* 保持子元素的 3D 变换 */
    cursor: url('/images/cursor.png'), auto;
    /* 使用绿色光标图片 */
}

.progress-container {
    width: 134px;
    height: 6px;
    background-color: #f3f3f3;
    border-radius: 3px;
    position: absolute;
    top: 50px;
    right: 0;
}

.progress-container .progress-bar {
    height: 100%;
    background-color: #616197;
    border-radius: 3px;
    transition: width 0.4s ease;
}


.confirm_button {
    position: absolute;
    transition: opacity 0.2s ease;

    width: 105px;
    height: 22px;
    background: #32B971;
    border-radius: 0px 11px 11px 9px;

    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 19px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.list_title {
    margin-top: 96px;
    width: 689px;
    height: 23px;
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
    border-radius: 9999px;
    border: 1px solid #94A3B8;
}

.label {
    margin-top: 16px;
    height: 21px;
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
    grid-template-columns: repeat(3, 1fr);
    /* 每行三个元素，宽度平均分配 */
    gap: 16px 14px;
    /* 元素之间的间距 */
}
</style>