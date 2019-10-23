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
                    text: '通航历年飞行小时',
                    top: 10,
                    left: 5,
                    x: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false,
                    bottom: '3%',
                    itemWidth: 12,
                    itemHeight: 12,
                    data: []
                },
                grid: {
                    left: '15%'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {show: false},
                        axisLine: {show: false},
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
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'line',
                        tooltip: {
                            trigger: 'axis'
                        },
                        // areaStyle: {
                        //     normal: {}
                        // },
                        smooth: true,
                        data: [260716,272843,329873,367600,502749,517037,529800,675000,735000,764700,808000]
                    }
                ]
            }
        }
    }
}
</script>