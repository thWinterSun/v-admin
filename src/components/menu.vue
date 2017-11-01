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
    /*自定义修改部分*/
    .ivu-menu a{
      color:#fff;
    }  
    .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown{
        margin:0;
        background-color:#495060;
    }
    .ivu-menu-drop-list{
      margin:0;
      background-color:#495060;
    }    
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
                <Submenu name="1">
                    <template slot="title">
                      <Icon type="home"></Icon>
                      <router-link to="/home">
                        Home
                      </router-link>
                    </template>
                  <router-link to="/home/runstatus">
                    <MenuItem name="1-1" >
                      运行状态
                    </MenuItem>
                  </router-link>
                  <router-link to="/home/realtime">
                    <MenuItem name="1-2" >
                      实时信息
                    </MenuItem>
                  </router-link>
                  <router-link to="/home/overview">
                    <MenuItem name="1-3" >
                      运行日志
                    </MenuItem>
                  </router-link>
                </Submenu>
                <MenuItem name="2">
                    <Icon type="stats-bars"></Icon>
                    Charts
                </MenuItem>
                
                <router-link to="/form">
                  <MenuItem name="3" >
                      <Icon type="gear-a"></Icon>
                        Forms
                  </MenuItem>
                </router-link>
                <router-link to="/table">
                  <MenuItem name="4">
                      <Icon type="clipboard"></Icon>
                        Tables
                  </MenuItem>
                </router-link>
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
              <BreadcrumbItem href="/home/runstatus">runstatus</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <router-view></router-view>
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
