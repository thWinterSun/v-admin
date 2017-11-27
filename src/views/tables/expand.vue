<template>
    <div>
        <Table width="100%" ref="selection" :border="showHeader" :columns="columns2" :data="rows" :show-header="showHeader"></Table>
    </div>
</template>
<script>
    export default {
        name: 'expand',
        props: {
            rows: Array
        },
        data () {
            return {
                showHeader: false,
                columns2: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '市区',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Poptip', {
                                    props: {
                                        confirm: true,
                                        title: `您确定要删除${params.row.name}吗?`,
                                        transfer: true
                                    },
                                    on: {
                                        'on-ok': () => {
                                            alert(33)
                                        }
                                    }
                                }, [
                                    h('Button', {
                                        props: {
                                            type: 'text',
                                            size: 'small'
                                        },
                                        style: {
                                            marginRight: '5px',
                                            color: 'red',
                                            fontSize: '22px'
                                        }
                                    }, [h('Icon',{
                                        props: {
                                            type: 'trash-a'
                                        },
                                        attrs: {
                                            size: '20px'
                                        }
                                    })])
                                ])
                            ])
                        }
                    }
                ]
            }
        }
    }
</script>
<style lang="less">
    
</style>
