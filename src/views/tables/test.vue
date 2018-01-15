<template>
    <div>
        <Row>
            <Col span="24">
                <tab-pane></tab-pane>
            </Col>
        </Row>
    </div>
</template>
<script>
import bread from '../../components/breadcrumb'
import search from './filter-table.vue';
import edit from './edit-table.vue'
export default {
    name: 'tab',
    components: {
        'search': search,
        'edit': edit,
        bread,
        'tabPane': {
            functional: true,
            render: function (h) {
                let childrenArr = [];
                let tabs = [
                    {
                        name: '可搜索table',
                        tp: 'search'
                    },
                    {
                        name: '可编辑table',
                        tp: 'edit'
                    }
                ];
                for (let i = 0; i < tabs.length; i++) {
                    childrenArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name,
                            icon: 'social-apple'
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

<style lang="css">
</style>
