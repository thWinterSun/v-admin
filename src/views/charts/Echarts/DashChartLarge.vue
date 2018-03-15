<template>
    <chart :options="option" class="echarts" theme="dark"> </chart>
</template>

<style scoped>
.echarts {
    height: 330px;
    width: 100%;
}
</style>
<script>
export default {
    name: 'dashChartLarge',
    data () {
        return {
            option: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    bottom: '3%',
                    itemWidth: 12,
                    itemHeight: 12,
                    data: ['单价', '笔数','qq','微信','chrome','ssl','iTouche','Foxmail','Xshall','360']
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        data: ['1', '5', '10', '15', '20', '25', '31']
                    }
                ],
                yAxis: [
                    {
                        name: '（单价）',
                        type: 'value'
                    },
                    {
                        name: '（笔数）',
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '单价',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [10, 12, 21, 54, 60, 80, 71]
                    },
                    {
                        name: '笔数',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        yAxisIndex: 1,
                        smooth: true,
                        data: [30, 32, 61, 24, 20, 90, 20]
                    },
                    {
                        name: 'qq',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [89, 26, 2, 60, 49, 126, 51]
                    },
                    {
                        name: '微信',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        yAxisIndex: 1,
                        smooth: true,
                        data: [15, 82, 41, 6, 202, 140, 80]
                    },
                    {
                        name: 'chrome',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [23, 56, 50, 10, 49, 6, 71]
                    },
                    {
                        name: 'ssl',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [43, 120, 70, 212, 49, 66, 41]
                    },
                    {
                        name: 'iTouche',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [89, 22, 160, 107, 89, 66, 61]
                    },
                    {
                        name: 'Foxmail',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [125, 106, 98, 90, 79, 66, 71]
                    },
                    {
                        name: 'Xshall',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [223, 156, 150, 110, 149, 60, 171]
                    },
                    {
                        name: '360',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        areaStyle: {
                            normal: {}
                        },
                        smooth: true,
                        data: [53, 126, 59, 50, 49, 76, 61]
                    }
                ]
            }
        }
    }
}
</script>