<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
  <div class="mobile_skillcard_wrapper">
    <div class="border_box">
      <img class="img" :src="info.src" draggable="false">
      <div class="info">
        <div class="label df ai_center">
          <div class="tag df_center">{{ info.tag }}</div>
          <div class="title">{{ info.title }}</div>
        </div>
        <div class="desc">{{ info.desc }}</div>
      </div>
      <div class="btn df_center">&#x276F;</div>
    </div>
</div>
</template>

<style scoped>
.mobile_skillcard_wrapper {
  position: relative;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border-radius: 16px;
  overflow: hidden;
}

.border_box {
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
    border-radius: 15px;
    overflow: hidden;
    backdrop-filter: blur(5px);

}

.btn {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  width: 40px;
  background: rgba(255,255,255,0.08);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: #969799;
}

.img {
  width: 100%;
  height: 317px;
}

.info {
  padding: 0 16px 16px;
}


.label {
  padding-left: 3px;
  width: 178px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.tag {
  width: 26px;
  height: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  font-size: 14px;
}

.title {
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #969799;
  line-height: 19px;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

.desc {
  margin-top: 12px;
  width: 200px;
  font-weight: 400;
  font-size: 14px;
  color: rgba(148,163,184,0.9);
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
</style>