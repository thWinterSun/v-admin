<template lang="html">
    <div class="contentBg">
        <Row>
            <Col :md="12" :lg="6">
              <Row>
                <Col :lg="24">
                  <div class="cont">
                     
                  </div>
                </Col>
                <Col :lg="24">
                  <div class="cont">
                      
                  </div>
                </Col>
              </Row>

            </Col>
            <Col :md="12" :lg="12">
              <h2 class="platformTitle"></h2>
              <div class="">
                <global></global>
              </div>
            </Col>
            <Col :md="12" :lg="6">
              <Row>
                <Col :lg="24">
                  <div class="cont">
                    
                  </div>
                </Col>
              </Row>

            </Col>
        </Row>
    </div>
</template>

<script>
import 'echarts/theme/dark.js'
// Map of gl
import global from '@/components/echarts-gl/globe'
import lineChart from '@/components/Echarts/lineChart'
import bartop from '@/components/Echarts/barTop'
import piering from '@/components/Echarts/pieRing.vue'
import { city } from '@/assets/data/mapData'
export default {
    components: {
      global,
      lineChart,
      bartop,
      piering
    },
    data() {
      return {
        lineOptions: {
            title: '年度指数',
            legend: ['年度同比','年度定基'],
            xdata: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
            series: [
              {
                  name: '',
                  type: 'line',
                  tooltip: {
                      trigger: 'axis'
                  },
                  areaStyle: {
                      normal: {}
                  },
                  smooth: true,
                  data: [260716,272843,329873,367600,502749,517037,529800,675000,735000,764700,808000]
              },
              {
                  name: '',
                  type: 'line',
                  tooltip: {
                      trigger: 'axis'
                  },
                  areaStyle: {
                      normal: {}
                  },
                  smooth: true,
                  data: [250716,212843,369873,387600,202749,317037,629800,275000,435000,164700,208000]
              }

            ]
        },
        mapData: {
          city
        },
        bartopOption: {
          title: '城市排名',
          ydata: ['北京','上海','深圳','长沙','成都','昆明','武汉','贵阳','合肥', '大连'],
          seriesData: ['1.83','1.5','1.3','1.2','1.1','0.9','0.9','0.8','0.6','0.4']
        }
      }
    }
}
</script>

<style lang="css" scoped>
.contentBg {
    background: url("../../images/bg31.png") no-repeat;
    background-size: 100% 100%;
    width:100%;
    height:910px;

}
.cont{
    margin: 15px;
    background: url("../../images/divbg2.png") 0% 0% / 100% 100% no-repeat;
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
