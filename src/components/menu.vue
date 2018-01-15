<style scoped lang="less">
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
    .layout-logo{
        width: 100px;
        height: 30px;
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

    /*自定义修改部分*/

    .menu-right{
        float:right;
        .ivu-dropdown{
            min-width: 50px;
            padding:0 10px;
        }
    }

    .layout .ivu-menu{
        margin-bottom:2px;
    }

</style>
<template>
    <div class="layout">
        <Menu mode="horizontal"  active-name="1">
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
                <div class="menu-right">
                    <Dropdown>
                        <Badge dot>
                            <Icon type="ios-bell-outline" size="26"></Icon>
                        </Badge>
                        <DropdownMenu slot="list">
                            <a href="#" >
                                <DropdownItem >通知111</DropdownItem>
                            </a>
                            <DropdownItem>通知222</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown class="userdown">
                        <a href="javascript:void(0)">
                            <span v-text="userName" class="mr_10"></span>
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <a href="#" @click="logout">
                                <DropdownItem >退出登录</DropdownItem>
                            </a>
                            <DropdownItem>修改密码</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </Menu>
    </div>
</template>
<script>
    export default {
        methods: {
            logout () {
                this.$router.replace('login')
            }
        },
        data () {
            return {
                userName: 'Jack',
                menuItem: [
                    {
                        'children': [
                            {
                                'name': 'runstatus',
                                'mId': '1-1',
                                'route': '/home/runstatus'
                            },
                            {
                                'name': 'worldMap',
                                'mId': '1-2',
                                'route': '/home/worldMap'
                            },
                            {
                                'name': 'globalMap',
                                'mId': '1-3',
                                'route': '/home/globalMap'
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
                                'route': '/table/basictable'
                            },
                            {
                                'name': 'Edit Table',
                                'mId': '2-3',
                                'route': '/table/edittable'
                            }
                        ]
                    },
                    {
                        'name': 'Form',
                        'icon': 'ios-gear',
                        'mId': '03',
                        'router': '/form',
                        'children': [
                            {
                                'name': 'Basic Form',
                                'mId': '3-1',
                                'route': '/form/basicform'
                            },
                            {
                                'name': 'updata Form',
                                'mId': '3-3',
                                'route': '/form/updata'
                            }
                        ]
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
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
