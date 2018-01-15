<template lang="html">
    <!--基本table以数据现在为主，包括table和分页  -->
    <div>
        
        <Row>
            <Col span="24">
                <tab-pane></tab-pane>
            </Col>
        </Row>
    </div>
</template>

<script>
import intruTable from './intruTable.vue'
import intruFrom from './intruFrom.vue'
import filt from '../../tables/filter-table'
export default {
    name: 'intrusion-strategy',
    components: {
        'intrusion': intruTable,
        'intruFrom': intruFrom,
        'events': filt,
        'tabPane': {
            functional: true,
            render: function (h) {
                let tabsArr = [];
                let tabs = [
                    {
                        name: '入侵防护',
                        tp: 'intrusion'
                    },
                    {
                        name: '事件集',
                        tp: 'events'
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
