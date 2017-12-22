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
                    left: 'center',
                    itemWidth: 12,
                    itemHeight: 12,
                    data: ['单价', '笔数']
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '5', '10', '15', '20', '25', '31']
                    }
                ],
                yAxis: [
                    {
                        name: '（单价）',
                        type: 'value',
                        max: 100
                    },
                    {
                        name: '（笔数）',
                        type: 'value',
                        max: 100
                    }
                ],
                series: [
                    {
                        name: '单价',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
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
                        yAxisIndex: 1,
                        smooth: true,
                        data: [30, 32, 61, 24, 20, 90, 20]
                    }
                ]
            }
        }
    }
}
</script>