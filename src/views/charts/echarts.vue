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
import bread from '@/components/breadcrumb'
import double from '@/components/Echarts/doubleLine'
// import dash from './Echarts/lineChart'
import radar from '@/components/Echarts/RadarChart'
import spider from '@/components/Echarts/spider'
export default {
    name: 'homeCon',
    components: {
        bread,
        double,
        radar,
        spider,
        'tabPane': {
            functional: true,
            render: function (h) {
                let echartArr = [];
                let tabs = [
                    {
                        name: '降雨分布图',
                        tab: 'double'
                    },
                    {
                        name: '雷达图',
                        tab: 'radar'
                    },
                    {
                        name: '关系图',
                        tab: 'spider'
                    }
                ];
                for (let i = 0; i < tabs.length; i++) {
                    echartArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name
                        }
                    },[
                        h(tabs[i].tab)
                    ]))
                }
                return h('Tabs',[echartArr])
            }
        }
    }
}
</script>

<style lang="css">

</style>
