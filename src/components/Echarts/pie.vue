<template>
    <chart :options="option" theme="dark" :style="style"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'pie',
    props: {
      pieData: {
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
        console.log(this.pieData)
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
                        text: this.pieData.title,
                        x: 'center',
                        left: 5,
                        top: 10,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    timeline: {
                        show: false,
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 1000,
                        data: this.pieData.timeLine
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        orient: 'vertical',
                        top: 'middle',
                        right: "15",
                        textStyle: {
                            color: '#fff'
                        },
                        data: this.pieData.legend
                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['40%','60%'],
                            center: ['40%', '55%'],
                            roseType: 'radius',
                            label: {
                                normal: {
                                    formatter: '{c}',
                                    textStyle: {
                                        color: '#eee',
                                        fontSize: 11
                                    }
                                }
                            },
                            data: []
                        }
                    ]
                },
                options: this.pieData.options
            }
        }
    }
}
</script>
