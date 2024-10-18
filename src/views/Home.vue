<script setup>
import Button from '@/components/Button.vue'
import Arrow from '@/components/Arrow.vue'
import TodoList from './components/TodoList.vue'
import ShowTime from './components/ShowTime.vue'
import Footer from './components/Footer.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 定义播放音效的函数
const handleClick = () => {
  const audioElement = document.querySelector('audio');
  if (audioElement) {
    audioElement.currentTime = 0; // 确保每次点击时从头播放
    audioElement.play(); // 播放音效
  }

  router.push({ path: 'work' })
}


</script>

<template>
  <div class="home_wrapper dfc ai_center">
    <img class="bg_main w100" src="/images/bg_main.jpg" draggable="false">
    <div class="content_box dfc ai_center">
      <div class="dfc ai_center">
        <img class="blog anim_occur" src="/images/blog.png" draggable="false">
        <div class="welcome_text anim_occur">
          欢迎来到<span class="subtract">Barry</span>的设计世界！在这里，每一个创意都被精心打磨，每一个细节都被细致雕琢。如果你也在寻找设计上的突破与灵感，期待我们一起携手，创造出卓越的用户体验
        </div>
        <Button @click="handleClick" class="btn anim_occur" style="margin-top: 60px;">
          <span>项目直达</span>
          <Arrow style="margin-left: 20px;" />
        </Button>
      </div>
      <TodoList style="margin-top: 103px;" />
      <ShowTime />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.home_wrapper {
  position: relative;
  padding-top: 216px;
  display: flex;
}

.content_box {
  width: 1440px;
}

.bg_main {
  position: absolute;
  top: 0;
  z-index: -1;
}


.blog {
  width: 673px;
  animation-delay: 600ms;
  opacity: 0;
}

.welcome_text {
  margin-top: 24px;
  font-size: 18px;
  width: 848px;
  color: #fff;
  text-align: center;
  animation-delay: 1200ms;
  opacity: 0;
}

.btn {
  animation-delay: 1800ms;
  opacity: 0;
}

.subtract {
  display: inline-block;
  padding: 0px 0 3px;
  margin: 0 5px;
  width: 62px;
  line-height: 18px;
  font-size: 14px;
  background-image: url('/images/subtract.png');
  background-size: 62px 18px;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  color: black;
}
</style>