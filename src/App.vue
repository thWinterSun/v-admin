<template>
  <div id="app">
    <!--导航组件  -->
    <top-menus></top-menus>
    <!--主体内容  -->
    <div class="layout-content">
      <div class="layout-breadcrumb" style="display:none">
        <Breadcrumb separator=">">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/home/runstatus">runstatus</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <router-view></router-view>
    </div>
    <!--页脚  -->
    <div class="layout-copy">
        2017 &copy; philisense
    </div>
  </div>
</template>

<script>
import topMenus from './components/menu.vue'
export default {
    name: 'top-menu',
    data () {
        return {
        }
    },
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
    margin-left: auto;
    margin-right: auto;
    zoom: 1;
    min-height: 830px;
    /*background: #ddd;*/
    border-radius: 4px;
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
