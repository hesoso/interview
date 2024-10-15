<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import MobileFooter from './components/MobileFooter.vue'
import MobileSkillCard from './components/MobileSkillCard.vue'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const sliderTrack = ref(null);

onMounted(() => {
    let track = sliderTrack.value;
    let currentPosition = 0;
    function scroll() {
        currentPosition -= 1;
        if (Math.abs(currentPosition) >= 411) {
            currentPosition = 0;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});

const projectList = [
    {
      width: '49px',
      src: '/images/mobile/project_1.png',
    },
    {
      width: '20px',
      src: '/images/mobile/project_2.png',
    },
    {
      width: '10px',
      src: '/images/mobile/project_3.png',
    },
    {
      width: '34px',
      src: '/images/mobile/project_4.png',
    },
    {
      width: '48px',
      src: '/images/mobile/project_5.png',
    },
    {
      width: '49px',
      src: '/images/mobile/project_1.png',
    },
    {
      width: '20px',
      src: '/images/mobile/project_2.png',
    },
    {
      width: '10px',
      src: '/images/mobile/project_3.png',
    },
    {
      width: '34px',
      src: '/images/mobile/project_4.png',
    },
    {
      width: '48px',
      src: '/images/mobile/project_5.png',
    },
    {
      width: '49px',
      src: '/images/mobile/project_1.png',
    },
    {
      width: '20px',
      src: '/images/mobile/project_2.png',
    },
    {
      width: '10px',
      src: '/images/mobile/project_3.png',
    },
    {
      width: '34px',
      src: '/images/mobile/project_4.png',
    },
    {
      width: '48px',
      src: '/images/mobile/project_5.png',
    },
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
        desc: '可以独立完成插画工作，以及参与产品前期界面DEMO实现'
    },
]
</script>

<template>
  <div class="mobile_home_wrapper">
    <div class="bg_top_left"></div>
    <div class="bg_bottom_right"></div>
    <div class="title">Personal work blog</div>
    <div class="top df ai_center jc_between">
      <div class="tips">由于该网站主要展示包金龙作品集，建议点击右方复制网址到电脑/iPad端观看 🫶🏻</div>
      <div class="copy_link df_center">
        <img src="/images/mobile/icon_copy_link.png" draggable="false">
      </div>
    </div>
    <div class="project_list">
        <div class="slider">
            <div class="slider-track" ref="sliderTrack">
                <div class="slide" v-for="(item, index) in projectList" :key="index">
                    <img class="project_item" :src="item.src" :width="item.width" draggable="false">
                </div>
            </div>
        </div>
    </div>
    <div class="skill_list">
        <swiper :initialSlide="1" :slidesPerView="'auto'" :spaceBetween="20"
            :centeredSlides="true" :grabCursor="true">
            <swiper-slide v-for="(item, index) in skillList" :key="index">
                <MobileSkillCard :info="item" />
            </swiper-slide>
        </swiper>
    </div>
  </div>
  <MobileFooter />
</template>

<style scoped>
.mobile_home_wrapper {
  position: relative;
  padding: 144px 0 64px;
}

.bg_top_left {
  position: absolute;
  left: 0;
  top: 0;
  width: 147px;
  height: 113px;
  background-image: url('/images/mobile/bg_top_left.png');
  background-size: 147px 113px;
  background-repeat: no-repeat;
}

.bg_bottom_right {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 375px;
  height: 223px;
  background-image: url('/images/mobile/bg_bottom_right.png');
  background-size: 375px 223px;
  background-repeat: no-repeat;
}

.title {
  padding-left: 24px;
  width: 190px;
  height: 96px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(to top right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.6) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.05) 100%);
  color: transparent;
  background-clip: text;
}

.top {
  padding: 0 24px;
  margin-top: 16px;
}

.tips {
  height: 40px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: rgba(148,163,184,0.9);
  line-height: 20px;
  text-align: justified;
  font-style: normal;
  text-transform: none;
}
.copy_link {
  margin-left: 20px;
  width: 40px;
  height: 40px;
  background: #616197;
  border-radius: 8px 8px 8px 8px;
  flex-shrink: 0;
}
.copy_link img {
  width: 24px;
  height: 24px;
}

.project_list {
    margin-top: 32px;
    width: 100%;
}

.project_list .project_item {
    height: 10px;
}

.slider {
    width: 100%;
    overflow: hidden;
}

.slider-track {
    width: 638px;
    display: flex;
    width: max-content;
}

.slide {
    margin-left: 50px;
}

.skill_list {
    margin-top: 32px;
    width: 100%;
}

.skill_list .swiper {
    width: 100%;
}

.skill_list .swiper-slide {
    width: 320px;
    border-radius: 16px;
}
</style>
