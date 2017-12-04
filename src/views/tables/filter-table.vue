<template>
    <div>
        <!-- 筛选table -->
        <Row>
            <Col span="24">
                <bread></bread>
            </Col>
        </Row>
        <Row>
            <Col span="6" offset="18" >
                <Input v-model="searchmess" icon="ios-search" placeholder="搜索." @on-click="searchMess()" class="with_200 mh_10"></Input>
            </Col>
        </Row>
        <Row>
            <Table width="100%" ref="selection" :columns="columns2" :data="data4"></Table>
        </Row>
        <Row class="mh_10">
            <Page :total="100" :current="1" @on-change="changePage" show-sizer class="fr"></Page>
        </Row>
    </div>
</template>
<script>
    import bread from '../../components/breadcrumb'
    export default {
        name: 'searchTable',
        components: {
            bread
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
                        render: (h) => {
                            return h('i-switch',{
                                attrs: {
                                },
                                on: {
                                    'on-change': function (evn) {
                                        // alert(evn)
                                    }
                                }
                            },[
                                h('span',{
                                    attrs: {
                                        slot: 'open'
                                    }
                                },'开启'),
                                h('span',{
                                    attrs: {
                                        slot: 'close'
                                    }
                                },'关闭')
                            ]);
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
                        title: '消息',
                        key: 'mess',
                        render: (h, params) => {
                            return ('div',{
                                on: {
                                    click: function () {
                                        alert(22)
                                    }
                                }
                            },[
                                h('Badge',{
                                    attrs: {
                                        count: 127,
                                        className: 'demo-badge'
                                    }
                                },[
                                    h('Icon',{
                                        attrs: {
                                            type: 'ios-pricetags',
                                            size: 24
                                        }
                                    })
                                ])
                            ])
                        }
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
                                            color: '#A03434',
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
<style lang="less" scoped>
    .demo-badge{
        position: relative;
        top: -8px;
        left: -5px;
    }
</style>
