<style lang="css" scoped>

    .midChart{
        height:900x;
        border: 1px solid  #495060;
        /* border-bottom: 1px solid #495060; */
        padding-left: 20px;
    }

    .mapChart{
        width:100%;
        height:680px;

    }
    .contentBg {
        background: url("../../images/MapCache3.png") no-repeat;
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
      height: 200px;
      padding: 15px;
      margin: 15px 50px;
      background: rgba(101,132,226,.1);
    }
    .topCont .border{
      height: 100px;
      margin: 50px 10px;
      background: url("../../images/divbg3.png") 0% 0% / 100% 100% no-repeat;
    }
    .topCont li{
      list-style-type:none;
      width: 50%;
      text-align: center;

    }
    .topCont .num{
      font-size: 6em;
      color: #ffeb7b;
      font-weight: bold;
    }

    .topCont .title{
      padding: 10px;
      font-size: 20px;
      color: #ddd;
    }
    .pull-left{
      float: left;
    }
    .pull-right{
      float: right;
    }
</style>
<template lang="html">
    <div class="contentBg">
        <Row>
            <Col :sm="24" :md="12" :lg="6">
                <Row>
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
                        <div class="topCont">
                          <ul>
                            <li class="pull-left title">通用航空企业数量</li>
                            <li class="pull-right title">通用航空器数量</li>
                          </ul>
                          <div class="border">
                            <ul>
                              <li class="pull-left num">
                                <countTo :startVal='companyStart' :endVal='companyEnd' :duration='5000'></countTo>
                              </li>
                              <li class="pull-right num">
                                <countTo :startVal='aircraftStart' :endVal='aircraftEnd' :duration='7000'></countTo>
                              </li>
                            </ul>
                          </div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col :lg="24">
                      <div>
                        <chinamap :mapData="chinMap"  class="mapChart" ></chinamap>
                      </div>
                    </Col>
                </Row>

            </Col>
            <Col :sm="24" :md="12" :lg="6">
                <Row>

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
                      tooltip: {
                          trigger: 'axis'
                      },
                      // areaStyle: {
                      //     normal: {}
                      // },
                      smooth: true,
                      data: [260716,272843,329873,367600,502749,517037,529800,675000,735000,764700,808000]
                  }
                ]

            },
            pieOptions: {
              title: '通航作业企业数',
              data: [
                  {value: 111, name: '空中游览', selected: true},
                  {value: 97, name: '执照培训'},
                  {value: 88, name: '航空拍摄'},
                  {value: 72, name: '空中巡查'},
                  {value: 74, name: '空中喷洒'},
                  {value: 70, name: '空中广告'},
                  {value: 61, name: '包机飞行'},
                  {value: 42, name: '航空护林'},
                  // {value: 35, name: '空中拍照'},
                  // {value: 34, name: '科学实验'},
                  // {value: 19, name: '医疗救援'},
                  {value: 11, name: '跳伞飞行'},
                  {value: 6, name: '航空表演'}
              ]
            },
            doubleOption: {
              title: '通航作业架次与小时',
              ydata: ['航空摄影', '航空探矿', '空中巡查', '石油服务', '人工降水', '航空护林', '航空喷洒', '气象探测', '直升机引航', '科学实验', '空中广告', '航空器代管', '空中游览', '包机飞行', '医疗救援','跳伞飞行','个人娱乐'],
              legend: ['小时', '架次'],
              seriesData: {
                leftData: [17350,4648,28429,37926,9732,17923,41570,1921,2984,2307,2634,21688,16434,22053,2156,3316,2709],
                rightData: [6352,1458,19661,46217,6319,15835,107444,1842,5365,1083,9543,8658,74352,14987,3537,5085,16622]
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
