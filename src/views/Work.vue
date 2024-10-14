<script setup>
import feather from 'feather-icons'
import Button from '@/components/Button.vue'
import Footer from './components/Footer.vue'
import WorkCard from './components/WorkCard.vue'
import Project from './components/Project.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { downloadPDF } from '@/utils/index'
import Atropos from 'atropos';
import 'atropos/css'

const projectVisible = ref(false);

const setProjectVisible = (flag = true) => {
    projectVisible.value = flag
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

});

// 移除滚动监听
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});


const downloadProjectVisible = ref(false)
const downloadProjectProgress = ref(0)
const downloadProject = () => {
    downloadProjectVisible.value = true
    downloadPDF("/project.pdf", (progress) => {
        if (progress == 100) downloadProjectVisible.value = false
        downloadProjectProgress.value = progress
    })
}

const workList = [
    {
        src: '/images/p1.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验'
    },
    {
        src: '/images/p2.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建'
    },
    {
        src: '/images/p3.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握'
    },
    {
        src: '/images/p4.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
    {
        src: '/images/p5.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
    {
        src: '/images/p6.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验'
    },
    {
        src: '/images/p7.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建'
    },
    {
        src: '/images/p8.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握'
    },
    {
        src: '/images/p9.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
    {
        src: '/images/p10.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
]
</script>

<template>
    <div class="work_wrapper">
        <Project v-if="projectVisible" @close="setProjectVisible" />
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
                <WorkCard v-for="(item, index) in workList" :key="index" :info="item" />
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

    font-family: Alibaba PuHuiTi 3.0, Alibaba PuHuiTi 30;
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
    border-radius: 9999px;
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
    grid-template-columns: repeat(3, 1fr);
    /* 每行三个元素，宽度平均分配 */
    gap: 16px 14px;
    /* 元素之间的间距 */
}
</style>