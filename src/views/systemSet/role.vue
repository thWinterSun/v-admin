<template lang="html">
    <div>
        
        <Row>
            <Col span="24">
                <tab-pane></tab-pane>
            </Col>
        </Row>
    </div>
</template>

<script>
import roleList from './roleTable.vue'
import roleForm from './roleForm.vue'
import user from './userTable'
export default {
    name: 'rolePage',
    components: {
        'roleList': roleList,
        'roleForm': roleForm,
        'userList': user,
        'tabPane': {
            functional: true,
            render: function (h) {
                let tabsArr = [];
                let tabs = [
                    {
                        name: '角色设置',
                        tp: 'roleList'
                    },
                    {
                        name: '用户设置',
                        tp: 'userList'
                    }
                ];
                for (let i in tabs) {
                    tabsArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name
                        }
                    },[
                        h(tabs[i].tp)
                    ]))
                }
                return h('Tabs',[tabsArr])
            }
        }
    }
}
</script>

<style lang="css">
</style>
