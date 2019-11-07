<style lang="css" scoped>

    .midChart{
        height:910x;
        border: 1px solid  #495060;
        /* border-bottom: 1px solid #495060; */
        padding-left: 20px;
    }

    .mapChart{
        width:100%;
        height:650px;

    }
    .contentBg {
        background: url("../../images/bg31.png") no-repeat;
        background-size: 100% 100%;
        width:100%;
        height:40%;
    }
    .cont{
        height: 280px;
        margin: 10px;
        background: url("../../images/divbg3.png") 0% 0% / 100% 100% no-repeat;
    }
    .topCont {
      height: 150px;
      padding: 15px;
      margin: 5px 130px;
      background: rgba(101,132,226,.1);
      /* background: url("../../images/divbg3.png") 0% 0% / 100% 100% no-repeat;  */
    }
    .topCont .border{
      height: 80px;
      margin: 30px 10px;
      /* background: url("../../images/divbg3.png") 0% 0% / 100% 100% no-repeat; */
    }
    .topCont li{
      list-style-type:none;
      width: 50%;
      text-align: center;

    }
    .topCont .num{
      font-size: 4em;
      color: #ffeb7b;
      font-weight: bold;
    }

    .topCont .title{
      padding: 10px;
      font-size: 18px;
      color: #eee;
      /* background: url("../../images/air.png") 0% 0% / 100% 100% no-repeat; */

    }
    .pull-left{
      float: left;
    }
    .pull-right{
      float: right;
    }

    .platformTitle {
      text-align: center;
      color: #eee;
      line-height: 100px;
      font-size: 2em;
      height: 100px;
      width: 100%;
      background: url("../../images/form(8).png") 0% 0% / 100% 100% no-repeat;

    }
</style>
<template lang="html">
    <div class="contentBg">
        <Row>
            <Col :sm="24" :md="12" :lg="6">
                <Row style="margin-top: 30px;">
                    <Col :lg="24">
                        <div class="cont">
                            <linechart :lineData="lineOptions"></linechart>
                        </div>
                    </Col :lg="24">

                    <Col :lg="24">
                        <div class="cont">
                            <manybar :barData="manybarOption"></manybar>
                        </div>
                    </Col :lg="24">
                    <Col :lg="24">
                        <div class="cont">
                            <pie :pieData="pieOptions"></pie>
                        </div>
                    </Col :lg="24">
                </Row>
            </Col>
            <Col :sm="24" :md="24" :lg="12">
                
                <Row>
                    <Col :lg="24">
                      <h2 class="platformTitle">中航油通航大数据平台</h2>
                        <div class="topCont">
                          <ul>
                            <li class="pull-left title">通用航空企业数量</li>
                            <li class="pull-right title">通用航空器数量</li>
                          </ul>
                          <div class="border">
                            <ul>
                              <li class="pull-left num">
                                <countTo :startVal='companyStart' :endVal='companyEnd' :duration='10000'></countTo>
                              </li>
                              <li class="pull-right num">
                                <countTo :startVal='aircraftStart' :endVal='aircraftEnd' :duration='10000'></countTo>
                              </li>
                            </ul>
                          </div>

                        </div>
                    </Col>
                    <Col :lg="24">
                      <div>
                        <chinamap :mapData="chinMap"  class="mapChart" ></chinamap>
                      </div>
                    </Col>
                </Row>
                
            </Col>
            <Col :sm="24" :md="12" :lg="6">
                <Row style="margin-top: 30px;">
                    <Col :lg="24">
                        <div class="cont" style="height: 580px">
                          <doublebar :doubleBarData = "doubleOption" height="560px"></doublebar>
                        </div>
                    </Col :lg="24">
                    <Col :lg="24">
                        <div class="cont">
                            <lineBar :linebarData="lineBarOption"></lineBar>
                        </div>
                    </Col :lg="24">
                </Row>
            </Col>
        </Row>

    </div>
</template>

<script>
// built-in theme
import 'echarts/theme/dark.js'
import echarts from 'echarts'
import countTo from 'vue-count-to'
// Map of China
import chinamap from '@/components/Echarts/chinaMap'
import pie from '@/components/Echarts/pie'
import linechart from '@/components/Echarts/lineChart'
import doublebar from '@/components/Echarts/doubleBar'
import manybar from '@/components/Echarts/barChart'
import lineBar from '@/components/Echarts/lineAndBar'
import { city,line } from '@/assets/data/mapData'
export default {
    components: {
        countTo,
        chinamap,
        pie,
        linechart,
        doublebar,
        manybar,
        lineBar
    },
    methods: {
    },
    data () {
        return {
            companyStart: 0,
            companyEnd: 335,
            aircraftStart: 0,
            aircraftEnd: 2595,
            chinMap: {
              city,
              line
            },
            lineOptions: {
                title: '中国通航历年飞行小时',
                xdata: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
                series: [
                  {
                      name: '',
                      type: 'line',
                      smooth: true,
                      showAllSymbol: true,
                      symbol: 'circle',
                      symbolSize: 6,
                      lineStyle: {
                          normal: {
                              color: "#DD6B66"
                          }
                      },
                      label: {
                          show: true,
                          position: 'top',
                          textStyle: {
                              color: '#fff'
                          }
                      },
                      itemStyle: {
                          color: "red",
                          borderColor: "#fff",
                          borderWidth: 3
                      },
                      tooltip: {
                          show: true
                      },
                      areaStyle: {
                          normal: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: '#DD6B66'
                                  },
                                  {
                                      offset: 1,
                                      color: '#3fbbff0d'
                                  }
                              ], false)
                          }
                      },
                      data: [260716,272843,329873,367600,502749,517037,529800,675000,735000,764700,808000]
                  }
                ]

            },
            pieOptions: {
              title: '通航航空器变化趋势',
              legend: ['总数','固定翼','旋翼类','其他'],
              data: [
                  {value: 111, name: '空中游览', selected: true},
                  {value: 97, name: '执照培训'},
                  {value: 88, name: '航空拍摄'},
                  {value: 72, name: '空中巡查'},
                  {value: 74, name: '空中喷洒'},
                  {value: 70, name: '空中广告'},
                  {value: 61, name: '包机飞行'},
                  {value: 42, name: '包机飞行'},
                  // {value: 35, name: '空中拍照'},
                  // {value: 34, name: '科学实验'},
                  // {value: 19, name: '医疗救援'},
                  {value: 11, name: '跳伞飞行'},
                  {value: 6, name: '航空表演'}
              ],
              timeLine: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
              options: [
                {
                    series: [{
                          data: [{
                                  value: 807,
                                  name: '总数'
                              },
                              {
                                  value: 677,
                                  name: '固定翼'
                              },
                              {
                                  value: 124,
                                  name: '旋翼类'
                              },
                              {
                                  value: 6,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                {
                    series: [{
                          data: [{
                                  value: 900,
                                  name: '总数'
                              },
                              {
                                  value: 743,
                                  name: '固定翼'
                              },
                              {
                                  value: 141,
                                  name: '旋翼类'
                              },
                              {
                                  value: 16,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                {
                    series: [{
                          data: [{
                                  value: 907,
                                  name: '总数'
                              },
                              {
                                  value: 736,
                                  name: '固定翼'
                              },
                              {
                                  value: 154,
                                  name: '旋翼类'
                              },
                              {
                                  value: 17,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                {
                    series: [{
                          data: [{
                                  value: 1010,
                                  name: '总数'
                              },
                              {
                                  value: 812,
                                  name: '固定翼'
                              },
                              {
                                  value: 178,
                                  name: '旋翼类'
                              },
                              {
                                  value: 20,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                {
                    series: [{
                          data: [{
                                  value: 1154,
                                  name: '总数'
                              },
                              {
                                  value: 893,
                                  name: '固定翼'
                              },
                              {
                                  value: 238,
                                  name: '旋翼类'
                              },
                              {
                                  value: 23,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                      series: [{
                          data: [{
                                  value: 1320,
                                  name: '总数'
                              },
                              {
                                  value: 995,
                                  name: '固定翼'
                              },
                              {
                                  value: 298,
                                  name: '旋翼类'
                              },
                              {
                                  value: 27,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                      series: [{
                          data: [
                              {
                                  value: 1654,
                                  name: '总数'
                              },
                              {
                                  value: 1239,
                                  name: '固定翼'
                              },
                              {
                                  value: 385,
                                  name: '旋翼类'
                              },
                              {
                                  value: 30,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                      series: [{
                          data: [{
                                  value: 1975,
                                  name: '总数'
                              },
                              {
                                  value: 1403,
                                  name: '固定翼'
                              },
                              {
                                  value: 538,
                                  name: '旋翼类'
                              },
                              {
                                  value: 34,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                      series: [{
                          data: [{
                                  value: 2235,
                                  name: '总数'
                              },
                              {
                                  value: 1530,
                                  name: '固定翼'
                              },
                              {
                                  value: 658,
                                  name: '旋翼类'
                              },
                              {
                                  value: 47,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                      series: [{
                          data: [
                              {
                                  value: 2595,
                                  name: '总数'
                              },
                              {
                                  value: 1692,
                                  name: '固定翼'
                              },
                              {
                                  value: 838,
                                  name: '旋翼类'
                              },
                              {
                                  value: 65,
                                  name: '其他'
                              }
                          ]
                      }]
                  },
                  {
                    series: [{
                        data: [
                            {
                                value: 2776,
                                name: '总数'
                            },
                            {
                                value: 1808,
                                name: '固定翼'
                            },
                            {
                                value: 903,
                                name: '旋翼类'
                            },
                            {
                                value: 65,
                                name: '其他'
                            }
                        ]
                    }]
                }
              ]
            },
            doubleOption: {
              title: '通航作业架次与小时',
              ydata: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐'],
              legend: ['小时', '架次'],
              seriesData: {
                leftData: [17350,4648,28429,37926,9732,17923,41570,1921,2984,2307,2634,21688,16434,22053,2156,3316,2709],
                rightData: [6352,1458,19661,46217,6319,15835,107444,1842,5365,1083,9543,8658,74352,14987,3537,5085,16622]
              },
              timeLineData: [2015, 2016, 2017, 2018, 2019],
              databeast: {
                    2015: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
                    2016: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
                    2017: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
                    2018: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    2019: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163]
              },
              databeauty: {
                    2015: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
                    2016: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    2017: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
                    2018: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
                    2019: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250]
                }
            },
            manybarOption: {
              title: '通用航空器保有量',
              legend: ['总数','固定翼','旋翼类','其它'],
              xdata: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
              series: [
                  {
                      name: '总数',
                      type: 'bar',
                      // stack: '总量',
                      tooltip: {
                          trigger: 'axis'
                      },
                      smooth: true,
                      data: [807,900,907,1010,1154,1320,1654,1975,2235,2595,2776]
                  },
                  {
                      name: '固定翼',
                      type: 'bar',
                      // stack: '总量',
                      tooltip: {
                          trigger: 'axis'
                      },
                      smooth: true,
                      data: [677,743,736,812,893,995,1239,1403,1530,1692,1808]
                  },
                  {
                      name: '旋翼类',
                      type: 'bar',
                      // stack: '总量',
                      tooltip: {
                          trigger: 'axis'
                      },
                      smooth: true,
                      data: [124,141,154,178,238,298,385,538,658,838,903]
                  },
                  {
                      name: '其它',
                      type: 'bar',
                      // stack: '总量',
                      tooltip: {
                          trigger: 'axis'
                      },
                      smooth: true,
                      data: [6,16,17,20,23,27,30,34,47,65,65]
                  }
              ]
            },
            lineBarOption: {
              title: '运营企业数量',
              legend: ['增长率','运营企业总数'],
              xdata: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
              serise: [
                {
                    name: '增长率',
                    type: 'line',
                    // smooth: true,
                    yAxisIndex: 1,
                    data: ['5','31','15','8','11','18','29','25','17','14','12']
                },
                {
                    name: '运营企业总数',
                    type: 'bar',
                    barWidth: 15,
                    smooth: true,
                    data: [68,89,103,111,123,146,189,239,281,320,360]
                }
              ]
            }
        }
    }
}
</script>
