<template>
    <chart :options="option" theme="dark" :style="style"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'bar',
    props: {
      doubleBarData: {
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
    created() {
        // console.log(this.doubleBarData);
        this.timelineChange();
    },
    methods: {
        timelineChange() {
            for (var i = 0; i < this.doubleBarData.timeLineData.length; i++) {
                console.log(this.doubleBarData.timeLineData[i]);
                this.option.baseOption.timeline.data.push(this.doubleBarData.timeLineData[i]);
                this.option.options.push({
                    series: [{
                        name: '',
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
                        data: this.doubleBarData.databeast[this.doubleBarData.timeLineData[i]]
                    },
                    {
                        name: '',
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
                        data: this.doubleBarData.databeauty[this.doubleBarData.timeLineData[i]]
                    }]
                });
            }
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
                        text: this.doubleBarData.title,
                        left: 5,
                        top: 10,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    timeline: {
                        show: true,
                        left: 50,
                        axisType: 'category',
                        tooltip: {
                            show: true,
                            formatter: function(params) {
                                console.log(params);
                                return params.name;
                            }
                        },
                        autoPlay: true,
                        currentIndex: 6,
                        playInterval: 1000,
                        label: {
                            normal: {
                                show: true,
                                interval: 'auto',
                                formatter: '{value}年'
                            }
                        },
                        data: []
                    },
                    legend: {
                        data: this.doubleBarData.legend,
                        textStyle: {
                            color: '#eee'
                        },
                        top: 0,
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
                            data: this.doubleBarData.ydata
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
                                    color: '#fff',
                                    fontSize: 13
                                }
                            },
                            data: this.doubleBarData.ydata
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
                            data: this.doubleBarData.ydata
                        }
                    ],
                    series: [
                    // {
                    //     name: this.doubleBarData.legend[0],
                    //     type: 'bar',
                    //     barGap: 20,
                    //     barWidth: 15,
                    //     label: {
                    //         normal: {
                    //             show: true,
                    //             position: 'left',
                    //             textStyle: {
                    //                 color: '#eee',
                    //                 fontSize: 11
                    //             }
                    //         },
                    //         emphasis: {
                    //             show: true,
                    //             position: 'left',
                    //             offset: [0, 0]
                    //         }
                    //     },
                    //     itemStyle: {
                    //         normal: {
                    //             color: '#659F83'
                    //         },
                    //         emphasis: {
                    //             color: '#08C7AE'
                    //         }
                    //     },
                    //     data: this.doubleBarData.seriesData.leftData
                    // },
                    // {
                    //     name: this.doubleBarData.legend[1],
                    //     type: 'bar',
                    //     barGap: 20,
                    //     barWidth: 15,
                    //     xAxisIndex: 2,
                    //     yAxisIndex: 2,
                    //     label: {
                    //         normal: {
                    //             show: true,
                    //             position: 'right',
                    //             textStyle: {
                    //                 color: '#eee',
                    //                 fontSize: 11
                    //             }
                    //         },
                    //         emphasis: {
                    //             show: true,
                    //             position: 'right',
                    //             offset: [0, 0]
                    //         }
                    //     },
                    //     itemStyle: {
                    //         normal: {
                    //             color: '#F68989'
                    //         },
                    //         emphasis: {
                    //             color: '#F94646'
                    //         }
                    //     },
                    //     data: this.doubleBarData.seriesData.rightData
                    // }
                    ]
                },
                options: []
            }
        }
    }
}
</script>
