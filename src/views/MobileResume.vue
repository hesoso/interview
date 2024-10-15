<script setup>
import { ref, computed } from 'vue';
import Button from '@/components/Button.vue'
import MobileTab from './components/MobileTab.vue'
import MobileFooter from './components/MobileFooter.vue'
import { downloadPDF } from '@/utils/index'

const copied = ref(false);
// 复制文本的函数
const copyText = async (text) => {
  try {
    // 使用 Clipboard API 复制文本
    await navigator.clipboard.writeText(text);
    copied.value = true;

    // 复制成功后，设置 2 秒后隐藏提示
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("复制失败：", err);
  }
};

const isQRCodeVisible = ref(false);
const handleAddWx = () => {
  isQRCodeVisible.value = true;
}

const downloadResumeVisible = ref(true)
const downloadResumeProgress = ref(0)
const downloadResume = () => {
  downloadResumeVisible.value = true
  downloadPDF("/resume.pdf", (progress) => {
    if (progress == 100) downloadResumeVisible.value = false
    downloadResumeProgress.value = progress
  })
}

const downloadProjectVisible = ref(false)
const downloadProjectProgress = ref(0)
const downloadProject = () => {
  downloadProjectVisible.value = true
  downloadPDF("/project.pdf", (progress) => {
    if (progress == 100) downloadProjectVisible.value = false
    downloadProjectProgress.value = progress
  })
}

const experienceList = [
  {
    time: '2023. 01 ～ 至今',
    company: '北京日上集团',
    imgSrc: '/images/company_1.png',
    tab: '第三段经验',
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
    imgSrc: '/images/company_2.png',
    tab: '第二段经验',
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
    imgSrc: '/images/company_3.png',
    tab: '第一段经验',
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

const tabList = computed(() => {
  return experienceList.map(item => item.tab)
})

const selectedExperience = ref(experienceList[0])

const handleExperience = (index) => {
  selectedExperience.value = experienceList[index]
}
</script>

<template>
  <div class="mobile_resume_wrapper">
    <transition name="fade">
      <div v-if="copied" class="copy-success">
        内容已复制到剪贴板
      </div>
    </transition>
    <div class="bg_top_right"></div>
    <div class="base mx16">
      <div class="name">包金龙 - Barry</div>
      <div class="label df ai_center">
          <div class="oval"></div>
          <span>UI / UX 设计师</span>
      </div>
    </div>
    <div class="introduce mx16">
      <div class="title">介绍：</div>
      <div class="introduce_item">我目前是一名工作三年的 UI 设计师，初级开发人员，拥有产品思维，有从 0-1 搭建项目经验，梦想成为一名优秀的用户体验设计师，在电商、IOT、智能家居等多个行业拥有洞察力和实践经验；</div>
      <div class="introduce_item">我对技术的无限可能性充满热情，同时专注于探索产品设计的价值，寻求最终设计、交互、技术融入以及商业理解之间的平衡来解决问题，最大程度发挥设计价值。对前端代码开发的工作进行无缝配合，对 android、ios 平台的设计规范和尺寸有较 深入的了解，熟悉 APP 、小程序、Web 架构和设计规则;</div>
      <div class="introduce_item">视觉传达设计专业毕业，十余年绘画功底，有素描、色彩、 鼠绘、手绘绘画能力，具备很强的逻辑思维能力、自学能力和沟通能力；</div>
      <div class="introduce_item">熟练利用AIGC等相关AI产品配合工作提高 工作效率。</div>
    </div>
    <div class="card mx16">
      <div class="title">联系：</div>
      <div class="item">邮箱：<span @click="copyText('bjl924143589@163.com')" class="underline-dashed">bjl924143589@163.com</span></div>
      <div class="item">微信：<span @click="copyText('baojinlong01')" class="underline-dashed">baojinlong01</span></div>
    </div>
    <div class="card mx16">
      <div class="title">简历 & 作品集：</div>
      <div class="df jc_between">
        <div class="dfc" style="position: relative;">
          <div class="item">我的简历（PDF)</div>
          <Button @click="downloadResume" class="mt10" :styles="{
            width: '112px',
            height: '30px',
            borderRadius: '8px',
            background: '#616197',
            fontSize: '16px',
          }">
            <span>下载简历</span>
          </Button>

          <!-- 进度条 -->
          <div v-if="downloadResumeVisible" class="progress-container">
            <div class="progress-bar" :style="{ width: downloadResumeProgress + '%' }"></div>
          </div>

        </div>
        <div class="dfc" style="position: relative;">
          <div class="item">我的作品集（PDF)</div>
          <Button @click="downloadProject" class="mt10" :styles="{
            width: '112px',
            height: '30px',
            borderRadius: '8px',
            background: '#616197',
            fontSize: '16px'
          }">下载作品集</Button>

          <!-- 进度条 -->
          <div v-if="downloadProjectVisible" class="progress-container">
            <div class="progress-bar" :style="{ width: downloadProjectProgress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="skill df jc_between mx16">
      <div class="card skill_item">
        <div class="df skill_title ai_center">
          <img class="icon_title" src="/images/icon_s1.png" draggable="false">
          <span>系统化设计</span>
        </div>
        <div class="item skill_desc">结构、系统化设计思维，注重逻辑与数据驱动</div>
      </div>
      <div class="card skill_item">
        <div class="df skill_title ai_center">
          <img class="icon_title" src="/images/icon_s2.png" draggable="false">
          <span>设计资产沉淀</span>
        </div>
        <div class="item skill_desc">体系化设计资产落地经验，深耕设计系统领域</div>
      </div>
      <div class="card skill_item">
        <div class="df skill_title ai_center">
          <img class="icon_title" src="/images/icon_s3.png" draggable="false">
          <span>熟悉开发思路</span>
        </div>
        <div class="item skill_desc">开发、角色共情能力，利用工程化思维解决问题</div>
      </div>
      <div class="card skill_item">
        <div class="df skill_title ai_center">
          <img class="icon_title" src="/images/icon_s4.png" draggable="false">
          <span>像素强迫症</span>
        </div>
        <div class="item skill_desc">丰富的 B、C 端多行业产品设计经验，像素强迫症</div>
      </div>
    </div>
    <div class="df jc_center">
      <img class="icon_split" src="/images/logo_3.png" draggable="false">
    </div>
    <div class="mx16"><MobileTab :tabList="tabList" @change="handleExperience" /></div>
    <div class="experience mx16">
      <div class="df jc_between">
        <div class="time df ai_center">
          <img class="circle" src="/images/circle.png" draggable="false">
          <span>{{ selectedExperience.time }}</span>
        </div>
        <div class="post">{{ selectedExperience.post }}</div>
      </div>
      <p class="exp_company ai_center">
        <img class="icon_exp" :src="selectedExperience.imgSrc" draggable="false">
        <span class="exp_company_name">{{ selectedExperience.company }}</span>
        <img class="icon_exp" src="/images/share.png" draggable="false">
      </p>
      <div class="exp_jobs" v-for="(item1, index1) in selectedExperience.jobs" :key="index1">
        <div class="exp_jobs_name">{{ item1.content }}</div>
        <div class="exp_jobs_item" v-for="(item2, index2) in item1.details" :key="index2">
          <span>{{ item2 }}</span>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="shadow_box dfc ai_center">
        <img class="text_img" src="/images/text_4.png" draggable="false">
        <Button @click="handleAddWx" :styles="{
        width: '126px',
        height: '48px',
        background: '#616197',
        borderRadius: '8px',
        fontSize: '16px',
        position: 'relative',
      }">
          <img class="icon_plus" src="/images/mobile/icon_plus.png" draggable="false">
          <span class="ml5">添加微信</span>
        </Button>
        <transition name="fade">
          <div v-if="isQRCodeVisible" class="qrcode-popup" @click="isQRCodeVisible = false">
            <img src="/images/qrcode.png" alt="微信二维码" />
          </div>
        </transition>
      </div>
    </div>
    <MobileFooter />
  </div>
</template>

<style scoped>
.mobile_resume_wrapper {
  position: relative;
  padding-top: 181px;
}

.mx16 {
  margin: 0 16px;
}

.mt10 {
  margin-top: 10px;
}

.copy-success {
  position: fixed;
  top: 30%;
  left: 50%;
  margin-left: -100PX;
  width: 200px;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #fff;
  color: #fff;
  transition: 0.3s linear;
}

.name {
  height: 38px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(to top right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.6) 100%), 
              linear-gradient(to bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.05) 100%);
  color: transparent;
  background-clip: text;
}

.label {
  margin-top: 10px;
  height: 21px;
  font-family: SF Pro Display, SF Pro Display;
  font-weight: 600;
  font-size: 12px;
  color: #0EA5E9;
  line-height: 21px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.oval {
  margin-right: 7px;
  width: 16px;
  height: 9px;
  border-radius: 4.5px;
  border: 1px solid #94A3B8;
}

.bg_top_right {
  position: absolute;
  right: 0;
  top: 142px;
  width: 186px;
  height: 184px;
  background-image: url('/images/mobile/bg_top_right.png');
  background-size: 186px 184px;
  background-repeat: no-repeat;
}

.introduce {
  margin-top: 56px;
}

.title {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 21px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.introduce_item {
  margin-top: 24px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: rgba(148,163,184,0.91);
  line-height: 18px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.card {
  margin-top: 40px;
  padding: 24px 24px 30px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.07) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
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

.underline-dashed {
  cursor: pointer;
  border-bottom: 1px dashed;
}

.progress-container {
  width: 112px;
  height: 6px;
  background-color: #f3f3f3;
  border-radius: 3px;
  position: absolute;
  top: 80px;
  left: 0;
}

.progress-container .progress-bar {
  height: 100%;
  background-color: #616197;
  border-radius: 3px;
  transition: width 0.4s ease;
}

.skill {
  flex-wrap: wrap;
  margin-top: 93px;
  padding-top: 62px;
  background: radial-gradient(100% 90% at 50% 0%, #31324f 0%, transparent 45%, transparent 75%, transparent 100%);
  background-position: 50% -100px;
  background-size: 100% 450px;
  background-repeat: no-repeat;
}
.skill_item {
  margin-top: 16px;
  padding: 15px 10px;
  width: 48%;
}
.skill_title {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 14px;
  color: #E3E4E6;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.icon_title {
  margin-left: -8px;
  height: 32px;
}
.skill_desc {
  line-height: 20px;
}

.icon_split {
  margin: 24px 0;
  width: 24px;
  height: 24px;
}

.experience {
  margin-top: 14px;
  padding: 12px;
  background: rgba(118,118,128,0.16);
  border-radius: 12px;
}

.circle {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.time {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.post {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 14px;
  color: #474760;
  line-height: 16px;
  text-align: right;
  font-style: normal;
  text-transform: none;
}

.exp_company {
  display: inline-flex;
  margin-top: 16px;
  padding: 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
}
.exp_company_name {
  margin: 0 24px 0 8px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.icon_exp {
  width: 24px;
  height: 24px;
}

.exp_jobs {
  margin-top: 32px;
}
.exp_jobs_name {
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 14px;
  color: #E3E4E6;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.exp_jobs_item {
  position: relative;
  margin-top: 16px;
  padding-left: 20px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 400;
  font-size: 14px;
  color: #768397;
  line-height: 18px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.exp_jobs_item::before {
  position: absolute;
  top: 5px;
  left: 0;
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid #768397;
}

.contact {
  margin: 0 auto;
  padding: 108px 0 0;
  width: 100%;
  background-image: url('/images/light.png');
  background-size: 87% 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.shadow_box {
  width: 100%;
  padding-bottom: 80px;
  background: #000;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
}

.text_img {
  margin: 55px 0 24px;
  width: 210px;
  height: 45px;
}

.icon_plus {
  width: 16px;
  height: 17px;
}

.qrcode-popup {
  position: absolute;
  margin-top: 10px;
  border-radius: 15px;
}


.qrcode-popup img {
  width: 220px;
  height: 220px;
}

/* 定义过渡的基础类 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  /* 0.5 秒平滑过渡 */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* 进入时从透明变为不透明，离开时从不透明变为透明 */
}

</style>
