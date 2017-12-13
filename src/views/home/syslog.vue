<template lang="html">
    <Table :columns="columns1" :data="data1" :show-header="false" :disabled-hover="true"></Table>
</template>

<script>
export default {
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                    width: '200'
                },
                {
                    title: 'Address',
                    key: 'address',
                    align: 'left'
                }
            ],
            data1: [
                {
                    name: '系统功能',
                    address: '永久有效'
                },
                {
                    name: '应用控制',
                    address: '未开启'
                },
                {
                    name: '入侵防护',
                    address: '未开启'
                },
                {
                    name: '病毒防护',
                    address: '已开启'
                }
            ]
        }
    }
}
</script>

<style lang="css">
</style>
