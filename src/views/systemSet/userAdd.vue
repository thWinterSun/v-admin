<template lang="html">
    <Tabs value="add">
        <TabPane label="添加" name="add">
            <Form class="step-form p_15" ref="step" :model="step" :rules="stepRules" :label-width="100">
                <FormItem label="用户名：">
                    <Input v-model="step.name" type="text"  placeholder="请输入用户名" class="with_200"/>
                </FormItem>
                <FormItem label="描述：">
                    <Input v-model="step.desc" type="text"  placeholder="请输入用户名" class="with_200"/>
                </FormItem>
                <FormItem label="角色：">
                    <Select v-model="step.role" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="密码：">
                    <Input v-model="step.mark" type="password"  placeholder="请输入密码" class="with_200"/>
                </FormItem>
                <FormItem label="确认密码：">
                    <Input v-model="step.remark" type="password"  placeholder="请输入密码" class="with_200"/>
                </FormItem>
                <FormItem label="登录类型：" required>
                    <CheckboxGroup v-model="step.typeLogin">
                        <Checkbox label="http" ></Checkbox>
                        <Checkbox label="https" ></Checkbox>
                        <Checkbox label="telnet"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="">
                    <Button  class="width_100" type="primary" @click="sendMess">提交</Button>
                    <Button  class="width_100" type="default" @click="closePage">关闭</Button>
                </FormItem>
            </Form>
        </TabPane>
    </Tabs>
</template>

<script>
import { post } from '@/http'
export default {
    data () {
        return {
            prot: 808,
            step: {
                name: '',
                desc: '',
                mark: '',
                role: '安全管理员',
                remark: '',
                typeLogin: ['http']
            },
            stepRules: {
                opinion: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ]
            },
            isAdd: true,
            cityList: [
                {
                    value: '安全管理员',
                    label: '安全管理员'
                },
                {
                    value: '审计管理员',
                    label: '审计管理员'
                },
                {
                    value: '配置管理员',
                    label: '配置管理员'
                }
            ],
            model1: '',
            editJson: {
                "head": {
                    "module": "admin",
                    "function": "",
                    "page_index": 1,
                    "page_size": 20
                },
                "body": []
            },
            getJson: {
                "head": {
                    "module": "admin",
                    "function": "get_admin_user",
                    "page_index": 1,
                    "page_size": 20
                },
                "body": [{
                    "search": "",
                    "is_detail": true,
                    "name": ""
                }]
            }
        }
    },
    methods: {
        init () {
            console.dir(this.$route.query)
            if (this.$route.query.action === "add") {
                this.step.name = '';
                this.step.mark = '';
                this.step.role = '安全管理员';
                this.step.desc = '';
                this.step.remark = '';
                this.step.typeLogin = ['http'];
                this.isAdd = true;
            } else if (this.$route.query.action === "edit") {
                this.isAdd = false;
                this.getJson.body[0].name = this.$route.query.editName;
                let _this = this;
                post('/data/',this.getJson).then(
                    function (responseDate) {
                        console.dir(responseDate)
                        let data = responseDate.data[0].data[0];
                        _this.step.name = data.name;
                        _this.step.mark = data.password;
                        _this.step.remark = data.password;
                        _this.step.role = data.role;
                        _this.step.desc = data.desc;
                        _this.step.typeLogin = data.modes;
                    }
                )
            }
        },
        closePage () {
            this.$router.replace({ path: '/table/role/' })
        },
        sendMess () {
            let _this = this;
            this.editJson.head.function = this.isAdd ? 'add_admin_user' : 'set_admin_user'
            this.editJson.body.length = 0;
            let messObj = {
                "name": this.step.name,
                "password": this.step.mark,
                "role": this.step.role,
                "desc": this.step.desc,
                "modes": this.step.typeLogin
            }
            this.editJson.body.push(messObj);
            post('/data/',this.editJson)
            .then(function (data) {
                let respone = data.data[0];
                if (respone.head.error_code === 0) {
                    _this.$Message.success(_this.isAdd ? '添加成功' : '编辑成功');
                    _this.$router.replace({ path: '/table/role/' });
                } else {
                    _this.$Message.error(_this.isAdd ? '添加失败' : '编辑失败');
                }
                console.dir(data)
            })
        }
    },
    mounted () {
        this.init();
    }
}
</script>

<style lang="css">
</style>
