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
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input v-model="form.password" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <router-link to="/home">
                                <Button type="primary" long>登录</Button>
                            </router-link>
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
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    }
}
</script>

<style lang="less">
    .login{
        width:100%;  
        height:960px; 
        // background: #e7ebee;
    	background-size:cover;
        .login-con{
            width:400px;
            height:400px;
            position:relative;
            left:50%;
            top:50%;
            margin-left: -200px;
            margin-top: -200px;
        }
    }
</style>
