<script setup>
import feather from 'feather-icons'
import Button from '@/components/Button.vue'
import Footer from './components/Footer.vue'

import { onMounted, ref } from 'vue'
import { downloadPDF, getDownloadProgress, copyText } from '@/utils/index'

const cardList1 = ref(null);
const cardList2 = ref(null);

const handleMouseMove = (event) => {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left; // 鼠标相对元素左侧的距离
  const y = event.clientY - rect.top;  // 鼠标相对元素顶部的距离

  element.style.setProperty('--mouse-x', `${x}px`);
  element.style.setProperty('--mouse-y', `${y}px`);
};

const resetGlow = (event) => {
  const element = event.currentTarget;
  element.style.setProperty('--mouse-x', `-9999px`);
  element.style.setProperty('--mouse-y', `-9999px`);
};

onMounted(() => {
  feather.replace({
    width: 20,
    height: 20
  })
})


// 用于显示复制成功的提示
const copied = ref(false);

const copy = async (text) => {
  copyText(text, () => {
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  })
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

const resumeUrl = "/resume.pdf"
const peojectUrl = "/project.pdf"

const downloadResumeVisible = ref(false)
const downloadResumeProgress = ref(0)

const onResumeProgress = (progress) => {
    if (progress >= 100 || !progress) {
      downloadResumeVisible.value = false
      downloadResumeProgress.value = 0
    } else if (progress >= 0) {
      downloadResumeVisible.value = true
      downloadResumeProgress.value = progress
    }
}

getDownloadProgress(resumeUrl, onResumeProgress)

const downloadResume = () => {
  downloadPDF(resumeUrl, onResumeProgress)
}

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


const experienceList = [
  {
    time: '2023. 01 ～ 至今',
    company: '北京日上集团',
    post: 'UI/UE设计师（IOT部）',
    jobs: [
      {
        content: '日上门业、日上师傅端、日上录单员端、日上后台',
        details: [
          '主要负责公司ToC电商小程序0-1搭建，前期担任产品经理和体验设计岗位，后期与产品经理共同规划产品需求，提出可行性设计方案并落地;',
          '负责了ToB业务日上师傅端、日上服务小程序、公司IOT后台以及电商后台的UI视觉设计、交互以及设计系统全流程设计;',
          '负责公司IOT后台的前期需求调研，组件库搭建，并提供如表单引擎、流程引擎、工作流等底层功能的设计方案，为后续功能扩展打下基础；',
          '沉淀设计资产，找可被同类产品复用的分步式部署流程、标准化布局框架及交互模式，探索落地大量设计价值体现的设计方法等;',
          '在项目的前期阶段，我还担任了产品经理的角色，主导了日上门业和日上后台的策划与制作。',
        ]
      },
    ]
  },
  {
    time: '2021. 07 ～ 2023. 01',
    company: '北京造化科技有限公司',
    post: 'UI设计师（设计部）',
    jobs: [
      {
        content: '造作商城、造作网页、造作OA系统',
        details: [
          '负责公司B端产品（OA系统）、C端APP、官网的UI设计和用户体验，需求前期分析，制定规范及设计标准，与开发工程师进行沟通协作；',
          '配合运营团队协作，洞察项目背后数据原因，深挖用户需求并能准确定位，快速响应设计解决方案；',
          '并基于用户视⻆持续迭代优化产品，研究设计趋势，推动创新方案，实现产品界面呈现在用户体验上的突破，总结设计方法论；',
          '产品数据的变化与用户满意度有极高的敏感度，能够从视觉设计和产品体验的角度提出改进建议或优质解决方案，并推动落地实施；',
          '负责研究设计趋势，推动创新方案，实现产品界面呈现在用户体验上的突破，总结设计方法论，并在公司内部分享，提高整个团队的设计软实力。',
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
        content: '绘睡APP、绘睡Web',
        details: [
          '负责公司移动端项目绘睡App 0-1用户及竞品分析，负责完成绘睡企业Web端界面设计，制定项目规范及设计标准，完成界面设计及落地；',
          '对业内交互、设计的流行趋势进行收集分析，对用户体验提供创新想法和思路，不断优化产品，承担项目及公司常规设计；',
          '负责参与项目中各种交互界面、图标、LOGO、按钮等相关元素的设计与制作，以及公司运营平面相关设计；',
        ]
      }
    ]
  }
]
</script>

<template>
  <div class="resume_wrapper dfc">
    <transition name="fade">
      <div v-if="copied" class="copy-success">
        邮箱已复制到剪贴板
      </div>
    </transition>
    <div class="base">
      <img class="logo_name" src="/images/logo_name.png" draggable="false">
      <div class="label df ai_center">
        <div class="oval"></div>
        <span>UI / UX 设计师</span>
      </div>
      <div class="title mt64">介绍：</div>
      <div class="text">
        我目前是一名工作三年的 UI 设计师，担任过产品经理的角色，拥有产品思维，有从 0-1 搭建项目经验，梦想成为一名优秀的用户体验设计师，在电商、IOT、智能家居等多个行业拥有洞察力和实践经验；
      </div>
      <div class="text">
        我对技术的无限可能性充满热情，同时专注于探索产品设计的价值，寻求最终设计、交互、技术融入以及商业理解之间的平衡来解决问题，最大程度发挥设计价值。对前端代码开发的工作进行无缝配合，对 android、ios
        平台的设计规范和尺寸有较 深入的了解，熟悉 APP 、小程序、Web 架构和设计规则; </div>
      <div class="text">
        视觉传达设计专业毕业，十余年绘画功底，有素描、色彩、 鼠绘、手绘绘画能力，具备很强的逻辑思维能力、自学能力和沟通能力；</div>
      <div class="text">熟练利用AIGC等相关AI产品配合工作提高 工作效率。</div>
      <div class="df mt42 track_mouse" style="width: 700px;" @mousemove="handleMouseMove" @mouseleave="resetGlow"
        ref="cardList1">
        <div class="card left">

          <div class="title ">联系：</div>
          <div class="item">邮箱：<span @click="copy" class="underline-dashed">bjl924143589@163.com</span></div>
          <div class="item">微信：<span class="underline-dashed" @mouseenter="showQRCode"
              @mouseleave="hideQRCode">baojinlong01</span>
            <transition name="fade">
              <div v-if="isQRCodeVisible" class="qrcode-popup">
                <img src="/images/qrcode.png" alt="微信二维码" />
              </div>
            </transition>
          </div>
        </div>
        <div class="card right">
          <div class="title">简历 & 作品集：</div>
          <div class="df jc_between">
            <div class="dfc" style="position: relative;">
              <div class="item">下载我的简历（PDF)</div>
              <Button @click="downloadResume" class="mt16" :styles="{
        width: '96px',
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
              <div class="item">下载我的作品集（PDF)</div>
              <Button @click="downloadProject" class="mt16" :styles="{
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
      </div>
    </div>
    <div class="skill">
      <div class="track_mouse df jc_center" @mousemove="handleMouseMove" @mouseleave="resetGlow" ref="cardList2">
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="/images/icon_s1.png" draggable="false">
            <span>系统化设计</span>
          </div>
          <div class="item">结构、系统化设计思维，注重逻辑与数据驱动</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="/images/icon_s2.png" draggable="false">
            <span>设计资产沉淀</span>
          </div>
          <div class="item">体系化设计资产落地经验，深耕设计系统领域</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="/images/icon_s3.png" draggable="false">
            <span>熟悉开发思路</span>
          </div>
          <div class="item">开发、角色共情能力，利用工程化思维解决问题</div>
        </div>
        <div class="card skill_item">
          <div class="title df ai_center">
            <img class="icon_title" src="/images/icon_s4.png" draggable="false">
            <span>像素强迫症</span>
          </div>
          <div class="item">丰富的 B、C 端多行业产品设计经验，像素强迫症</div>
        </div>
      </div>
    </div>
    <div class="experience">
      <div class="df experience_item" v-for="(item1, index1) in experienceList" :key="index1">
        <div class="time df ai_center">
          <img class="circle" src="/images/circle.png" draggable="false">
          <span>{{ item1.time }}</span>
        </div>
        <div class="dfc">
          <div class="company df ai_center">
            <span>{{ item1.company }}</span>
            <img class="share" src="/images/share.png" draggable="false">
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
        <img class="text_img" src="/images/text_4.png" draggable="false">
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
        <transition name="fade">
          <div v-if="isQRCodeVisible" class="qrcode-popup">
            <img src="/images/qrcode.png" alt="微信二维码" />
          </div>
        </transition>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.resume_wrapper {
  margin: 0 auto;
  width: 1440px;
  padding-top: 168px;
  background-image: url('/images/light2.png');
  background-size: 1440px 388px;
  background-repeat: no-repeat;
  z-index: 1;
}

.base {
  padding: 52px 0 143px 132px;
  background-image: url('/images/bg_build.png');
  background-size: 567px 705px;
  background-position: 873px 0px;
  background-repeat: no-repeat;
  z-index: 2;
  border-radius: 0 0 180px 180px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.07) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.underline-dashed {
  cursor: pointer;
  border-bottom: 1px dashed;
}

.left {
  width: 260px;
}

.right {
  margin-left: 16px;
  width: 424px;
}


.item {
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  color: #94A3B8;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.progress-container {
  width: 112px;
  height: 6px;
  background-color: #f3f3f3;
  border-radius: 3px;
  position: absolute;
  top: 85px;
  left: 0;
}

.progress-container .progress-bar {
  height: 100%;
  background-color: #616197;
  border-radius: 3px;
  transition: width 0.4s ease;
}

.skill {
  padding-top: 139px;
  height: 254px;
  background: radial-gradient(100% 110% at 50% 0%, #31324f 0%, transparent 45%, transparent 75%, transparent 100%);
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
  font-weight: 400;
  font-size: 14px;
  color: rgba(148, 163, 184, 0.8);
  line-height: 24px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.content {
  font-weight: bold;
  font-size: 16px;
  color: #E3E4E6;
  line-height: 21px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.details {
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
  background-image: url('/images/light.png');
  background-size: 975px 600px;
  background-repeat: no-repeat;
}

.shadow_box {
  margin-top: 276px;
  width: 975px;
  height: 460px;
  background: #000212;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
}

.text_img {
  margin: 84px 0 24px;
  width: 316px;
  height: 67px;
}

.track_mouse {
  position: relative;
  z-index: 1;
  border-radius: 24px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

/* 使用自定义属性来确定光晕中心 */
.track_mouse::before {
  content: '';
  position: absolute;
  top: var(--mouse-y, -9999px);
  left: var(--mouse-x, -9999px);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  filter: blur(20px);
  transition: opacity 0.3s ease;
  opacity: 1;
}

/* 鼠标离开时隐藏光晕 */
.track_mouse:hover::before {
  opacity: 1;
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
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: 0.3s linear;
}

.qrcode-popup {
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