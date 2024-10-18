<script setup>
import NoteItem from './NoteItem.vue'

const noteList = [
  {
    icon: '/images/logo_2.svg',
    desc: 'Figma 实用插件整理',
  },
  {
    icon: '/images/logo_2.svg',
    desc: 'AIGC关键词整理',
  },
  {
    icon: '/images/logo_2.svg',
    desc: 'Design Token与前端的配合',
  },
  {
    icon: '/images/logo_2.svg',
    desc: '设计文章｜灵感参考',
  },
]

</script>

<template>
  <div class="notelist_wrapper">
    <div class="label df_center">“Barry's Notes”</div>
    <div class="header">
      <input class="wh100" type="text" placeholder="Type a command or search…">
    </div>
    <div class="list_box">
      <NoteItem v-for="(item, index) in noteList" :key="index" :info="item" />
    </div>
  </div>
</template>

<style scoped>
.notelist_wrapper {
  width: 325px;
  height: 165px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.label {
  margin: 5px 0 0 9px;
  width: 61px;
  height: 11px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px 2px 2px 2px;
  font-weight: 400;
  font-size: 7px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: none;
}

.header {
  padding: 0 12px;
  height: 38px;
}

.header input {
  font-weight: 400;
  font-size: 11px;
  color: rgba(180, 188, 208, 0.6);
  line-height: 16px;
  text-align: left;
  text-transform: none;
}

.list_box {
  height: 105px;
  overflow: scroll;
}

.list_box::-webkit-scrollbar {
  display: none;
}
</style>