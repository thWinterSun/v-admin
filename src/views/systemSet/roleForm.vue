<template lang="html">
    <Tabs value="add">
        <TabPane label="添加" name="add">
            <Form class="step-form p_15" ref="step" :label-width="100">
                <FormItem label="名称：" prop="opinion">
                    <Input v-model="rouleName" type="text"  placeholder="请输入名称" class="with_200"/>
                </FormItem>
                <FormItem label="描述：">
                    <Input v-model="desc" type="text"  placeholder="请输入描述" class="with_200"/>
                </FormItem>
                <FormItem label="菜单：">
                    <Tree :data="MenuTree" show-checkbox multiple></Tree>
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="submitRole">提交</Button>
                    <Button type="default" @click="closeForm">关闭</Button>
                </FormItem>
            </Form>
        </TabPane>
    </Tabs>          
</template>

<script>
import { post } from '../../http'
import { mapState } from 'vuex'
export default {
    data () {
        return {
            rouleName: '',
            desc: '',
            MenuTree: [
                {
                    title: 'table',
                    expand: true,
                    selected: true,
                    children: [
                        {
                            title: 'basic-table',
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'filter-table',
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'form',
                    children: [
                        {
                            title: 'basic-form',
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'update-table',
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'charts',
                    expand: true,
                    selected: true,
                    children: [
                        {
                            title: 'Echarts',
                            children: [
                                {
                                    title: 'leaf 1-1-1',
                                    disabled: true
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'highCharts',
                            children: [
                                {
                                    title: 'leaf 1-2-1',
                                    checked: true
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    computed: mapState([
        "get_role" // 从仓库store.js 中获取请求
    ]),
    created () {
        this.getListInf(this.get_role);
    },
    methods: {
        getListInf (Strdata) {
            return new Promise((resolve, reject) => {
                post('/data/',Strdata)
                    .then(response => {
                        resolve(response);
                        console.log(response.data[0].data[0]);
                        var res = response.data[0].data[0];
                        this.rouleName = res.name;
                        this.desc = res.desc;
                    }, err => {
                        reject(err);
                    })
            })
        },
        submitRole () {
            console.log(this.MenuTree)
        },
        closeForm () {
            this.$router.replace({ path: '/table/role/' })
        }
    }
}
</script>

<style lang="css">
</style>
