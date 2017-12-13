<template lang="html">
    <!-- 双飞翼布局 -->
    <div>
        <!--导航组件  -->
        <top-menus></top-menus>
        <!--主体内容  -->
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import topMenus from '../components/menu.vue'
import footer from '../components/footer'
export default {
    name: 'home',
    components: {
        'top-menus': topMenus,
        'foot': footer
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
        min-height: 840px;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-radius: 5px;
        zoom: 1;
    }
    .layout-content-main{
        padding: 10px;
    }
    
</style>
