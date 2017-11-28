<template>
    <div>
        <!-- 基础的增删改查 -->
        <br>
        <Row>
            <Col span="2" offset="1">
                <Button type="primary">
                  <Icon type="plus-round"></Icon>
                   添加
               </Button>
            </Col>
            <Col span="2" >
                <Button type="primary" @click="deleteSelect">
                  <Icon type="trash-a"></Icon>
                   删除
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
        <Row>
            <Modal :width="200" v-show="showMess">
                {{mess}}
            </Modal>
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
                showMess: false,
                mess: '',
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
                            const row = params.row;
                            let s = '';
                            if (row.status / 2 === 1) {
                                s = h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#3498db',
                                        fontSize: '20px'
                                    },
                                    on: {
                                        click: function () {
                                            alert(333)
                                        }
                                    }
                                }, [h('Icon',{
                                    props: {
                                        type: 'flash-off'
                                    },
                                    attrs: {
                                        size: '20px'
                                    }
                                })])
                            }
                            return h('div', [
                                h('Poptip', {
                                    props: {
                                        confirm: true,
                                        title: `您确定要删除 ${params.row.name} 吗?`,
                                        transfer: true
                                    },
                                    on: {
                                        'on-ok': () => {
                                            this.$Message.success('删除成功')
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
                                            size: '20px',
                                            title: '删除'
                                        }
                                    })])

                                ]),
                                h('Tooltip',{
                                    props: {
                                        placement: 'bottom',
                                        content: '编辑'
                                    }
                                },[
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
                                ]),s
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
                let selectArr = this.$refs.selection.getSelection();
                this.$Modal.confirm({
                    title: '确认提示',
                    content: selectArr.length === 0 ? '请选择删除项！' : '确认删除选中项？',
                    loading: selectArr.length !== 0,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            selectArr.length !== 0 && this.$Message.success('删除成功');
                        }, 2000);
                    }
                });
                console.dir(this.$refs.selection.getSelection());
                console.dir(this.$Message)
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
