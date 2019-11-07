import echarts from 'echarts'
export default {
  mounted () {
    // let vueThis = this
    this.__resizeHanlder = () => {
      echarts.getInstanceByDom(this.$el).resize()
    }
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy () {
    window.addEventListener('resize', this.__resizeHanlder)
  }

}
