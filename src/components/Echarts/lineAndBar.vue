<template>
    <chart :options="option" :style="style" theme="dark"> </chart>
</template>

<style scoped>

</style>
<script>
export default {
    name: 'dashChartLarge',
    props: {
      linebarData: {
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
    // created() {
    //   console.log(this.linebarData)
    // },
    data () {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            option: {
                title: {
                    text: this.linebarData.title,
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
                    data: this.linebarData.legend
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
                        axisLabel: {
                            color: '#eee'
                        },
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
                        data: this.linebarData.xdata
                    }
                ],
                yAxis: [
                    {
                        name: this.linebarData.legend[1],
                        type: 'value',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#eee'
                        }
                    },
                    {
                        name: this.linebarData.legend[0],
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
                series: this.linebarData.serise
            }
        }
    }
}
</script>
