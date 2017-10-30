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
        right: 20px;
        
    }
    .layout-logo .logo-text{
      height: 30px;
      line-height: 30px;
      padding: 0px 20px;
      font-size: 20px;
    }
    .layout-nav{
        width: 650px;
        margin: 0 auto;
    }
    .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown{
        margin:0;
        background-color:#495060;
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
        width: 100%;
        max-width: 940px;
        margin-left: auto;
        margin-right: auto;
        zoom: 1;
        min-height: 830px;
        background: #ddd;
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
            <div class="layout-nav">
                <div class="layout-logo">
                  <h3 class="logo-text">LOGO</h3>
                </div>
                <Submenu name="4">
                  <template slot="title">
                      <Icon type="home"></Icon>
                      Home
                  </template>
                  <MenuItem name="1-1" to="/runstatus">运行状态</MenuItem>
                  <MenuItem name="1-2" to="/realtime">实时信息</MenuItem>
                  <MenuItem name="1-3" to="/overview">运行日志</MenuItem>
                </Submenu>
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
        
        <div class="layout-content">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </div>
        
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
