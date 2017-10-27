<template>
  <div id="app">
    <template>
      <RadioGroup v-model="phone">
          <Radio label="apple">
              <Icon type="social-apple"></Icon>
              <span>Apple</span>
          </Radio>
          <Radio label="android">
              <Icon type="social-android"></Icon>
              <span>Android</span>
          </Radio>
          <Radio label="windows">
              <Icon type="social-windows"></Icon>
              <span>Windows</span>
          </Radio>
      </RadioGroup>

      <Slider v-model="value1"></Slider>
      <ButtonGroup>
       <Button>取消</Button>
       <Button type="primary">确定</Button>
      </ButtonGroup>
      
  </template>

  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: 'apple',
      animal: '印度黑羚',
      value1: '25'
    }
  }
}
</script>

<style>

</style>
