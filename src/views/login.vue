<template lang="html">
    <div class="login">
        <div class="login-con">
            <Card >
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName" >
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="authCode">
                            <Input v-model="form.authCode" placeholder="请输入验证码" style="width:50%;float:left">
                                <span slot="prepend">
                                    <Icon :size="14" type="help-circled"></Icon>
                                </span>
                            </Input>
                            <img class="captchaImg" src="" alt="验证码">
                            <input type="hidden" value="" v-model="form.hashkey">
                        </FormItem>
                        <FormItem>
                            <Button type="primary" long @click="submit">登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import { post } from '@/http'
import qs from 'qs'
export default {
    name: 'login',
    data () {
        return {
            form: {
                userName: '',
                password: '',
                authCode: '',
                hashkey: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                authCode: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.handleSubmit(this.loginData);
                }
            });
        },
        handleSubmit (Strdata) {
            return new Promise((resolve, reject) => {
                post('/login/',qs.stringify(Strdata))
                    .then(response => {
                        resolve(response);
                        var res = response.data;
                        this.form.userName = '';
                        this.form.password = '';
                        this.form.authCode = '';
                        if (res['errCode'] === 1) {
                            this.$Message.error('密码错误');
                        } else if (res['errCode'] === 3) {
                            this.$Message.error('验证码错误');
                        } else if (res['errCode'] === 0) {
                            this.$router.replace({ path: '/home' })
                        }
                    }, err => {
                        reject(err);
                    })
            })
        }
    },
    computed: {
        loginData () {
            return {
                username: this.form.userName,
                password: this.form.password,
                captcha_0: '32d5634269200b783c18e870bc2e3ffae4d1404e',
                captcha_1: this.form.authCode,
                from: "https" // location.protocol.split(":")[0]
            }
        }
    }
}
</script>

<style lang="less">
    .login{
        width:100%;  
        height:960px; 
    	background-size:cover;
        .login-con{
            width:400px;
            height:400px;
            position:relative;
            left:50%;
            top:50%;
            margin-left: -200px;
            margin-top: -200px;
            .ivu-card{
                box-shadow: 0 1px 6px rgba(0,0,0,.2);
            }
            .ivu-input{
                height:35px;
            }
            .ivu-btn{
                height:35px;
            }
            .captchaImg{
                height: 35px;
                width:150px;
                margin-left: 28px;
                border-radius: 3px;
            }
        }
    }
</style>
