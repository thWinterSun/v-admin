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
    methods: {
      getArrayValue(array, key = 'value') {
        let res = [];
        if (array) {
          array.forEach((t) => {
            res.push(t[key])
          })
        }
        return res;
      },
      array2obj(array, key) {
        let resObj = {};
        for (let i = 0; i < array.length; i++) {
          resObj[array][i][key] = array[i]
        }
        return resObj;
      },
      getData(data) {
        let res = {
          series: [],
          yAxis: []
        }
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          res.resies.push(
            {
              name: '',
              type: 'pie',
              clockWise: false,
              hoverAnimation: false,
              radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
              center: ['30%', '55%'],
              label: {show: false},
              itemStyle: {
                label: {show: false},
                labelLine: {show: false},
                borderWidth: 5
              },
              data: [
                {
                  value: data[i].value,
                  name: data[i].name
                },
                {
                  value: this.sumValue = data[i].value,
                  name: '',
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 0
                  },
                  tooltip: {show: false},
                  hoverAnimation: false
                }
              ]
            }
          );
          res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, // 顺时针加载
            hoverAnimation: false,
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ['30%', '55%'],
            label: {show: false},
            itemStyle: {
              label: {show: false},
              labelLine: {show: false},
              borderWidth: 5
            },
            data: [{
              value: 7.5,
              itemStyle: {
                color: '#E3F0FF',
                borderWidth: 0
              },
              tooltip: {show: false},
              hoverAnimation: false
            },{
              value: 2.5,
              name: '',
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0
              },
              tooltip: {show: false},
              hoverAnimation: false
            }]
          })
          res.yAxis.push((this.datas[i].value / this.sumValue * 100).toFixed(2) + "%")
        }
        return res
      }
    },
    data () {
        const style = {
          width: this.width,
          height: this.height
        }
        return {
            style,
            datas: [
              {
                  name: "本科及以上",
                  value: 13211
              },
              {
                  name: "高中",
                  value: 42111
              },
              {
                  name: "初中及以下",
                  value: 81711
              },
              {
                  name: "其他",
                  value: 121711
              }
            ],
            arrName: this.getArrayValue(this.datas, 'name'),
            arrValue: this.getArrayValue(this.datas, 'value'),
            sumValue: this.arrValue,
            objData: this.array2obj(this.datas, 'name'),
            optionData: this.getData(this.datas),
            option: {
                title: {
                    text: '圆环图',
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
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#000",
                            fontSize: 10
                        },
                        show: true
                    },
                    data: ['2005','2010','2015','2019']
                }],
                xAxis: [{
                    show: false
                }],
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
