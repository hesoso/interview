<script setup>
import feather from 'feather-icons'
import MaskTitle from '@/components/MaskTitle.vue'
import NoteList from './NoteList.vue'
import SkillCard from './SkillCard.vue'
import Button from '@/components/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { onMounted } from 'vue'

onMounted(() => {
    feather.replace({
        width: 20,
        height: 20
    })
})

const modules = [EffectCoverflow]

const projectList = [
    '/src/assets/images/project_1.png',
    '/src/assets/images/project_2.png',
    '/src/assets/images/project_3.png',
    '/src/assets/images/project_4.png',
    '/src/assets/images/project_5.png',
]

const skillList = [
    {
        src: '/src/assets/images/skill_1.png',
        tag: 'A',
        title: '组件设计｜规范搭建',
        desc: '熟悉设计原则、设计系统，有组件 设计、规范搭建和维护经验'
    },
    {
        src: '/src/assets/images/skill_2.png',
        tag: 'B',
        title: '产品设计｜UI设计',
        desc: '从前期产品原型到后期UI落地 全链路产品构建'
    },
    {
        src: '/src/assets/images/skill_3.png',
        tag: 'C',
        title: 'AIGC产品的运用',
        desc: '目前热火的AIGC产品，包括SD、MJ 都已经熟练掌握'
    },
    {
        src: '/src/assets/images/skill_4.png',
        tag: 'D',
        title: '平面设计能力',
        desc: '可以独立完成插画工作，以及参与产品 前期界面视觉探索和DEMO实现'
    },
]
</script>

<template>
    <div class="showtime_wrapper dfc ai_center">
        <div class="dfc ai_center">
            <MaskTitle textUrl="/src/assets/images/text_1.png">
                <div class="desc_1">
                    我相信每一个界面背后都有一个故事，而我的任务是让这个故事为用户所理解并喜爱。从直观的导航到视觉的愉悦，我始终坚持<span
                        class="c_blue">以用户为中心</span>，用设计为他们的每一次点击创造价值</div>
            </MaskTitle>
        </div>
        <div class="df mt90">
            <div class="modal_box">
                <img class="wh100" src="@/assets/images/keyboard.png" draggable="false">
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
                <img class="wh100" src="@/assets/images/todo_task.png" draggable="false">
            </div>
        </div>
        <div class="project_box dfc ai_center">
            <div class="desc_3">
                这些项目展示了我在UI/UX设计中的多样化探索，涵盖了从用户调研到界面设计的完整流程，每个项目都体现了我在提升用户体验和解决设计挑战方面的独特思路
            </div>
            <div class="project_list">
                <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="140" :loop="true"
                    class="mySwiper">
                    <swiper-slide v-for="(item, index) in projectList" :key="index">
                        <img class="project_item" :src="item" draggable="false">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <MaskTitle textUrl="/src/assets/images/text_2.png">
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
                }" :modules="modules">
                <swiper-slide v-for="(item, index) in skillList" :key="index">
                    <SkillCard :info="item" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="contact">
            <div class="shadow_box">
                <MaskTitle textUrl="/src/assets/images/text_3.png" :pure="true" />
                <div class="btn_box df jc_center">
                    <Button :styles="{
                    width: '126px',
                    height: '48px',
                    background: '#616197',
                    borderRadius: '8px',
                    fontSize: '16px'
                }">
                        <i data-feather="plus"></i>
                        <span class="ml5">添加微信</span>
                    </Button>
                    <Button class="ml16" :styles="{
                    width: '132px',
                    height: '48px',
                    borderRadius: '8px',
                    fontSize: '16px'
                }">
                        <i data-feather="chevrons-up"></i>
                        <span class="ml5">顶部看作品</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    background-image: url('@/assets/images/starrysky.png');
    background-size: 872px 600px;
    background-repeat: no-repeat;
    background-position: 190px 0
}

.project_list {
    margin-top: 90px;
    width: 100%;
}

.project_list .swiper {
    width: 100%;
    height: 100%;
}

.project_list .swiper-slide {
    width: auto;
}

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
    background-image: url('@/assets/images/light.png');
    background-size: 975px 600px;
    background-repeat: no-repeat;
}

.shadow_box {
    margin: 276px 0 115px;
    width: 975px;
    /* height: 552px; */
    background: #000212;
    border-radius: 46% 46% 0 0;
}

.btn_box {
    margin-top: 64px;
}
</style>