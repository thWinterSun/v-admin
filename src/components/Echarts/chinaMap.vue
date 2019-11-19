<template>
    <chart :options="mapOption" :style="style" theme="dark"> </chart>
</template>

<script>
import ECharts from 'vue-echarts'
import echarts from 'echarts'
import chinaMap from 'echarts/map/json/china.json'

ECharts.registerMap('china', chinaMap)
export default {
    name: 'chinaMap',
    props: {
      mapData: {
        type: Object
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '680px'
      }
    },
    created() {
        console.log(this.mapData.city);
    },
    data() {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            mapOption: {
              // backgroundColor: '#404a59',
              title: {
                  text: '',
                  top: 30,
                  left: 'center',
                  textStyle: {
                      color: '#fff'
                  }
              },
              legend: {
                  show: false,
                  orient: 'vertical',
                  top: 'bottom',
                  left: 'right',
                  data: ['地点', '线路'],
                  textStyle: {
                      color: '#fff'
                  }
              },
              geo: {
                  map: 'china',
                  label: {
                      emphasis: {
                          show: false
                      }
                  },
                  roam: false,
                  itemStyle: {
                      normal: {
                          areaColor: '#BFE0FC',
                          borderColor: '#162546'
                      },
                      emphasis: {
                          areaColor: '#D4EFFC'
                      }
                  }
              },
              series: [{
                  name: '地点',
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  zlevel: 2,
                  rippleEffect: {
                      brushType: 'stroke'
                  },
                  label: {
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
                  data: this.mapData.city
                },
                {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                        symbolSize: 15,
                        trailLength: 0
                    },
                    lineStyle: {
                        normal: {
                           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#DD6B66'
                            },
                            {
                                offset: 1,
                                color: '#ffbf31'
                            }], false),
                            width: 2,
                            opacity: 0.5,
                            curveness: 0.2
                        }
                    },
                    data: this.mapData.line
                }]
            }
        }
    }
}
</script>

<style>

</style>
