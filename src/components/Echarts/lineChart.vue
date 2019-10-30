<template>
    <chart :options="option" :style="style" theme="dark"> </chart>
</template>

<style scoped>

</style>
<script>
export default {
    name: 'dashChartLarge',
    // props: ['lineData'],
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
                    left: '15%'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {show: false},
                        axisLine: {show: false},
                        axisLabel: {
                            color: '#eee'
                        },
                        splitLine: {
                            show: false
                        },
                        data: this.lineData.xdata
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
                series: this.lineData.series
            }
        }
    }
}
</script>
