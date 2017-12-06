<template lang="html">
    <div>
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <doubleLine></doubleLine>
            </Col>
        </Row>
    </div>
</template>

<script>
import bread from '../../components/breadcrumb'
import doubleLine from './Echarts/doubleLine'
export default {
    name: 'homeCon',
    components: {
        bread,
        doubleLine
    }
}
</script>

<style lang="css">
    
</style>
