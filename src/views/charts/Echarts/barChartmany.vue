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
                    text: '通用航空器保有量',
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
                    show: true,
                    bottom: '3%',
                    itemWidth: 12,
                    itemHeight: 12,
                    textStyle: {
                        color: '#eee'
                    },
                    data: ['总数','固定翼','旋翼类','其它']
                },
                grid: {
                    left: '15%'
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
                        axisLabel: {
                            color: '#eee'
                        },
                        splitLine: {
                            show: false
                        },
                        data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
                    }
                ],
                yAxis: [
                    {
                        name: '',
                        type: 'value',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {
                            color: '#eee'
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '总数',
                        type: 'bar',
                        // stack: '总量',
                        tooltip: {
                            trigger: 'axis'
                        },
                        smooth: true,
                        data: [807,900,907,1010,1154,1320,1654,1975,2235,2595,2776]
                    },
                    {
                        name: '固定翼',
                        type: 'bar',
                        // stack: '总量',
                        tooltip: {
                            trigger: 'axis'
                        },
                        smooth: true,
                        data: [677,743,736,812,893,995,1239,1403,1530,1692,1808]
                    },
                    {
                        name: '旋翼类',
                        type: 'bar',
                        // stack: '总量',
                        tooltip: {
                            trigger: 'axis'
                        },
                        smooth: true,
                        data: [124,141,154,178,238,298,385,538,658,838,903]
                    },
                    {
                        name: '其它',
                        type: 'bar',
                        // stack: '总量',
                        tooltip: {
                            trigger: 'axis'
                        },
                        smooth: true,
                        data: [6,16,17,20,23,27,30,34,47,65,65]
                    }
                ]
            }
        }
    }
}
</script>