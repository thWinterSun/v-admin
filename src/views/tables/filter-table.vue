<template>
    <div>
        <!-- 筛选table -->
        <br>
        <Row>
            <Col span="6" offset="18" >
                <Input v-model="searchmess" icon="ios-search" placeholder="搜索." style="width: 200px" @on-click="searchMess()">

                </Input>
            </Col>
        </Row>
        <br>
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
    export default {
        name: 'searchTable',
        data () {
            return {
                columns2: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h) => {
                            return h('div',[h('Switch','<span slot="open">开</span><span slot="close">关</span>')]);
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
                        address: '火星'
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
