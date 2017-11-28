<template lang="html">
    <Card>
        <Form class="step-form" ref="step" :model="step" :rules="stepRules" :label-width="100">
            <FormItem label="用户名：" prop="opinion">
                <Input :disabled="hasSubmit" v-model="step.opinion" type="text"  placeholder="请输入用户名" class="with_200"/>
            </FormItem>
            <FormItem label="密码：">
                <Input :disabled="hasSubmit" v-model="step.remark" type="password"  placeholder="请输入密码" class="with_200"/>
            </FormItem>
            <FormItem label="端口：">
                <InputNumber :max="65535" :min="1" v-model="prot"  class="with_200"></InputNumber>
            </FormItem>
            <FormItem label="是否通过：" required>
                <RadioGroup v-model="step.pass">
                    <Radio :disabled="hasSubmit" label="通过"></Radio>
                    <Radio :disabled="hasSubmit" label="不通过"></Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="登录类型：" required>
                <CheckboxGroup v-model="typeLogin">
                    <Checkbox label="HTTP" ></Checkbox>
                    <Checkbox label="HTTPS" ></Checkbox>
                    <Checkbox label="TCP"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="城市：" required>
                <Select v-model="model1" class="with_200">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </FormItem>
            <FormItem label="">
                <Button :disabled="hasSubmit"  class="width_100" type="primary">提交</Button>
                <Button :disabled="hasSubmit"  class="width_100" type="default">关闭</Button>
            </FormItem>
        </Form>
    </Card>

</template>

<script>
export default {
    data () {
        return {
            prot: 808,
            step: {
                opinion: '',
                remark: '',
                pass: '通过'
            },
            stepRules: {
                opinion: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ]
            },
            hasSubmit: false,
            typeLogin: ['HTTP'],
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: ''
        }
    }
}
</script>

<style lang="css">
</style>
