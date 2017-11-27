<template>
    <div>
        <!-- 折叠table -->
        <Row>
            <Table width="100%" ref="selection" :columns="columns2" :data="data4"></Table>
        </Row>
        <Row>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage" show-sizer></Page>
                </div>
            </div>
        </Row>
    </div>
</template>
<script>
    import expandRow from './expand.vue'
    export default {
        name: 'expandTable',
        components: {
            expandRow
        },
        data () {
            return {
                columns2: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    rows: params.row.children
                                }
                            })
                        }
                    },
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
                                            alert(33);
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
                ],
                data4: this.mockTableData1(),
                searchmess: ''
            }
        },
        methods: {
            deleteSelect () {
                console.dir(this.$refs.selection.getSelection())
            },
            mockTableData1 () {
                let data = []
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'name' + Math.floor(Math.random() * 100 + 1),
                        age: Math.floor(Math.random() * 3 + 1),
                        address: '火星',
                        children: [
                            {
                                name: 'name1',
                                age: 23,
                                address: '拉马克'
                            }
                        ]
                    })
                }
                return data
            },
            changePage (evt) {
                console.dir(this)
                this.tableData1 = this.mockTableData1()
                alert(evt)
            },
            searchMess () {
                alert(this.searchmess)
            }
        }
    }
</script>
<style lang="less">
    
</style>
