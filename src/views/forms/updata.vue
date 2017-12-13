<template lang="html">
    <div>
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <updata-tabs></updata-tabs>
            </Col>
        </Row>
    </div>
</template>

<script>
import bread from '../../components/breadcrumb'
import normal from './updatas/normalUpdata'
import drag from './updatas/dragUpdata'
export default {
    data () {
        return {
        }
    },
    components: {
        bread,
        normal,
        drag,
        'updataTabs': {
            functional: true,
            render: function (h) {
                let tabsArr = [];
                let tabs = [
                    {
                        name: '普通上传',
                        tab: 'normal'
                    },
                    {
                        name: '拖拽上传',
                        tab: 'drag'
                    }
                ]
                for (let i = 0; i < tabs.length; i++) {
                    tabsArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name
                        }
                    },[
                        h(tabs[i].tab)
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
