<template>
    <div>
        <!-- 筛选table -->
        <br>
        <Row>
            <Col span="6" offset="18" >
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
        name: 'searchTable',
        data () {
            return {
                columns2: [
                    {
                        title: '状态',
                        key: 'status',
                        render: (h,params) => {
                            const row = params.row;
                            const txt = row.status / 2 === 1 ? '连接' : '断开';
                            return h('span', txt);
                        }
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        // filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: '市区',
                        key: 'address'
                    }
                ],
                data4: this.mockTableData1(),
                searchmess: ''
            }
        },
        methods: {
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
