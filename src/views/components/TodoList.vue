<script setup>
import TodoItem from './TodoItem.vue'

const projectList = [
    {
        src: '/images/company_1.png',
        title: '北京日上集团',
        desc: '小程序设计｜B端设计｜用户体验设计',
        time: '2023. 02 - 2024. 10',
    },
    {
        src: '/images/company_2.png',
        title: '北京造化科技有限公司',
        desc: 'APP设计｜Web设计｜B端设计｜运营设计',
        time: '2021. 07 - 2023. 01',
    },
    {
        src: '/images/company_3.png',
        title: '上海芳欣科技有限公司',
        desc: 'APP设计｜Web设计',
        time: '2019. 07 - 2021. 07'
    }
]
const eduInfo = {
    src: '/images/edu.png',
    title: '陇东学院｜视觉传达设计',
    desc: '统招本科｜十余年绘画经验',
}
</script>

<template>
        <div class="todolist_wrapper">
            <div class="anim_box anim_rotate">
                <div class="header">
                    <input class="wh100" type="text" placeholder="Come explore my story">
                </div>
                <div class="title">基本信息</div>
                <div class="banner dfc_center">
                    <div class="name">包金龙- Barry</div>
                    <div class="info">目前是一名三年经验的UI设计师，励志想要做一名顶级的用户体验设计师</div>
                </div>
                <div class="title">项目经验</div>
                <TodoItem v-for="(item, index) in projectList" :key="index" :info="item" />
                <div class="title">教育背景</div>
                <TodoItem :info="eduInfo" />
                <div class="footer df ai_center">
                    <img class="left" src="/images/logo_2.png" draggable="false">
                    <div class="right df">
                        <div class="enter df">
                            <span>Open</span>
                            <div class="btn_box df_center">
                                <img class="wh100" src="/images/enter.png" draggable="false">
                            </div>
                        </div>
                        <div class="actions df">
                            <span>Actions</span>
                            <div class="btn_box df_center">
                                <img class="wh100" src="/images/cmd.png" draggable="false">
                            </div>
                            <div class="btn_box df_center iconk">K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
.todolist_wrapper {
    width: 1018px;
    perspective: 1000px;
}

.anim_box {
    border-radius: 16px;
    border: 1px solid rgba(142, 140, 144, 0.4);
    box-shadow: 0px 0.679px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px 0px 0px 0 rgba(0, 0, 0, 0.40), 0px 5.432px 54.316px 10.863px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(60px);
}

.header {
    padding: 0 24px;
    height: 76px;
}

.header input {
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    text-transform: none;
    color: #fff;
}

.title {
    padding-left: 22px;
    height: 49px;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 49px;
    text-transform: none;
}

.banner {
    margin: 0 14px;
    height: 142px;
    background: rgba(25, 25, 25, .5);
    border-radius: 11px;
    background-image: url('/images/banner.png');
    background-size: 100% 100%;
}

.banner .name {
    width: 511px;
    height: 34px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: none;
    color: #fff;
}

.banner .info {
    width: 350px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
    line-height: 22px;
    text-align: center;
    text-transform: none;
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
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 22px;
    text-align: right;
    text-transform: none;
}

.footer .right .enter img {
    width: 13px;
    height: 10px;
}

.footer .right .actions {
    margin-left: 35px;
    font-weight: 500;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 22px;
    text-align: right;
    text-transform: none;
}

.footer .right .actions img {
    width: 12px;
    height: 12px;
}

.footer .right .actions .iconk {
    margin-left: 3px;
    font-weight: normal;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 14px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: none;
}

</style>