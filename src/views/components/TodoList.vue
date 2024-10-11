<script setup>
import TodoItem from './TodoItem.vue'

const baseInfo = {
    src: '/src/assets/images/company_1.png',
    title: '北京日上集团',
    desc: '小程序设计｜B端设计｜用户体验设计',
}
const projectList = [
    {
        src: '/src/assets/images/company_2.png',
        title: '北京造化科技有限公司',
        desc: 'APP设计｜Web设计｜B端设计｜运营设计',
    },
    {
        src: '/src/assets/images/company_3.png',
        title: '上海芳欣科技有限公司',
        desc: 'APP设计｜Web设计',
    }
]
const eduInfo = {
    src: '/src/assets/images/edu.png',
    title: '陇东学院｜视觉传达设计',
    desc: '统招本科｜十余年绘画经验',
}
</script>

<template>
    <div class="todolist_wrapper">
        <div class="header">
            <input class="wh100" type="text" placeholder="Come explore my story">
        </div>
        <div class="title">基本信息</div>
        <div class="banner"></div>
        <TodoItem :info="baseInfo" />
        <div class="title">项目经验</div>
        <TodoItem v-for="(item, index) in projectList" :key="index" :info="item" />
        <div class="title">教育背景</div>
        <TodoItem :info="eduInfo" />
        <div class="footer df ai_center">
            <img class="left" src="@/assets/images/logo_2.png">
            <div class="right df">
                <div class="enter df">
                    <span>Open</span>
                    <div class="btn_box df_center">
                        <img class="wh100" src="@/assets/images/enter.png">
                    </div>
                </div>
                <div class="actions df">
                    <span>Actions</span>
                    <div class="btn_box df_center">
                        <img class="wh100" src="@/assets/images/cmd.png">
                    </div>
                    <div class="btn_box df_center iconk">K</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.todolist_wrapper {
    width: 1018px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.header {
    padding: 0 24px;
    height: 76px;
}

.header input {
    font-size: 22px;
    font-family: Inter, Inter;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    color: #fff;
}

.title {
    padding: 0 30px;
    height: 49px;
    font-family: Inter, Inter;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 49px;
    font-style: normal;
    text-transform: none;
}

.banner {
    margin: 0 24px;
    height: 142px;
    background: rgba(25, 25, 25, .5);
    border-radius: 11px;
}

.btn_box {
    margin-left: 16px;
    width: 27px;
    height: 27px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px 5px 5px 5px;
}

.footer {
    margin-top: 8px;
    padding: 0 24px;
    height: 52px;
    justify-content: space-between;
}

.footer .left {
    width: 25px;
    height: 25px;
}

.footer .right .enter {
    font-family: Inter, Inter;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 22px;
    text-align: right;
    font-style: normal;
    text-transform: none;
}

.footer .right .enter img {
    width: 13px;
    height: 10px;
}

.footer .right .actions {
    margin-left: 35px;
    font-family: Inter, Inter;
    font-weight: 500;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 22px;
    text-align: right;
    font-style: normal;
    text-transform: none;
}

.footer .right .actions img {
    width: 12px;
    height: 12px;
}

.footer .right .actions .iconk {
    margin-left: 3px;
    font-family: Inter, Inter;
    font-weight: normal;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 14px;
    letter-spacing: 1px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}
</style>