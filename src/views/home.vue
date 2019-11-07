<template lang="html">
    <!-- 中间内容全屏布局 -->
    <div>
        <!--导航组件  -->
        <top-menus></top-menus>
        <router-view></router-view>
        <!-- <foot></foot> -->
    </div>
</template>

<script>
import topMenus from '../components/menu'
import footer from '../components/footer'
import '../assets/themes/dark.less'
import '../assets/css/style.less'
import '../assets/css/home.less'
export default {
    name: 'dashboard',
    components: {
        'top-menus': topMenus,
        'foot': footer
    }
}
</script>

<style lang="less">

</style>
