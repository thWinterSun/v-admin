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
                        data: this.barData.xdata
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
                series: this.barData.series
            }
        }
    }
}
</script>
