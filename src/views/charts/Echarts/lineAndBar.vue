<template>
    <chart :options="option" class="echarts" theme="dark"> </chart>
</template>

<style scoped>
.echarts {
    height: 280px;
    width: 100%;
}
</style>
<script>
export default {
    name: 'dashChartLarge',
    data () {
        return {
            option: {
                title: {
                    text: '运营企业数量',
                    top: 10,
                    left: 5,
                    x: 'left',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false,
                    bottom: '3%',
                    itemWidth: 12,
                    itemHeight: 12,
                    data: ['增长率','运营企业总数']
                },
                grid: {
                    left: '15%',
                    top: '25%',
                    bottom: '15%'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {show: false},
                        axisLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
                    }
                ],
                yAxis: [
                    {
                        name: '运营企业总数',
                        type: 'value',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        name: '增长率%',
                        type: 'value',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '增长率',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data: ['5','31','15','8','11','18','29','25','17','14','12']
                    },
                    {
                        name: '运营企业总数',
                        type: 'bar',
                        barWidth: 15,
                        smooth: true,
                        data: [68,89,103,111,123,146,189,239,281,320,360]
                    }
                ]
            }
        }
    }
}
</script>