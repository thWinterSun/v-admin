<template>
    <chart :options="option" theme="dark" :style="style"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'bar',
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
    data() {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            option: {
                title: {
                    text: this.barData.title,
                    x: 'center',
                    left: 5,
                    top: 10
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: "",
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {show: false}
                    }
                },
                grid: {
                    top: '18%',
                    left: '3%',
                    right: '6%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisLine: {show: true},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        data: this.barData.xData
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        stack: '',
                        label: {
                            normal: {
                                show: false,
                                position: 'top'
                            }
                        },
                        barWidth: 15,
                        animationEasing: 'elasticOut',
                        animationDelayUpdate: function (idx) {
                            return idx * 5;
                        },
                        data: this.barData.seriesData,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                     var colorList = ['#d87c7c'];
                                    // var colorList = ["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"];
                                    // var colorList = ['#d87c7c','#919e8b', '#d7ab82', '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b','#d87c7c','#919e8b'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
}
</script>
