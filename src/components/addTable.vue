<template lang="html">
    <div class="p_15">
        <Form>
            <FormItem class="ml_10">
                <Input type="text"  placeholder="起始IP" class="width_150 mr_10" v-model="beginIp" />
                <Input type="text"  placeholder="结束IP" class="width_150 mr_10" v-model="endIp" />
                <Button type="primary" @click="addData">提交</Button>
            </FormItem>
        </Form>
    
        <Table :columns="columns" :data="tableData" height="345"></Table>
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
                    key: 'beginIp',
                    align: 'center'
                },
                {
                    title: '结束IP',
                    key: 'endIp',
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
            if (this.beginIp && this.endIp) {
                // 验证重复添加
                if (this.repeatAdd()) {
                    this.tableData.push(
                        {
                            beginIp: this.beginIp,
                            endIp: this.endIp
                        }
                    );
                    this.success('添加成功！');
                    this.beginIp = '';
                    this.endIp = '';
                }
            } else {
                this.warning('输入框不能为空');
            }
        },
        repeatAdd () {
            if (this.tableData.length !== 0) {
                for (let i = 0; i < this.tableData.length; i++) {
                    var bip = this.tableData[i].beginIp;
                    var eip = this.tableData[i].endIp;
                    console.log(bip);
                    console.log(this.beginIp);
                    if (this.beginIp === bip) {
                        this.error('输入起始IP不能重复');
                        return false;
                    } else if (this.endIp === eip) {
                        this.error('输入结束IP不能重复');
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                return true;
            }
        },
        remove (index) {
            this.tableData.splice(index, 1);
            this.success('删除成功！');
        },
        success (msg) {
            this.$Message.success(msg);
        },
        warning (msg) {
            this.$Message.warning(msg);
        },
        error (msg) {
            this.$Message.error(msg);
        }
    }
}
</script>

<style lang="css" scoped>
    .addtable{
        padding:10px 0;
    }
</style>
