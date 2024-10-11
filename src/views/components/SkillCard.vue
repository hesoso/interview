<script setup>
const props = defineProps(['info'])
const info = props.info
</script>

<template>
    <div class="skillcard_wrapper">
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
</template>

<style scoped>
.skillcard_wrapper {
  position: relative;
  width: 378px;
  /* height: 504px; */
  background: linear-gradient( 180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.06) 100%);
  border-radius: 40px;
  overflow: hidden;
}

.btn {
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  width: 40px;
  background: #080A19;
  border: 2px solid rgba(255,255,255,0.1);
  color: #969799;
  cursor: pointer;
}

.img {
  width: 378px;
  height: 354px;
}

.info {
  padding: 32px;
}


.label {
  padding-left: 3px;
  width: 178px;
  height: 28px;
  background: rgba(255,255,255,0.1);
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.05);
}

.tag {
  width: 26px;
  height: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
}

.title {
  margin-left: 8px;
  font-family: OPPO Sans, OPPO Sans;
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
  /* width: 220px; */
  width: 250px;
  font-family: OPPO Sans, OPPO Sans;
  font-weight: 500;
  font-size: 15px;
  color: rgba(255,255,255,0.3);
  line-height: 23px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

</style>