<template>
    <chart :options="option" :style="style" theme="dark"> </chart>
</template>

<style scoped>

</style>
<script>
export default {
    name: 'barcharts',
    props: {
      barData: {
        type: Object
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '280px'
      }
    },
    data () {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            option: {
                baseOption: {
                    title: {
                        text: this.barData.title,
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
                    timeline: {
                        show: false,
                        type: 'slider',
                        axisType: 'category',
                        bottom: '10',
                        currentIndex: 0,
                        playInterval: 1000,
                        autoPlay: true,
                        loop: true,
                        realtime: true,
                        controlPosition: 'left',
                        data: this.barData.xdata
                    },
                    legend: {
                        show: true,
                        bottom: '3%',
                        itemWidth: 12,
                        itemHeight: 12,
                        textStyle: {
                            color: '#eee'
                        },
                        data: this.barData.legend
                    },
                    grid: {
                        right: '12%'
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
                                show: false,
                                lineStyle: {
                                    color: '#ffffff1f'
                                }
                            },
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            name: '',
                            type: 'value',
                            position: 'right',
                            axisTick: {show: false},
                            axisLabel: {
                                color: '#eee'
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#ffffff1f'
                                }
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#9CACB7',
                                    width: 2
                                }
                            }
                        }
                    ],
                    series: []
               },
               options: this.barData.options
            }
        }
    }
}
</script>
