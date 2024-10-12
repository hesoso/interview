<script setup>
import feather from 'feather-icons'
import Button from '@/components/Button.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue'

onMounted(() => {
    feather.replace({
        width: 20,
        height: 20
    })
})

const experienceList = [
  {
    time: '2023. 01 ～ 至今',
    company: '北京日上集团',
    post: 'UI/UE设计师',
    jobs: [
      {
        content: '电商小程序设计',
        details: [
          '产品：前期 0-1 产品原型的搭建，负责小程序的前期售后服务板块需求调研',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
        ]
      },
      {
        content: '电商小程序设计',
        details: [
          '产品：前期 0-1 产品原型的搭建，负责小程序的前期售后服务板块需求调研',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
        ]
      }
    ]
  },
  {
    time: '2021. 07 ～ 2023. 01',
    company: '北京造化科技有限公司',
    post: 'UI设计师',
    jobs: [
      {
        content: '电商小程序设计',
        details: [
          '产品：前期 0-1 产品原型的搭建，负责小程序的前期售后服务板块需求调研',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
        ]
      }
    ]
  },
  {
    time: '2019. 03 ～ 2021. 07',
    company: '上海芳欣科技有限公司',
    post: 'UI设计师',
    jobs: [
      {
        content: '电商小程序设计',
        details: [
          '产品：前期 0-1 产品原型的搭建，负责小程序的前期售后服务板块需求调研',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
          '设计：独立负责小程序视觉UI设计以及用户体验，为新产品提供创意方案，',
        ]
      }
    ]
  }
]
</script>

<template>
  <div class="resume_wrapper dfc">
      <div class="base">
        <img class="logo_name" src="@/assets/images/logo_name.png" draggable="false" >
        <div class="label df ai_center">
            <div class="oval"></div>
            <span>UI / UX 设计师</span>
        </div>
        <div class="title mt64">介绍：</div>
        <div class="text">
          我目前是一名工作三年的 UI 设计师，担任过产品经理的角色，拥有产品思维，有从 0-1 搭建项目经验，梦想成为一名优秀的用户体验设计师，在电商、IOT、智能家居等多个行业拥有洞察力和实践经验；
        </div>
        <div class="text">
          我对技术的无限可能性充满热情，同时专注于探索产品设计的价值，寻求最终设计、交互、技术融入以及商业理解之间的平衡来解决问题，最大程度发挥设计价值。对前端代码开发的工作进行无缝配合，对 android、ios 平台的设计规范和尺寸有较 深入的了解，熟悉 APP 、小程序、Web 架构和设计规则;          </div>
        <div class="text">
          视觉传达设计专业毕业，十余年绘画功底，有素描、色彩、 鼠绘、手绘绘画能力，具备很强的逻辑思维能力、自学能力和沟通能力；</div>
        <div class="text">熟练利用AIGC等相关AI产品配合工作提高 工作效率。</div>
        <div class="df mt42">
          <div class="card left">
            <div class="title">联系：</div>
            <div class="item">邮箱：<span class="underline-dashed">bjl924143589@163.com</span></div>
            <div class="item">微信：<span class="underline-dashed">baojinlong01</span></div>
          </div>
          <div class="card right">
            <div class="title">简历 & 作品集：</div>
            <div class="df jc_between">
              <div class="dfc">
                <div class="item">下载我的简历（PDF)</div>
                <Button class="mt16" :styles="{
                    width: '96px',
                    height: '30px',
                    borderRadius: '8px',
                    background: '#616197',
                    fontSize: '16px'
                }">下载简历</Button>
              </div>
              <div class="dfc">
                <div class="item">下载我的作品集（PDF)</div>
                <Button class="mt16" :styles="{
                    width: '112px',
                    height: '30px',
                    borderRadius: '8px',
                    background: '#616197',
                    fontSize: '16px'
                }">下载作品集</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skill df jc_center">
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="@/assets/images/icon_s1.png" draggable="false" >
            <span>系统化设计</span>
          </div>
          <div class="item">结构、系统化设计思维，注重逻辑与数据驱动</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="@/assets/images/icon_s2.png" draggable="false" >
            <span>设计资产沉淀</span>
          </div>
          <div class="item">体系化设计资产落地经验，深耕设计系统领域</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="@/assets/images/icon_s3.png" draggable="false" >
            <span>熟悉开发思路</span>
          </div>
          <div class="item">开发、角色共情能力，利用工程化思维解决问题</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="@/assets/images/icon_s4.png" draggable="false" >
            <span>像素强迫症</span>
          </div>
          <div class="item">丰富的 B、C 端多行业产品设计经验，像素强迫症</div>
        </div>
      </div>
      <div class="experience">
        <div class="df experience_item" v-for="(item1, index1) in experienceList" :key="index1">
          <div class="time df ai_center">
            <img class="circle" src="@/assets/images/circle.png" draggable="false" >
            <span>{{ item1.time }}</span>
          </div>
          <div class="dfc">
            <div class="company df ai_center">
              <span>{{ item1.company }}</span>
              <img class="share" src="@/assets/images/share.png" draggable="false" >
            </div>
            <div class="post">{{ item1.post }}</div>
          </div>
          <div class="dfc">
            <div class="jobs" v-for="(item2, index2) in item1.jobs" :key="index2">
              <div class="content">{{ item2.content }}</div>
              <div class="details">
                <div class="mt16" v-for="(item3, index3) in item2.details" :key="index3">
                  {{ item3 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
          <div class="shadow_box dfc ai_center">
              <img class="text_img" src="@/assets/images/text_4.png" draggable="false" >
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
          </div>
      </div>
      <Footer />
  </div>
</template>

<style scoped>
.resume_wrapper {
  padding-top: 168px;
  background-image: url('@/assets/images/light2.png');
  background-size: 1440px 388px;
  background-repeat: no-repeat;
  z-index: 1;
}

.base {
  padding: 52px 0 143px 132px;
  background-image: url('@/assets/images/bg_build.png');
  background-size: 567px 705px;
  background-position: 873px 0px;
  background-repeat: no-repeat;
  z-index: 2;
  border-radius: 0 0 300px 300px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.mt64 {
  margin-top: 64px;
}
.mt42 {
  margin-top: 42px;
}
.mt16 {
  margin-top: 16px;
}

.icon_title {
  margin-left: -8px;
  height: 32px;
}

.title {
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

.text {
  margin-top: 24px;
  width: 689px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: #94A3B8;
  line-height: 20px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.logo_name {
  width: 484px;
  height: 86px;
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

.card {
  padding: 24px;
  height: 150px;
  border-radius: 24px;
  background: linear-gradient( 180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.07) 100%);
  border: 1px solid;
}

.underline-dashed {
  cursor: pointer;
  border-bottom: 1px dashed;
}

.left {
  width: 249px;
}
.right {
  margin-left: 16px;
  width: 424px;
}

.item {
  margin-top: 14px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: #94A3B8;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.skill {
  padding-top: 139px;
  height: 254px;
  background: radial-gradient(100% 100% at 50% 0%, #414579 0%, transparent 45%, transparent 75%, transparent 100%);
  background-position: 50% -100px;
  background-size: 100% 450px;
  background-repeat: no-repeat;
}
.skill_item {
  margin: 0 8px;
  width: 282px;
  height: 115px;
}

.experience {
  margin-top: 120px;
  padding: 0 132px;
}

.experience_item:not(:first-child) {
  margin-top: 64px;
}

.jobs:not(:first-child) {
  margin-top: 32px;
}

.time {
  width: 266px;
  height: 24px;
  flex-shrink: 0;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.time .circle {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}
.company {
  width: 266px;
  flex-shrink: 0;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.company .share {
  margin-left: 3px;
  width: 24px;
  height: 24px;
}
.post {
  margin-top: 8px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: rgba(148,163,184,0.8);
  line-height: 24px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.content {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 16px;
  color: #E3E4E6;
  line-height: 21px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.details {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: #768397;
  line-height: 20px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.contact {
  margin: 0 auto;
  background-image: url('@/assets/images/light.png');
  background-size: 975px 600px;
  background-repeat: no-repeat;
}

.shadow_box {
  margin-top: 276px;
  width: 975px;
  height: 295px;
  background: #000212;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
}

.text_img {
  margin: 84px 0 24px;
  width: 316px;
  height: 67px;
}

</style>