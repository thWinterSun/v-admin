<template lang="html">
    <div class="">
        <Row>
            <Col span="24">
                <Form >
                    <FormItem>
                        <Input type="text"  placeholder="起始IP" class="width_150 mr_10" v-model="beginIp"/>
                        <Input type="text"  placeholder="结束IP" class="width_150 mr_10" v-model="endIp"/>
                        <Button type="primary" @click="addData">提交</Button>
                    </FormItem>
                </Form>
            </Col>
            <Col span="24">
                <Table :columns="columns" :data="tableData"></Table>
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
                    key: 'beginIP'
                },
                {
                    title: '结束IP',
                    key: 'endIP'
                },
                {
                    title: '操作',
                    key: 'action'
                }
            ],
            beginIp: '',
            endIp: '',
            tableData: [
                {
                    beginIP: '3.3.3.3',
                    endIP: '6.6.6.6',
                    action: ' 删除'
                }
            ]
        }
    },
    methods: {
        addData: () => {
            // this.data.push(
            //     {
            //         beginIP: '3.3.3.3',
            //         endIP: '6.6.6.6',
            //         action: ' 删除'
            //     }
            // )
            console.dir(this);
        }
    }
}
</script>

<style lang="css">
</style>
