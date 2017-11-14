<template lang="html">
    <div class="">
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <Card>
                    <p slot="title">基本表单</p>
                    <Form class="step-form" ref="step" :model="step" :rules="stepRules" :label-width="100">
                        <FormItem label="用户名：" prop="opinion">
                            <Input :disabled="hasSubmit" v-model="step.opinion" type="text"  placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem label="密码：">
                            <Input :disabled="hasSubmit" v-model="step.remark" type="password"  placeholder="请输入密码" />
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
                            <Select v-model="model1" style="width:200px">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="">
                            <Button :disabled="hasSubmit"  style="width:100px;" type="primary">提交</Button>
                        </FormItem>
                    </Form>
                </Card>
            </Col>
            <Col span="12">
                <Card>
                    <p slot="title"> title</p>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import bread from '../../components/breadcrumb'
export default {
    data () {
        return {
            value: '',
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
    },
    components: {
        bread
    }
}
</script>

<style lang="css">
</style>
