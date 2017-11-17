<template>
    <tab-pane :tabs="tabs"></tab-pane>
</template>
<script>
export default {
    name: 'tab',
    props: ['tabs'],
    components: {
        'tabPane': {
            functional: true,
            render: function (h) {
                let childrenArr = [];
                let tabs = [
                    {
                        name: '可搜索table',
                        tp: 'search'
                    },
                    {
                        name: '可编辑table',
                        tp: 'edit'
                    }
                ];
                for (let i = 0; i < tabs.length; i++) {
                    childrenArr.push(h('TabPane',{
                        attrs: {
                            label: tabs[i].name,
                            icon: 'social-apple'
                        }
                    },[
                        h(tabs[i].tp)
                    ]))
                }
                return h('Tabs',[childrenArr])
            }
        }
    }
}
</script>

<style lang="css">
</style>
