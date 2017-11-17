<template lang="html">
    <div class="">
        <Row>
            <Col span="24">
                <Form >
                    <FormItem>
                        <Input type="text"  placeholder="起始IP" class="width_150 mr_10" v-model="beginIp" />
                        <Input type="text"  placeholder="结束IP" class="width_150 mr_10" v-model="endIp" />
                        <Button type="primary" @click="addData">提交</Button>
                    </FormItem>
                </Form>
            </Col>
            <Col span="24">
                <Table :columns="columns" :data="tableData" height="345"></Table>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'addTable',
    data () {
        return {
            columns: [
                {
                    title: '起始IP',
                    key: 'beginIP',
                    align: 'center'
                },
                {
                    title: '结束IP',
                    key: 'endIP',
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index);
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            beginIp: '',
            endIp: '',
            tableData: []
        }
    },
    methods: {
        addData () {
            // 缺少验证重复添加
            this.tableData.push(
                {
                    beginIP: this.beginIp,
                    endIP: this.endIp
                }
            );
            this.beginIp = '';
            this.endIp = '';
        },
        remove (index) {
            this.tableData.splice(index, 1);
        }
    }
}
</script>

<style lang="css">
</style>
