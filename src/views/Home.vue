<script setup>
import Button from '@/components/Button.vue'
import Arrow from '@/components/Arrow.vue'
import TodoList from './components/TodoList.vue'
import ShowTime from './components/ShowTime.vue'
</script>

<template>
  <div class="home_wrapper dfc ai_center">
    <img class="bg_main w100" src="@/assets/images/bg_main.png" draggable="false">
    <img class="bg_star w100" src="@/assets/images/bg_star.png" draggable="false">
    <div class="dfc ai_center">
      <img class="blog" src="@/assets/images/blog.png" draggable="false">
      <div class="welcome_text">
        欢迎来到<span class="subtract">Barry</span>的设计世界！在这里，每一个创意都被精心打磨，每一个细节都被细致雕琢。如果你也在寻找设计上的突破与灵感，期待我们一起携手，创造出卓越的用户体验
      </div>
    </div>
    <Button style="margin-top: 60px;">
      <span>项目直达</span>
      <Arrow style="margin-left: 20px;" />
    </Button>
    <TodoList style="margin-top: 103px;" />
    <ShowTime />
  </div>
</template>

<style scoped>
.home_wrapper {
  position: relative;
  margin-top: 128px;
  padding-bottom: 100px;
  display: flex;
}

.bg_main {
  position: absolute;
  top: 0;
  z-index: -1;
}

.bg_star {
  position: absolute;
  top: 237px;
  left: 0;
  width: 377px;
  height: 288px;
  z-index: -1;
}

.blog {
  width: 673px;
}

.welcome_text {
  margin-top: 24px;
  font-size: 18px;
  width: 848px;
  color: #fff;
  text-align: center;
}

.subtract {
  display: inline-block;
  margin: 0 5px;
  width: 62px;
  height: 18px;
  line-height: 18px;
  background-image: url('@/assets/images/subtract.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: black;
}
</style>