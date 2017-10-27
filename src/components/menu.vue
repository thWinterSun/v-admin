<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background-color: #eee;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    
    .layout-nav{
        width: 650px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 770px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
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
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              
            </div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="home"></Icon>
                    Home
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="stats-bars"></Icon>
                    Charts
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="gear-a"></Icon>
                    Forms
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="clipboard"></Icon>
                    Tables
                </MenuItem>
                <Submenu name="4">
                  <template slot="title">
                      <Icon type="ios-book"></Icon>
                      Pages
                  </template>
                  <MenuItem name="3-1">login</MenuItem>
                  <MenuItem name="3-2">404</MenuItem>
                  <MenuItem name="3-3">500</MenuItem>
              </Submenu>
              
            </div>
        </Menu>
        
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem href="#">首页</BreadcrumbItem>
                <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                <BreadcrumbItem>某应用</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            内容区域
        </div>
        <div class="layout-copy">
            2017 &copy; philisense
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
