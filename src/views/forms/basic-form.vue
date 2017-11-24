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
                        name: '树形餐单',
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
    .width_100{
        width:100px;
    }
    .width_150{
        width:150px;
    }
    .with_200{
        width:200px;
    }
    .ml_10{
        margin-left: 10px;
    }
    .mr_10{
        margin-right: 10px;
    }
    .p_10{
        padding:10px;
    }
    .ivu-tabs-nav-scroll{
        background: #E7EBEE;
        .ivu-tabs-tab{
            border-radius: 5px;
        }
        .ivu-tabs-tab-active{
            background: #fff;
        }
    }
</style>
