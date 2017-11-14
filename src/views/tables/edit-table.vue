<template>
    <div>
        <!-- 基础的增删改查 -->
        <br>
        <Row>
            <Col span="4" offset="1">
                <Button type="primary">
                  <Icon type="plus-round"></Icon>
                   添加
               </Button>
            </Col>
            <Col span="6" offset="13" >
                <Input v-model="searchmess" icon="ios-search" placeholder="搜索." style="width: 200px" @on-click="searchMess()"></Input>
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
        name: 'editTable',
        props: {
            'columnsList': Array,
            'tableData': Array
        },
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
                        render: (h,params) => {
                            const row = params.row;
                            const color = row.status / 2 === 1 ? 'green' : 'red';
                            const txt = row.status / 2 === 1 ? '连接' : '断开';
                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, txt);
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
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        color: 'red',
                                        fontSize: '22px'
                                    },
                                    on: {
                                        click: function (ev) {
                                            alert(params.row.name)
                                        }
                                    }
                                }, [h('Icon',{
                                    props: {
                                        type: 'trash-a',
                                        size: '30px'
                                    },
                                    attrs: {
                                        size: '20px'
                                    }
                                })]),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#3498db',
                                        fontSize: '20px'
                                    },
                                    on: this.onMethon
                                }, [h('Icon',{
                                    props: {
                                        type: 'compose'
                                    },
                                    attrs: {
                                        size: '20px'
                                    }
                                })])
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
                        status: Math.floor(Math.random() * 6 + 1),
                        age: Math.floor(Math.random() * 3 + 1),
                        address: '火星'
                    })
                }
                return data
            },
            changePage (evt) {
                this.tableData1 = this.mockTableData1()
                alert(evt)
            },
            searchMess () {
                alert(this.searchmess)
            }
        }
    }
</script>
