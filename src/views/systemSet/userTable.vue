<template lang="html">
    <div>
        <Row class="ph_10">
            <Col span="1" offset="1">
                <Button type="primary" class="ivu-btn-cir btn-p" @click="addForm" title="添加">
                    <Icon type="plus-round"></Icon>
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Table :columns="tableTh" :data="tableBody" ref="selection"></Table>
            </Col>
        </Row>
        <Row class="mh_10">
            <div class="fr">
                <Page :total="page.total"
                :page-size="page.size" 
                :page-size-opts="page.opts" 
                placement="top" 
                show-sizer 
                @on-change="setPage"
                @on-page-size-change="setPageOpt"
                ></Page>
            </div>
        </Row>
    </div>
</template>

<script>
import { post } from '../../http'
import { mapState } from 'vuex'
export default {
    data () {
        return {
            loading: false,
            error: null,
            page: {
                total: 10,
                size: 10,
                opts: [10,20,30,40]
            },
            tableTh: [
                {
                    title: '管理员名称',
                    key: 'name'
                },
                {
                    title: '描述',
                    key: 'desc'
                },
                {
                    title: '角色',
                    key: 'role'
                },
                {
                    title: '登陆类型',
                    key: 'modes'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                'class': {
                                    'ivu-btn-cir': true
                                },
                                props: {
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.replace({ path: '/table/user/add' });
                                        console.log(params.row.name)
                                    }
                                }
                            },[h('Icon',{
                                props: {
                                    type: 'edit'
                                },
                                attrs: {
                                    title: '编辑'
                                },
                                style: {
                                    width: '12px',
                                    height: '12px'
                                }
                            })]),
                            h('Button', {
                                'class': {
                                    'ivu-btn-cir': true
                                },
                                props: {
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        console.log(params.row.name)
                                    }
                                }
                            }, [h('Icon',{
                                props: {
                                    type: 'trash-a'
                                },
                                attrs: {
                                    title: '删除'
                                },
                                style: {
                                    width: '12px',
                                    height: '12px'
                                }
                            })])
                        ]);
                    }
                }
            ],
            tableBody: []
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    computed: mapState([
        "get_admin_user" // 从仓库store.js 中获取请求
    ]),
    methods: {
        fetchData () {
            this.error = null;
            this.loading = true;
            this.getTableData(this.get_admin_user);
        },
        getTableData (Strdata) {
            return new Promise((resolve, reject) => {
                post('/data/',Strdata)
                    .then(response => {
                        resolve(response);
                        this.tableBody = response.data[0].data;  // 数据
                        this.page.total = response.data[0].head.total;  // 数据总条数
                    }, err => {
                        reject(err);
                    })
            })
        },
        addForm () {
            this.$router.replace({ path: '/table/user/add' })
        },
        setPage (page) {
            this.get_obj_service.head.page_index = page;
            this.fetchData();
        },
        setPageOpt (opt) {
            this.get_obj_service.head.page_size = opt;
            this.fetchData();
        }
    }
}
</script>

<style lang="css">
    .ivu-table{
        padding-bottom: 5px;
    }
    .ivu-btn-small{
        padding: 2px 5px;
    }
    .ivu-btn-cir{
        border-radius: 15px;
    }
    .btn-p{
        padding: 6px 10px;
    }
</style>
