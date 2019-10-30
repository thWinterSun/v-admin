<template lang="html">
    <div class="home-body">
        <Row class="cards" :gutter="10">
            <Col :xs="12" :md="8" :lg="6">
                <Card :bordered="false" class="bgGreen card-container">
                    <Row class="media">
                        <Col span="12">
                            <Icon type="archive" size="50" class="white"></Icon>
                        </Col>
                        <Col span="12">
                            <span class="title">利用率</span>
                            <h2 id="hardDiskNumber" class="animate-number white" >85</h2>
                        </Col>
                    </Row>
                    <Row  class="progress-list">
                        <Col span="20">
                            <span class="title">Percentage</span>
                        </Col>
                        <Progress :percent="85" :stroke-width="8" ></Progress>
                    </Row >
               </Card>
            </Col>
            <Col :xs="12" :md="8" :lg="6">
                <Card :bordered="false" class="bgOrange card-container">
                    <Row class="media">
                        <Col span="12">
                            <Icon type="pie-graph" size="50" class="white"></Icon>
                        </Col>
                        <Col span="12">
                            <span class="title">利用率</span>
                            <h2 id="hardDiskNumber" class="animate-number white" >20</h2>
                        </Col>
                    </Row>
                    <Row  class="progress-list">
                        <Col span="20">
                            <span class="title">Percentage</span>
                        </Col>
                        <Progress :percent="20" :stroke-width="8" ></Progress>
                    </Row >
               </Card>
            </Col>


            <Col :xs="12" :md="8" :lg="6">
                <Card :bordered="false" class="bgBlue card-container">
                    <Row class="media">
                        <Col span="12">
                            <Icon type="shuffle" size="50" class="white"></Icon>
                        </Col>
                        <Col span="12">
                            <span class="title">数量</span>
                            <h2 id="hardDiskNumber" class="animate-number white" >10</h2>
                        </Col>
                    </Row>
                    <Row  class="progress-list">
                        <Col span="20">
                            <span class="title">Percentage</span>
                        </Col>
                        <Progress :stroke-width="8" ></Progress>
                    </Row >
               </Card>
            </Col>
            <Col :xs="12" :md="8" :lg="6">
                <Card :bordered="false" class="bgRed card-container">
                    <Row class="media">
                        <Col span="12">
                            <Icon type="alert-circled" size="50" class="white"></Icon>
                        </Col>
                        <Col span="12">
                            <span class="title">安全事件</span>
                            <h2 id="hardDiskNumber" class="animate-number white" >300</h2>
                        </Col>
                    </Row>
                    <Row  class="progress-list">
                        <Col span="20">
                            <span class="title">Percentage</span>
                        </Col>
                        <Progress :percent="0" :stroke-width="8" ></Progress>
                    </Row >
               </Card>
            </Col>

        </Row>
        <Row :gutter="10">
            <Col :md="24" :lg="16">
                <Card :bordered="true" style="height:400px">
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        数据来源统计
                        <Select class="width_100 fr" v-model="date1" placeholder="请选择时间">
                            <Option value="last day">最近一天</Option>
                            <Option value="last week">最近一周</Option>
                            <Option value="last mooth">最近一月</Option>
                        </Select>
                        <div style="clear:both"></div>
                    </p>
                    <charts></charts>
               </Card>
            </Col>
            <Col :md="24" :lg="8">
                <Card :bordered="true" style="height:400px">
                    <p slot="title" class="card-title">
                        <Icon type="android-wifi"></Icon>
                        服务变化统计
                    </p>
                   <radar></radar>
               </Card>
            </Col>
        </Row>
        <Row :gutter="10">
            <Col :md="24" :lg="8">
                <Card :bordered="true" style="height:285px" class="card-table">
                    <p slot="title" class="card-title">
                        在线用户
                    </p>

               </Card>
            </Col>
            <Col :md="24" :lg="8">
                <Card :bordered="true" style="height:285px" class="card-table">
                    <p slot="title" class="card-title">
                        授权信息
                    </p>

               </Card>
            </Col>
            <Col :md="24" :lg="8">
                <Card :bordered="true" style="height:285px" class="card-table">
                    <p slot="title" class="card-title">
                        系统信息
                    </p>
               </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import charts from '@/components/Echarts/doubleLine'
import radar from '@/components/Echarts/RadarChart'

export default {
    name: 'home-body',
    components: {
        charts,
        radar
    },
    data () {
        return {
            date1: ''
        }
    }
}
</script>

<style lang="css">
</style>
