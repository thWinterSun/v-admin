<template lang="html">
    <div class="">
        <!--导航组件  -->
        <top-menus></top-menus>
        <!--主体内容  -->
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <!--页脚  -->
        <div class="layout-copy">
            2017 &copy; philisense
        </div>
    </div>
</template>

<script>
import topMenus from '../components/menu.vue'
export default {
    name: 'home',
    components: {
        'top-menus': topMenus
    }
}
</script>

<style scoped>
    
    /**/
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
        
    }
    .layout-content{
        width: 100%;
        max-width: 940px;
        min-height: 830px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-radius: 5px;
        zoom: 1;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
