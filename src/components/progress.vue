<template lang="html">
  <div class="">
        <Progress :percent="45" status="active"></Progress>
        <Progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
        </Progress>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
