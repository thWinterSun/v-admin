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
    data () {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            option: {
                title: {
                    text: this.pieData.title,
                    x: 'center',
                    left: 5,
                    top: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    top: 'middle',
                    left: 'left',
                    data: ['','','','','']
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%','50%'],
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                formatter: '{b}：{c}',
                                textStyle: {
                                    color: '#eee',
                                    fontSize: 11
                                }
                            }
                        },
                        data: this.pieData.data
                    }
                ]
            }
        }
    }
}
</script>
