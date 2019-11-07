<template>
    <chart :options="option" :style="style" theme="dark"> </chart>
</template>

<style scoped>

</style>
<script>
export default {
    name: 'barcharts',
    props: {
      bartopData: {
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
                title: {
                    text: this.bartopData.title,
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
                    data: this.bartopData.legend
                },
                grid: {
                    left: '15%',
                    bottom: '10%'
                },
                xAxis: {
                  show: false
                },
                yAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {color: '#eee'},
                        splitLine: {show: false},
                        data: this.bartopData.ydata
                    },
                    {
                      type: 'value',
                      gridIndex: 0,
                      min: 0,
                      max: 100,
                      splitNumber: 10,
                      splitLine: {show: false},
                      axisLine: {show: false},
                      axisTick: {show: false},
                      axisLabel: {show: false},
                      splitArea: {
                        show: true,
                        areaStyle: {
                           color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        }
                      }
                    }
                ],
                series: [
                  {
                    type: 'bar',
                    label: {
                      normal: {
                        show: true,
                        position: 'right',
                        color: '#eee'
                      }
                    },
                    barWidth: '50%',
                    data: this.bartopData.seriesData.reverse()
                  },
                  {
                      name: '背景',
                      type: 'bar',
                      barWidth: '50%',
                      yAxisIndex: 1,
                      data: [100, 100, 100, 100, 100, 100, 100,100, 100, 100],
                      itemStyle: {
                          normal: {
                              color: 'rgba(255,255,255,0.1)'
                          }
                      }
                  }
                ]
            }
        }
    }
}
</script>
