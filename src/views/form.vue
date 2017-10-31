<template lang="html">
  <div class="cont">
    <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
    
    <Select v-model="model1" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        }
      ]
    }
  }
}
</script>

<style lang="css">
	
</style>