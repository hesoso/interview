<script setup>

const imgList = Array.from(Array(32)).map((_, index) => {
  return `/src/assets/images/project/p${index + 1}.jpg`
})

</script>

<template>
  <div class="project_wrapper">
    <div class="image_list">
      <div class="title">PORTFOLIO</div>
      <img v-for="(item, index) in imgList" style="width: 100%;" v-lazy="item" />
    </div>
  </div>
</template>

<style scoped>
.project_wrapper {
  padding: 64px 175px;
  box-sizing: border-box;
}
.title {
  margin: 0 auto 50px;
  padding: 5px 0 20px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: bold;
  font-size: 39px;
  line-height: 47px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  /* background: radial-gradient(292.3806473056615deg, #FFFFFF 0%, rgba(255,255,255,0.61) 39%, rgba(151,141,156,0) 100%); */
  background: linear-gradient(to right, #B2B2B2, #ACACAE);
  -webkit-background-clip: text;
  color: transparent;
  width: 266px;
  border-bottom: 1px solid;
  /* color: #fff; */
  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1 1;
}
.mb16 {
  margin-bottom: 16px;
}
.image_list {
  padding: 48px 21px 32px;
  background: rgba(0,2,9,0.8);
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.1);
}
.image_list img {
  margin-top: 16px;
  border-radius: 24px;
  overflow: hidden;
}
</style>
