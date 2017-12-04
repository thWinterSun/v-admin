<template lang="html">
    <Card>
        <Form class="step-form" ref="step" :label-width="100">
            <FormItem label="名称：" prop="opinion">
                <Input v-model="rouleName" type="text"  placeholder="请输入名称" class="with_200"/>
            </FormItem>
            <FormItem label="描述：">
                <Input v-model="desc" type="text"  placeholder="请输入描述" class="with_200"/>
            </FormItem>
            <FormItem label="菜单：">
                <Tree :data="data4" show-checkbox multiple></Tree>
            </FormItem>
        </Form>    
    </Card>
</template>

<script>
export default {
    data () {
        return {
            rouleName: '',
            desc: '',
            data4: [
                {
                    title: 'table',
                    expand: true,
                    selected: true,
                    children: [
                        {
                            title: 'basic-table',
                            expand: true,
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
                            expand: true,
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
                            expand: true,
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
    }
}
</script>

<style lang="css">
</style>
