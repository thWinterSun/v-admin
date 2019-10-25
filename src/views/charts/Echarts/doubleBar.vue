<template>
    <chart :options="option" theme="dark" style="width:100%;height:560px"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'bar',
    computed: {
        barData () {
            return {
            }
        }
    },
    data () {
        return {
            flightType: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐','执照培训'],
            flights: [6352,1458,19661,46217,6319,15835,107444,1842,5365,1083,9543,8658,74352,14987,3537,5085,16622,908035],
            flightHours: [17350,4648,28429,37926,9732,17923,41570,1921,2984,2307,2634,21688,16434,22053,2156,3316,2709,295476],
            option: {
                title: {
                    text: '通航作业架次与小时',
                    left: 5,
                    top: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                legend: {
                    data: ['小时', '架次'],
                    bottom: 0,
                    right: 'center'
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    right: 20,
                    feature: {
                        // saveAsImage: {},
                        // restore: {},
                        // dataView: {},
                        // dataZoom: {},
                        magicType: {
                            type: ['line','bar']
                        }
                    }
                },
                grid: [
                    {
                        show: false,
                        left: '4%',
                        top: 40,
                        bottom: 40,
                        containLabel: true,
                        width: '46%'
                    },
                    {
                        show: false,
                        left: '56.5%',
                        top: 60,
                        bottom: 40,
                        width: '0%'
                    },
                    {
                        show: false,
                        right: '4%',
                        top: 40,
                        bottom: 40,
                        containLabel: true,
                        width: '46%'
                    }
                ],
                xAxis: [
                    {
                        type: 'value',
                        inverse: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        position: 'top',
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    {
                        gridIndex: 1,
                        show: false
                    },
                    {
                        gridIndex: 2,
                        type: 'value',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        position: 'top',
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        inverse: true,
                        position: 'right',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            margin: 8,
                            textStyle: {
                                // color: '#9D9EA0',
                                // fontSize: 12
                            }
                        },
                        data: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐']
                    },
                    {
                        gridIndex: 1,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                // color: '#fff',
                                fontSize: 13
                            }
                        },
                        data: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐']
                    },
                    {
                        gridIndex: 2,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            textStyle: {
                                // color: '#9D9EA0',
                                // fontSize: 14
                            }
                        },
                        data: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐']
                    }
                ],
                series: [
                    {
                    name: '小时',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 15,
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            textStyle: {
                                color: '#eee',
                                fontSize: 11
                            }
                        },
                        emphasis: {
                            show: true,
                            position: 'left',
                            offset: [0, 0]
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#659F83'
                        },
                        emphasis: {
                            color: '#08C7AE'
                        }
                    },
                    data: [17350,4648,28429,37926,9732,17923,41570,1921,2984,2307,2634,21688,16434,22053,2156,3316,2709]
                },
                {
                    name: '架次',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 15,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: '#eee',
                                fontSize: 11
                            }
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            offset: [0, 0]
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F68989'
                        },
                        emphasis: {
                            color: '#F94646'
                        }
                    },
                    data: [6352,1458,19661,46217,6319,15835,107444,1842,5365,1083,9543,8658,74352,14987,3537,5085,16622]
                }]
            }
        }
    }
}
</script>