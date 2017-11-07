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
                <Submenu name="1" v-for="item in menuItem" :key="item">
                  <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    <router-link v-text="item.name" :to="item.router"></router-link>
                  </template>
                  <router-link v-for="chil in item.children" :to="chil.route" :key="chil.mId">
                    <MenuItem :name="chil.mId" v-text="chil.name"></MenuItem>
                  </router-link>
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
      data () {
        return {
          menuItem: [
            {
              'children': [
                {
                  'name': '运行状态',
                  'mId': '1-1',
                  'route': '/home/runstatus'
                },
                {
                  'name': '实时信息',
                  'mId': '1-2',
                  'route': '/home/realtime'
                },
                {
                  'name': '运行日志',
                  'mId': '1-3',
                  'route': '/home/overview'
                }
              ],
              'name': 'Home',
              'icon': 'home',
              'router': '/home'
            },
            {
              'name': 'Table',
              'icon': 'clipboard',
              'router': '/table',
              'children': [
                {
                  'name': 'aa',
                  'mId': '2-1',
                  'route': '/home/runstatus'
                },
                {
                  'name': 'bb',
                  'mId': '2-2',
                  'route': '/home/realtime'
                },
                {
                  'name': 'cc',
                  'mId': '2-3',
                  'route': '/home/overview'
                }
              ]
            },
            {
              'name': 'Forms',
              'icon': 'gear-a',
              'router': '/form'
            }
          ]
        }
      }
    }
</script>
