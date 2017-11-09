<template>
    <div class="">
        <Button type="primary" @click="deleteSelect">删除选中</Button>
        <TableComponent :columns-list="columns2" :table-data="data4" :function-type="functionType"></TableComponent>
    </div>
</template>
<script>
    import TableComponent from './test.vue'
    export default {
        name: 'multiPageTable',
        components: {
            TableComponent
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
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: function (ev) {
                                            console.dir(ev)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: this.onMethon
                                }, '编辑')
                            ])
                        }
                    }
                ],
                data4: this.mockTableData1(),
                functionType: 'add_save'
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
                this.tableData1 = this.mockTableData1()
                alert(evt)
            },
            onMethon: (vm, h, currentRow, index) => {

            }
        }
    }
</script>
