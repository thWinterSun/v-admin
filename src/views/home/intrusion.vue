<style lang="css" scoped>
    .ivu-table-cell{
        padding-left: 10px;
        padding-right: 10px;
    }
    .cards{
        height:200px;
        border-radius: 3px;
        padding: 20px;
    }
    .midChart{
        height:330px;
        padding: 20px;
    }
    .tableBg{
        height:340px;
    }
    .mapChart{
        width:100%;
        height:660px;
    }
    .pie{
        width:50%;
        height:160px;
    }
</style>
<template lang="html">
    <div >
        <Row class="chartBg">
            <Col :md="24" :lg="16">
                <chart :options="mapOptions" class="mapChart" id="cakechart" theme="dark"></chart>
            </Col>
            <Col :md="24" :lg="8">
                <div class="midChart">
                    <bar></bar>
                </div>
            </Col>
            <Col :md="24" :lg="8">
                <div class="midChart">
                    <bar></bar>
                </div>
            </Col>
        </Row>
        <Row>
            <Col :md="24" :lg="16">
                <div class="tableBg">
                    <Table :columns="columns1" :data="data1" :show-header="false" :disabled-hover="true"></Table>
                </div>
            </Col>
            <Col :md="24" :lg="8">
                <div class="midChart" style="height:338px;">
                    <pie></pie>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import ECharts from 'vue-echarts';
import worldMap from 'echarts/map/json/world.json'
import bar from '../charts/Echarts/bar'
import pie from '../charts/Echarts/pie'
ECharts.registerMap('world', worldMap)
export default {
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                    width: '150',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'map'
                                },
                                style: {
                                    marginRight: '10px',
                                    color: '#C34034'
                                }
                            }),
                            h('strong', params.row.name)
                        ]);
                    }
                },
                {
                    title: 'Add',
                    key: 'address'
                },
                {
                    title: 'Sip',
                    key: 'sip',
                    align: 'left'
                },
                {
                    title: 'Dip',
                    key: 'dip',
                    align: 'left'
                },
                {
                    title: 'Type',
                    key: 'type'
                }
            ],
            data1: [
                {
                    name: 'United States',
                    address: '3320',
                    sip: '66.48.10.212',
                    dip: '118.72.210.99',
                    type: 'D.O.S'
                },
                {
                    name: 'China',
                    address: '525',
                    sip: '66.48.10.212',
                    dip: '118.72.210.99',
                    type: 'D.O.S'
                },
                {
                    name: 'Canada',
                    address: '53',
                    sip: '66.48.10.212',
                    dip: '39.0.6.158',
                    type: 'D.O.S'
                },
                {
                    name: 'Spain',
                    address: '1156',
                    sip: '66.48.10.212',
                    dip: '101.34.117.108',
                    type: 'D.O.S'
                },
                {
                    name: 'New Caledonia',
                    address: '22',
                    sip: '223.21.136.172',
                    dip: '118.72.210.99',
                    type: 'D.O.S'
                },
                {
                    name: 'China',
                    address: '525',
                    sip: '66.48.10.212',
                    dip: '118.72.210.99',
                    type: 'D.O.S'
                },
                {
                    name: 'Canada',
                    address: '53',
                    sip: '66.48.10.212',
                    dip: '39.0.6.158',
                    type: 'D.O.S'
                }
            ],
            mapData: {
                "citys": [{
                    "name": "柏林",
                    "value": [13.25, 52.3, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }, {
                    "name": "波兰",
                    "value": [19.08, 51.55, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }, {
                    "name": "青海",
                    "value": [110.49, 36.34, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }, {
                    "name": "India",
                    "value": [77,28, 4],
                    "symbolSize": 2
                }, {
                    "name": "Romania",
                    "value": [25, 44, 4],
                    "symbolSize": 2
                }, {
                    "name": "Rusia",
                    "value": [100, 65, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }, {
                    "name": "Rusia",
                    "value": [30, 31, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }, {
                    "name": "South Afr ",
                    "value": [24, -27, 4],
                    "symbolSize": 2,
                    "itemStyle": {
                        "normal": {
                            "color": "#F58158"
                        }
                    }
                }],
                "moveLines": [{
                    "fromName": "青海",
                    "toName": "柏林",
                    "coords": [
                        [110.49, 36.34],
                        [13.25, 52.3]
                    ]
                }, {
                    "fromName": "青海",
                    "toName": "SA",
                    "coords": [
                        [110.49, 36.34],
                        [24,-27]
                    ]
                }, {
                    "fromName": "青海",
                    "toName": "Egyp",
                    "coords": [
                        [110.49, 36.34],
                        [30,31]
                    ]
                }, {
                    "fromName": "青海",
                    "toName": "波兰",
                    "coords": [
                        [110.49, 36.34],
                        [19.08, 51.55]
                    ]
                }, {
                    "fromName": "青海",
                    "toName": "Romania",
                    "coords": [
                        [110.49, 36.34],
                        [25,44]
                    ]
                }, {
                    "fromName": "青海",
                    "toName": "Russia",
                    "coords": [
                        [110.49, 36.34],
                        [100, 65]
                    ]
                }]
            }
        }
    },
    computed: {
        mapOptions () {
            return {
                title: {
                    text: 'Maps',
                    left: 20,
                    top: 10,
                    textStyle: {
                        fontWeight: "300",
                        fontSize: 20,
                        color: '#707982'
                    }
                },
                visualMap: {
                    type: 'piecewise',
                    max: 100,
                    left: 20,
                    bottom: 20,
                    hoverLink: false,
                    textStyle: {
                        color: '#ddd'
                    },
                    pieces: [{
                        min: 75,
                        max: 100,
                        label: '严重',
                        color: '#C0454D'
                    }, {
                        min: 50,
                        max: 75,
                        label: '高危',
                        color: '#C6625A'
                    }, {
                        min: 25,
                        max: 50,
                        label: '中度',
                        color: '#E6B68B'
                    }, {
                        min: 0,
                        max: 25,
                        label: '一般',
                        color: '#F5EDA5'
                    }]
                },
                geo: {
                    map: 'world',
                    label: {
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#BCBCBC',
                                fontWeight: 'bold'
                            }
                        },
                        normal: {
                            show: false
                        }
                    },
                    roam: false,  // 鼠标缩放
                    itemStyle: {
                        normal: {
                            areaColor: '#a2a5a9',
                            borderColor: '#404a59',
                            opacity: 0.7
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: '地点',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            brushType: 'stroke',
                            period: 7,
                            scale: 26
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            },
                            emphasis: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        symbolSize: 2,
                        showEffectOn: 'render',
                        itemStyle: {
                            normal: {
                                color: '#46bee9'
                            }
                        },
                        data: this.mapData.citys
                    },
                    {
                        name: '高危',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            symbol: 'arrow',
                            constantSpeed: 160,
                            trailLength: 0.3,
                            color: '#E88981',
                            symbolSize: 6
                        },
                        lineStyle: {
                            normal: {
                                width: '',
                                color: '#C0454D'
                                // curveness: 0.2
                            }
                        },
                        data: this.mapData.moveLines
                    }
                ]
            }
        }
    },
    components: {
        bar,
        pie
    }
}
</script>
