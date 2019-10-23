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
            myData: ['大栅栏', '天安门', '故宫', '景山', '北海公园', '后海', '什刹海', '西单', '玉渊潭', '中央电视塔', '东单', '王府井', '南锣鼓巷', '工体', '潘家园', '琉璃厂'],
            option: {
                title: {
                    text: '',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                legend: {
                    data: ['', ''],
                    top: 4,
                    right: '20%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}人',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    right: 20,
                    feature: {
                        saveAsImage: {},
                        restore: {},
                        dataView: {},
                        dataZoom: {},
                        magicType: {
                            type: ['line','bar']
                        }
                    }
                },
                grid: [{
                    show: false,
                    left: '4%',
                    top: 60,
                    bottom: 60,
                    containLabel: true,
                    width: '46%'
                }, {
                    show: false,
                    left: '50.5%',
                    top: 80,
                    bottom: 60,
                    width: '0%'
                }, {
                    show: false,
                    right: '4%',
                    top: 60,
                    bottom: 60,
                    containLabel: true,
                    width: '46%'
                }],
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
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },
                        splitLine: {
                            show: true,
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
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    }
                ],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        margin: 8,
                        textStyle: {
                            color: '#9D9EA0',
                            fontSize: 12
                        }
                    },
                    data: this.myData
                }, {
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
                            color: '#9D9EA0',
                            fontSize: 12
                        }
                    },
                    data: this.myData
                }, {
                    gridIndex: 2,
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
                        show: false,
                        textStyle: {
                            color: '#9D9EA0',
                            fontSize: 12
                        }
                    },
                    data: this.myData
                }],
                series: [
                    {
                    name: '小时',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 20,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            position: 'left',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            }
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
                    data: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153]
                },
                {
                    name: '架次',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 20,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            }
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
                    data: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250]
                }]
            }
        }
    }
}
</script>