<template lang="html">
    <div class="">
        <!--导航组件  -->
        <top-menus></top-menus>
        <div class="home-body">
            <Row class="cards" :gutter="10">
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
                       <p>Content of no border type. border type. Content of no border type. border type.</p>
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
import charts from './charts/echarts'
import '../assets/themes/dark.less'
export default {
    name: 'home',
    components: {
        'top-menus': topMenus,
        'foot': footer,
        charts
    }
}
</script>

<style lang="less">
    .home-body{
        min-height: 820px;
        padding:10px;
        .ivu-row{
            margin-bottom: 10px;
            .ivu-card{
                height:120px;   
            }
        }
        
        
    }
</style>

