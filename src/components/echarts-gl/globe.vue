<template>
  <div>
      <div id="mapContainer" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import 'echarts-gl'
export default {
    props: {

    },
    methods: {
        initGl() {
            this.chart = echarts.init(
                this.$refs.myEchart
            );
            for (let i = 0; i < 50; i++) {
                this.optionGl.series[1].data = this.optionGl.series[1].data.concat(this.getRandomData())
            }
            console.log(this.mapChart);
            this.chart.setOption(this.optionGl);
        },
        initmapchart() {
            let canvas = document.createElement('canvas');
            this.mapChart = echarts.init(canvas, null, {
                width: 4096,
                height: 2048
            });
            this.mapChart.setOption(this.optionChina);
        },
        getRandomData() {
             return {
                coords: [
                    [Math.random() * 135.20, Math.random() * 53.33],
                    [121.51585, 31.23045]
                ],
                value: (Math.random() * 30).toFixed(2)
            }
        }
    },
    mounted() {
        this.initmapchart();
        this.initGl();
    },
    data() {
        const chart = null;
        const mapChart = null;
        return {
            chart,
            mapChart,
            optionChina: {
                geo: {
                    // map: 'world',
                    show: true,
                    map: 'china',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    boundingCoords: [
                        [-180, 90],
                        [180, -90]
                    ],
                    label: {
                        show: true,
                        color: '#f66',
                        fontWeight: 'bold',
                        fontSize: 16,
                        emphasis: {
                            color: '#000',
                            show: false
                        }
                    },
                    itemStyle: {
                        areaColor: 'transparent',
                        borderColor: '#000'
                    },
                    emphasis: {
                        areaColor: 'transparent'
                    },
                    regions: [{
                        name: "南海诸岛",
                        value: 0,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                                label: {
                                    show: false
                                }
                            }
                        }
                    }]
                },
                data: []
            },
            optionGl: {
                globe: {
                    baseTexture: require('../../assets/img/earth.jpg'),
                    // baseTexture: this.mapChart,
                    // heightTexture: require('../../assets/img/bathymetry_bw_composite_4k.jpg'),
                    displacementScale: 0.1,
                    shading: 'lambert',
                    // environment: '@/assets/images/starfield.jpg',
                    light: {
                        ambient: {
                            intensity: 0.3
                        },
                        main: {
                            intensity: 1.2
                        }
                    },
                    viewControl: {
                        projection: 'perspective',
                        alpha: 0,
                        beta: 180,
                        center: [0, 0, 0], // 距离地轴的位置[左、上、右]
                        targetCoord: [120, 38], // 旋转的水平面的起点坐标
                        autoRotate: true,
                        autoRotateAfterStill: 20, // 暂停20秒后会自动旋转
                        distance: 166 // 视距
                    },
                    // layers: [{
                    //     type: 'blend',
                    //     texture: this.mapChart
                    // }]
                    layers: [{
                        type: 'blend',
                        blendTo: 'emission',
                        texture: require('../../assets/img/night.jpg')
                    },
                    {
                        type: 'overlay',
                        texture: require('../../assets/img/clouds.png'),
                        shading: 'lambert',
                        distance: 5
                    }]
                },
                series: [
                    { // 气泡图
                        type: 'scatter3D', // 可视化类型
                        coordinateSystem: 'globe', // 坐标系统
                        blendMode: 'lighter',
                        symbolSize: 2,
                        itemStyle: {
                            color: 'rgb(255,0,0)', // 数据颜色
                            opacity: 1
                        },
                        data: []
                    },
                    { // 线图
                        name: 'lines3D',
                        type: 'lines3D',
                        coordinateSystem: 'globe',
                        effect: {
                            show: true,
                            period: 2,
                            trailWidth: 1,
                            trailLength: 0.5,
                            trailOpacity: 1,
                            trailColor: '#0087f4'
                        },
                        lineStyle: {
                            width: 1,
                            color: '#0087f4',
                            opacity: 0
                        },
                        blendMode: 'lighter',
                        data: [],
                        silent: false
                    }
                ]
            }
        }
    }
}
</script>

<style>
#mapContainer {
    width: 800px;
    height: 700px;
    margin: 50px;
}
</style>