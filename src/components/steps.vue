<template lang="html">
    <div >
        <!-- <p>当前正在进行第 {{ current + 1 }} 步</p> -->
        <Steps :current="current">
            <Step title="步骤1"></Step>
            <Step title="步骤2"></Step>
            <Step title="步骤3"></Step>
            <Step title="步骤4"></Step>
        </Steps>
        <div class="stepContent">
            <Card v-show="current==0">
                <p slot="title"> 步骤一</p>
                <basicInput></basicInput>
            </Card>
            <Card v-show="current==1">
                <p slot="title"> 步骤二</p>
                <upload></upload>
            </Card>
            <Card v-show="current==2">
                <p slot="title"> 步骤三</p>
            </Card>
            <Card v-show="current==3">
                <p slot="title"> 步骤四</p>
            </Card>
            <Button type="primary" @click="next">Next step</Button>
            <Button type="primary" @click="previous">previous step</Button>
        </div>
    </div>
</template>

<script>
import basicInput from './basic-input'
import upload from './upload.vue'
export default {
    name: 'steps',
    data () {
        return {
            current: 0
        }
    },
    methods: {
        next () {
            if (this.current === 3) {
                this.current = 3;
            } else {
                this.current += 1;
            }
        },
        previous () {
            if (this.current === 0) {
                this.current = 0;
            } else {
                this.current -= 1;
            }
        }
    },
    components: {
        basicInput,
        upload
    }
}
</script>

<style lang="css">
    .stepContent{
        width:450px;
        height:400px;
        margin:15px auto;
    }
</style>
