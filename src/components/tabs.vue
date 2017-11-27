<template lang="html">
    <Tabs value="name1">
        <TabPane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name">

        </TabPane>
    </Tabs>
</template>

<script>
export default {
    data () {
        return {
            tabs: [
                {
                    'name': 'name1',
                    'label': '444'
                },
                {
                    'name': 'name2',
                    'label': '标签2'
                },
                {
                    'name': 'name3',
                    'label': '标签3'
                }
            ]
        }
    }
}
</script>

<style lang="less">
    
</style>
