<template lang="html">
    <div class="">
        <!--导航组件  -->
        <top-menus></top-menus>
        <div class="home-body">
            <Row class="cards" :gutter="10">
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                        <div class="front">
							<div class="media">
								<span class="pull-left">
			                        <Icon type="ion-paper-airplane"></Icon>
			                    </span>
								<div class="media-body">
									<small>硬盘利用</small>
									<h2 id="hardDiskNumber" class="media-heading animate-number" >0%</h2>
								</div>
							</div>
							<div class="progress-list">
								<div class="details">
									<div class="title">Percentage</div>
								</div>
								<div class="status pull-right bg-transparent-black-1">
									<span id="hardDiskUtilization" class="animate-number">85</span>%
								</div>
								<Progress :percent="85" :stroke-width="8" status="active"></Progress>
							</div>
						</div>
                   </Card>
                </Col>
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :xs="12" :md="8" :lg="4">
                    <Card :bordered="true">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                
            </Row>
            <Row :gutter="10">
                <Col :md="24" :lg="16">
                    <Card :bordered="true" style="height:400px">
                        <charts></charts>
                   </Card>
                </Col>
                <Col :md="24" :lg="8">
                    <Card :bordered="true" style="height:400px">
                       <radar></radar>
                   </Card>
                </Col>
            </Row>
            <Row :gutter="10">
                <Col :md="24" :lg="8">
                    <Card :bordered="true" style="height:265px">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :md="24" :lg="8">
                    <Card :bordered="true" style="height:265px">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
                <Col :md="24" :lg="8">
                    <Card :bordered="true" style="height:265px">
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
                   </Card>
                </Col>
            </Row>
            <router-view></router-view>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import topMenus from '../components/menu'
import footer from '../components/footer'
import charts from './charts/Echarts/DashChartLarge'
import radar from './charts/Echarts/RadarChart'
import '../assets/themes/primary.less'
import './home/home.less'
export default {
    name: 'dashboard',
    components: {
        'top-menus': topMenus,
        'foot': footer,
        charts,
        radar
    }
}
</script>

<style lang="less">
    
</style>

