<template>
    <chart :options="option" :style="style" theme="dark"> </chart>
</template>

<style scoped>

</style>
<script>
// import resize from './mixins/resize'
export default {
    name: 'dashChartLarge',
    // props: ['lineData'],
    // mixins: [resize],
    props: {
      lineData: {
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
    mounted() {
      console.log(this.lineData)
    },
    data () {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            option: {
                title: {
                    text: this.lineData.title,
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
                    data: this.lineData.legend
                },
                grid: {
                    right: '18%'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            margin: 30,
                            color: '#eee'
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: true,
                            length: 25,
                            lineStyle: {
                                color: "#ffffff1f"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#ffffff1f'
                            }
                        },
                        data: this.lineData.xdata
                    }
                ],
                yAxis: [
                    {
                        name: '',
                        type: 'value',
                        position: 'right',
                        axisLabel: {
                            margin: 20,
                            color: '#eee'
                        },
                        axisTick: {
                            show: true,
                            length: 15,
                            lineStyle: {
                                color: "#ffffff1f"
                            }
                        },
                        splitLine: {
                            show: true,
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
                series: this.lineData.series
            }
        }
    }
}
</script>
