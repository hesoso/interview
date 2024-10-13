<script setup>
import feather from 'feather-icons'
import MaskTitle from '@/components/MaskTitle.vue'
import NoteList from './NoteList.vue'
import SkillCard from './SkillCard.vue'
import Button from '@/components/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { ref, onMounted, onBeforeUnmount } from 'vue';


const visibleItems = ref([]); // 存储当前可见的元素索引
const observer = ref(null); // IntersectionObserver 实例

// 当元素进入视口时调用的回调函数
const handleIntersect = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 当元素进入视口时，将其索引加入可见列表
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            if (!visibleItems.value.includes(index)) {
                visibleItems.value.push(index);
            }
        }
    });
};


const sliderTrack = ref(null);

onMounted(() => {

    feather.replace({
        width: 20,
        height: 20
    })

    // 创建 IntersectionObserver 实例
    observer.value = new IntersectionObserver(handleIntersect, {
        threshold: 0.8, // 只有元素 10% 进入视口时才触发
    });


    // 观察每个需要动画的元素
    document.querySelectorAll('.animate_item').forEach((el) => {
        observer.value.observe(el);
    });



    let track = sliderTrack.value;
    let currentPosition = 0;
    function scroll() {
        currentPosition -= 1; // 每次移动1px
        if (Math.abs(currentPosition) >= 1325) {
            // 当滚动到一半时，重置位置（无缝衔接）
            currentPosition = 0;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scroll); // 保证流畅的动画效果
    }

    scroll();
});

onBeforeUnmount(() => {
    // 在组件卸载时取消观察
    if (observer.value) {
        observer.value.disconnect();
    }
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动到顶部
    });
}

// 控制二维码显示与隐藏的状态
const isQRCodeVisible = ref(false);

// 显示二维码
const showQRCode = () => {
    isQRCodeVisible.value = true;
};

// 隐藏二维码
const hideQRCode = () => {
    isQRCodeVisible.value = false;
};


const modules1 = [Autoplay]
const modules2 = [EffectCoverflow]

const projectList = [
    '/images/project_1.png',
    '/images/project_2.png',
    '/images/project_3.png',
    '/images/project_4.png',
    '/images/project_5.png',
    '/images/project_1.png',
    '/images/project_2.png',
    '/images/project_3.png',
    '/images/project_4.png',
    '/images/project_5.png',
]

const skillList = [
    {
        src: '/images/skill_1.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验'
    },
    {
        src: '/images/skill_2.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建'
    },
    {
        src: '/images/skill_3.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握'
    },
    {
        src: '/images/skill_4.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
]
</script>

<template>
    <div class="showtime_wrapper dfc ai_center w100">
        <div class="dfc ai_center animate_item" ref="animateItem" :class="{ visible: visibleItems.length === 1 }">
            <MaskTitle textUrl="/images/text_1.png">
                <div class="desc_1">
                    我相信每一个界面背后都有一个故事，而我的任务是让这个故事为用户所理解并喜爱。从直观的导航到视觉的愉悦，我始终坚持<span
                        class="c_blue">以用户为中心</span>，用设计为他们的每一次点击创造价值</div>
            </MaskTitle>
        </div>
        <div class="df mt90">
            <div class="modal_box">
                <img class="wh100" src="/images/keyboard.png" draggable="false">
            </div>
            <div class="modal_box ctrl_box dfc ai_center">
                <div class="days df ai_center">
                    <div class="left">993</div>
                    <div class="right">days already</div>
                </div>
                <div class="dream">
                    大学毕业已经993多天了，我的梦想是成为一个公司的 Ctrl 键，继续努力！
                </div>
                <NoteList class="mt30" />
            </div>
            <div class="modal_box">
                <img class="wh100" src="/images/todo_task.png" draggable="false">
            </div>
        </div>
        <div class="project_box dfc ai_center">
            <div class="desc_3">
                这些项目展示了我在UI/UX设计中的多样化探索，涵盖了从用户调研到界面设计的完整流程，每个项目都体现了我在提升用户体验和解决设计挑战方面的独特思路
            </div>
            <div class="project_list">
                <div class="slider">
                    <!-- <swiper :autoplay="{ delay: 2000, disableOnInteraction: false }" :spaceBetween="150"
                    :slidesPerView="'auto'" :loop="true" :speed="500" :modules="modules1" class="mySwiper">
                    <swiper-slide v-for="(item, index) in projectList" :key="index">
                        <img class="project_item" :src="item" draggable="false">
                    </swiper-slide>
                </swiper> -->
                    <div class="slider-track" ref="sliderTrack">
                        <div class="slide" v-for="(item, index) in projectList" :key="index">
                            <img class="project_item" :src="item" draggable="false">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MaskTitle textUrl="/images/text_2.png">
            <div class="desc_1">
                我对设计技术非常痴迷，每一次掌握新技能都让我感受到非常的开心。我始终相信，持续学习和不断创新是成为卓越设计师的关键，这种<span
                    class="c_blue">热爱驱动</span>我在每一个项目中都追求极致的用户体验</div>
        </MaskTitle>
        <div class="skill_list">
            <swiper :initialSlide="1" :effect="'coverflow'" :slidesPerView="'auto'" :spaceBetween="22"
                :centeredSlides="true" :grabCursor="true" :pagination="{
            clickable: true,
        }" :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }" :modules="modules2">
                <swiper-slide v-for="(item, index) in skillList" :key="index">
                    <SkillCard :info="item" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="contact">
            <div class="shadow_box">
                <MaskTitle textUrl="/images/text_3.png" :pure="true" />
                <div class="btn_box df jc_center">
                    <Button @mouseenter="showQRCode" @mouseleave="hideQRCode" :styles="{
            width: '126px',
            height: '48px',
            background: '#616197',
            borderRadius: '8px',
            fontSize: '16px'
        }">
                        <i data-feather="plus"></i>
                        <span class="ml5">添加微信</span>
                    </Button>
                    <Button @click="scrollToTop" class="ml16" :styles="{
            width: '132px',
            height: '48px',
            borderRadius: '8px',
            fontSize: '16px'
        }">
                        <i data-feather="chevrons-up"></i>
                        <span class="ml5">顶部看作品</span>
                    </Button>
                    <transition name="fade">
                        <div v-if="isQRCodeVisible" class="qrcode-popup">
                            <img src="/images/qrcode.png" alt="微信二维码" />
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider {
    width: 100%;
    overflow: hidden;
    /* 隐藏超出部分 */
}

.slider-track {
    display: flex;
    width: max-content;
    /* 自动根据内容的宽度伸展 */
    /* transition: transform 0.2s linear; */
    /* 设置线性动画过渡 */
}

.slide {
    /* 每张图片宽度 */
    margin-left: 160px;
}


.showtime_wrapper {
    position: relative;
    display: flex;
}

.ml5 {
    margin-left: 5px;
}

.ml16 {
    margin-left: 16px;
}

.desc_1 {
    margin-top: 30px;
    width: 650px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    text-transform: none;
    letter-spacing: 1px;
    background: linear-gradient(to bottom, #B2B2B2, #ACACAE);
    -webkit-background-clip: text;
    color: transparent;
}

.desc_1 .c_blue {
    color: #00FFFF;
}

.mt90 {
    margin-top: 90px;
}

.mt30 {
    margin-top: 30px;
}

.modal_box {
    width: 379px;
    height: 318px;
}

.ctrl_box {
    margin: 0 20px;
    border-radius: 20px 20px 20px 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.07) 100%);
}

.ctrl_box .days {
    margin-top: 32px;
}

.ctrl_box .days .left {
    font-family: JetBrains Mono, JetBrains Mono;
    font-weight: bold;
    font-size: 32px;
    color: #FFFFFF;
    line-height: 23px;
    text-align: left;
    text-transform: none;
}

.ctrl_box .days .right {
    margin-left: 5px;
    width: 58px;
    font-family: Inter, Inter;
    font-weight: 500;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 16px;
    text-align: left;
    text-transform: none;
}

.ctrl_box .dream {
    margin-top: 18px;
    width: 238px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 14px;
    color: rgba(180, 188, 208, 0.5);
    text-align: center;
    text-transform: none;
}

.desc_3 {
    width: 610px;
    font-family: OPPO Sans, OPPO Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(to bottom, #B2B2B2, #ACACAE);
    -webkit-background-clip: text;
    color: transparent;
}

.project_box {
    margin-top: 130px;
    padding-bottom: 112px;
    width: 100%;
    background-image: url('/images/starrysky.png');
    background-size: 872px 600px;
    background-repeat: no-repeat;
    background-position: 290px 0
}

.project_list {
    margin-top: 90px;
    width: 100%;
}

/* .project_list .swiper {
    width: 100%;
    height: 100%;
}


.project_list .swiper-slide {
    width: auto;
} */

.project_list .project_item {
    height: 32px;
}

.skill_list {
    margin-top: 90px;
    width: 100%;
}

.skill_list .swiper {
    width: 100%;
    height: 100%;
}

.skill_list .swiper-slide {
    width: 378px;
}

.contact {
    background-image: url('/images/light.png');
    background-size: 975px 600px;
    background-repeat: no-repeat;
}

.shadow_box {
    margin: 276px 0 240px;
    width: 975px;
    background: #000212;
    border-radius: 50% 50% 0 0;
}

.btn_box {
    position: relative;
    margin-top: 64px;
}

.qrcode-popup {
    position: absolute;
    top: 60px;
    left: 50%;
    margin-left: -185px;
    border-radius: 15px;
}

.qrcode-popup img {
    width: 220px;
    height: 220px;
}

.animate_item {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;

}

.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>