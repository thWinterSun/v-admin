<template lang="html">
    <Tabs value="add">
        <TabPane label="添加" name="add">
            <Form class="step-form p_15" ref="step" :model="step" :rules="stepRules" :label-width="100">
                <FormItem label="">
                    <CheckboxGroup v-model="step.log">
                        <Checkbox label="启动" ></Checkbox>
                        <Checkbox label="日志" ></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="名称：" prop="intrusionName">
                    <Row>
                        <Col span="6">
                            <Input :disabled="hasSubmit" v-model="step.intrusionName" type="text"  placeholder="请输入1-63个字符"/>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="描述：">
                    <Row>
                        <Col span="6">
                            <Input :disabled="hasSubmit" v-model="step.intrusionDesc" type="text"  placeholder="请输入1-63个字符"/>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="时间：">
                    <Row>
                        <Col span="6">
                            <Select v-model="step.times" >
                                <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="入接口：">
                    <Row>
                        <Col span="6">
                            <Select v-model="step.in_interface" >
                                <Option v-for="item in in_interfaceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="出接口：">
                    <Row>
                        <Col span="6">
                            <Select v-model="step.out_interface" >
                                <Option v-for="item in in_interfaceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="">
                    <Button :disabled="hasSubmit"  type="primary" @click="addIpsRule">提交</Button>
                    <Button :disabled="hasSubmit"  type="default" @click="closeForm">关闭</Button>
                </FormItem>
            </Form>
        </TabPane>
    </Tabs>
</template>

<script>
import { post } from '../../../http'
// import { mapState } from 'vuex'
export default {
    data () {
        return {
            step: {
                intrusionName: '',
                intrusionDesc: '',
                log: [],
                times: 'allday',
                in_interface: 'any',
                out_interface: 'any'
            },
            timeList: [
                {
                    value: 'allday',
                    label: 'allday'
                },
                {
                    value: 'morning',
                    label: 'morning'
                },
                {
                    value: 'afternoon',
                    label: 'afternoon'
                }
            ],
            in_interfaceList: [],
            stepRules: {
                intrusionName: [
                    { required: true, message: '请填写名称', trigger: 'blur' }
                ]
            },
            hasSubmit: false
        }
    },
    created () {
        this.getListInf(this.list_inf);
    },
    computed: {
        adIpsRule () {
            return {
                "head": {
                    "module": "security",
                    "function": "add_ips_rule",
                    "page_index": 1,
                    "page_size": 20
                },
                "body": [{
                    "name": this.intrusionName,
                    "desc": this.intrusionDesc,
                    "log": this.log,
                    "src_ip": 'this.sAddr',
                    "dst_ip": 'valObj.dAddr',
                    "out_inf": this.out_interface,
                    "in_inf": this.in_interface,
                    "service": "any",
                    "status": 'valObj.status',
                    "event_group": 'valObj.eventGroups',
                    "timer": this.times
                }]
            }
        }
        // ...mapState({
        //     "list_inf"
        // })
    },
    methods: {
        getListInf (Strdata) {
            return new Promise((resolve, reject) => {
                post('/data/',Strdata)
                    .then(response => {
                        resolve(response);
                        for (let i in response.data[0].data) {
                            this.in_interfaceList.push({
                                value: response.data[0].data[i].name,
                                label: response.data[0].data[i].name
                            })
                            console.log(response.data[0].data[i].name);
                        }
                    }, err => {
                        reject(err);
                    })
            })
        },
        addIpsRule () {
            return new Promise((resolve, reject) => {
                post('/data/',this.adIpsRule)
                    .then(response => {
                        resolve(response);
                        console.log(response.data[0]);
                    }, err => {
                        reject(err);
                    })
            })
        },
        closeForm () {
            this.$router.replace({ path: '/table/edittable' })
        }
    }
}
</script>

<style lang="css">
    .help-block{
        color: #57a3f3;
        font-size: 14px
    }
</style>
