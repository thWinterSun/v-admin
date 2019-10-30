<template lang="html">
    <div class="contentBg">
        <Row>
            <Col :md="12" :lg="7">
                <lineChart :lineData="lineOptions"></lineChart>
            </Col>
            <Col :md="12" :lg="10">
                <chinamap :mapData="mapData" class="map"></chinamap>
            </Col>
            <Col :md="12" :lg="7">

            </Col>
        </Row>
    </div>
</template>

<script>
import 'echarts/theme/dark.js'
// Map of China
import chinamap from '@/components/Echarts/chinaMap'
import lineChart from '@/components/Echarts/lineChart'
import { city } from '@/assets/data/mapData'
export default {
    components: {
      chinamap,
      lineChart
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
        }
      }
    }
}
</script>

<style lang="css">
.contentBg {
    background: url("../../images/MapCache4.png") no-repeat;
    background-size: 100% 100%;
    width:100%;
    height:870px;
}
</style>
