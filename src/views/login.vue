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
                            <Input v-model="form.authCode" placeholder="请输入验证码" style="width:50%">
                                <span slot="prepend">
                                    <Icon :size="14" type="help-circled"></Icon>
                                </span>
                            </Input>
                            <!-- <span>
                                <img src="../images/code.png" alt="验证码">
                            </span> -->
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
export default {
    name: 'login',
    data () {
        return {
            form: {
                userName: '',
                password: '',
                authCode: ''
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
            if (this.form.userName === 'admin') {
                if (this.form.password === 'admin') {
                    this.$router.replace('home')
                } else {
                    this.$Message.error('密码错误');
                }
            } else {
                this.$Message.error('用户名错误');
            }
        }
    },
    computed: {
        loginData () {
            return {
                username: this.form.userName,
                password: this.form.password,
                captcha_0: 'bbb',
                captcha_1: 'aa'
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
        }
    }
</style>
