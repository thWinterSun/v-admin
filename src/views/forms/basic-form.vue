<template lang="html">
    <div >
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Row>
            <tab-pane></tab-pane>
        </Row>
    </div>
</template>

<script>
import bread from '../../components/breadcrumb'
import basicInput from '../../components/basic-input'
import addTable from '../../components/addTable.vue'
import tree from '../../components/tree.vue'
import transfer from '../../components/transfer.vue'
export default {
    components: {
        bread,
        'basicInput': basicInput,
        'transfer': transfer,
        'addTable': addTable,
        'tree': tree,
        'tabPane': {
            functional: true,
            render: function (h) {
                let childrenArr = [];
                let tabs = [
                    {
                        name: '基本表单',
                        tp: 'basicInput'
                    },
                    {
                        name: '穿梭框',
                        tp: 'transfer'
                    },
                    {
                        name: '数据添加',
                        tp: 'addTable'
                    },
                    {
                        name: '树形菜单',
                        tp: 'tree'
                    }
                ];
                for (let i = 0; i < tabs.length; i++) {
                    childrenArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name
                        }
                    },[
                        h(tabs[i].tp)
                    ]))
                }
                return h('Tabs',[childrenArr])
            }
        }
    }
}
</script>

<style lang="less">
    
    
</style>
