<template>
    <chart :options="option" theme="dark" style="width:100%;height:300px"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'bar',
    computed: {
        barData () {
            return {
                // for (let i in this.dataObj[0].SrcIp) {
                //     this.srcIpArr.unshift(srcIp[i].name);
                //     this.srcCountArr.unshift(srcIp[i].value);
                // }
            }
        }
    },
    data () {
        return {
            srcIpArr: [],
            srcCountArr: [],
            dataObj: [
                {
                    "SrcIp": [
                        {
                            "name": "222.42.47.207",
                            "value": "21"
                        },
                        {
                            "name": "218.3.44.122",
                            "value": "20"
                        },
                        {
                            "name": "123.108.129.126",
                            "value": "18"
                        },
                        {
                            "name": "219.150.64.173",
                            "value": "18"
                        },
                        {
                            "name": "123.150.243.185",
                            "value": "15"
                        },
                        {
                            "name": "219.246.40.69",
                            "value": "15"
                        },
                        {
                            "name": "202.100.241.14",
                            "value": "15"
                        },
                        {
                            "name": "46.61.59.254",
                            "value": "15"
                        },
                        {
                            "name": "178.212.211.64",
                            "value": "14"
                        },
                        {
                            "name": "36.49.20.197",
                            "value": "13"
                        }
                    ],
                    "TypeName": [
                        {
                            "selected": true,
                            "name": "NetworkDeviceAttack",
                            "value": 7
                        },
                        {
                            "name": "BufferOverflow",
                            "value": 51
                        },
                        {
                            "name": "Scaning",
                            "value": 50
                        },
                        {
                            "name": "Spyware",
                            "value": 49
                        },
                        {
                            "name": "Spoofing",
                            "value": 49
                        },
                        {
                            "name": "D.O.S",
                            "value": 49
                        },
                        {
                            "name": "Worm",
                            "value": 48
                        },
                        {
                            "name": "DatabaseAttack",
                            "value": 45
                        },
                        {
                            "name": "CGIAttack",
                            "value": 37
                        },
                        {
                            "name": "其他",
                            "value": 37
                        }
                    ],
                    "DstIp": [
                        {
                            "name": "63.160.202.52",
                            "value": "17"
                        },
                        {
                            "name": "218.241.91.204",
                            "value": "16"
                        },
                        {
                            "name": "121.28.43.206",
                            "value": "16"
                        },
                        {
                            "name": "117.146.22.86",
                            "value": "14"
                        },
                        {
                            "name": "46.41.20.42",
                            "value": "13"
                        },
                        {
                            "name": "106.45.24.29",
                            "value": "12"
                        },
                        {
                            "name": "124.31.86.203",
                            "value": "11"
                        },
                        {
                            "name": "70.35.152.53",
                            "value": "11"
                        },
                        {
                            "name": "220.230.137.60",
                            "value": "11"
                        },
                        {
                            "name": "220.195.114.140",
                            "value": "11"
                        }
                    ]
                }
            ],
            option: {
                title: {
                    text: "count",
                    x: 'left'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: "源IP : {b} <br/>攻击次数 : {c} 次",
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {show: true}
                    }
                },
                grid: {
                    top: '12%',
                    left: '3%',
                    right: '4%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'value',
                        show: true
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        splitLine: {
                            show: false
                        },
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                series: [
                    {
                        name: '次数',
                        type: 'bar',
                        stack: 'IP',
                        label: {
                            normal: {
                                show: true,
                                position: 'right'
                            }
                        },
                        barWidth: 15,
                        animationEasing: 'elasticOut',
                        animationDelayUpdate: function (idx) {
                            return idx * 5;
                        },
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // var colorList = ["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"];
                                    var colorList = ['#d87c7c','#919e8b', '#d7ab82', '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b','#d87c7c','#919e8b'];
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