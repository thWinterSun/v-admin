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
    }
    .layout-logo .logo-text{
      height: 30px;
      line-height: 30px;
      padding: 0px 20px;
      font-size: 20px;
    }
    @media screen and (max-width: 1920px){
      .layout-nav{
        width: 1160px;
        margin: 0 auto;
      }
		}
    @media screen and (max-width: 1366px){
      .layout-nav{
        width: 940px;
        margin: 0 auto;
      }
		}
    /*自定义修改部分*/
    .ivu-menu a{
      color:#fff;
    }
    .ivu-menu-submenu .ivu-select-dropdown{
        margin:0;
        background-color:#495060;
    }
    .userdown{
      float:right;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="primary" active-name="1">
            <div class="layout-nav">
                <div class="layout-logo">
                    <h3 class="logo-text">LOGO</h3>
                </div>
                <Submenu :name="item.mId" v-for="item in menuItem" :key="item.mId">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        <router-link v-text="item.name" :to="item.router"></router-link>
                    </template>
                    <router-link v-for="chil in item.children" :to="chil.route" :key="chil.mId">
                        <MenuItem :name="chil.mId" v-text="chil.name"></MenuItem>
                    </router-link>
                </Submenu>
                <Dropdown class="userdown">
                    <a href="javascript:void(0)">
                        admin
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>退出登录</DropdownItem>
                        <DropdownItem>修改密码</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              
            </div>
        </Menu>
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
                        'mId': '01',
                        'router': '/home'
                    },
                    {
                        'name': 'Table',
                        'icon': 'clipboard',
                        'mId': '02',
                        'router': '/table',
                        'children': [
                            {
                                'name': 'Basic Table',
                                'mId': '2-1',
                                'route': '/home/runstatus'
                            },
                            {
                                'name': 'Advance Table',
                                'mId': '2-2',
                                'route': '/home/realtime'
                            },
                            {
                                'name': 'Edit Table',
                                'mId': '2-3',
                                'route': '/home/overview'
                            }
                        ]
                    },
                    {
                        'name': 'Form',
                        'icon': 'ios-gear',
                        'mId': '03',
                        'router': '/form'
                    },
                    {
                        'name': 'charts',
                        'icon': 'connection-bars',
                        'mId': '04',
                        'router': '/charts',
                        'children': [
                            {
                                'name': 'Echarts',
                                'mId': '4-1',
                                'route': '/charts/echarts'
                            },
                            {
                                'name': 'highCharts',
                                'mId': '4-2',
                                'route': '/charts/highCharts'
                            },
                            {
                                'name': 'D3 charts',
                                'mId': '4-3',
                                'route': '/charts/overview'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
