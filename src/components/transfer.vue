<template>
    <div class="p_15">
        <Form class="step-form" ref="step" :label-width="100">
            <FormItem label="名称：" prop="opinion">
                <Input v-model="rouleName" type="text"  placeholder="请输入名称" class="with_200"/>
            </FormItem>
            <FormItem label="是否通过：">
                <RadioGroup v-model="pass">
                    <Radio label="通过"></Radio>
                    <Radio label="不通过"></Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="类型选择：">
                <Transfer
                :data="data1"
                :target-keys="targetKeys1"
                :render-format="render1"
                @on-change="handleChange1"></Transfer>
            </FormItem>
        </Form> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                rouleName: '',
                pass: '通过',
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 15; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>

<style lang="less" scoped>
    .ivu-transfer{
        padding:15px
    }
    .ivu-transfer-list{
        height:350px;
    }
</style>
