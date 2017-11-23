<template>
    <div class="">
        <bread></bread>
        <tab-pane></tab-pane>
    </div>
</template>
<script>
import search from './filter-table.vue';
import edit from './edit-table.vue'
import bread from '../../components/breadcrumb.vue'
export default {
    name: 'tab',
    components: {
        bread,
        'search': search,
        'edit': edit,
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
