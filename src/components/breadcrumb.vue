<template lang="html">
    <Breadcrumb separator="/" replace  class="layout-breadcrumb">
        <BreadcrumbItem >{{path}}</BreadcrumbItem>
        <BreadcrumbItem>{{$route.name}}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
export default {
    name: 'breadcrumb',
    data () {
        return {
            parentPath: '',
            childPath: ''
        }
    },
    computed: {
        path () {
            return this.$route.path.split('/')[1]
        }
    }
}
</script>

<style lang="css" scoped>
    .layout-breadcrumb{
        height: 40px;
        z-index: 5;
        width: 100%;
        line-height: 40px;
        padding: 0 2%;
        /*border-bottom: 1px solid #DDDEE1;*/
    }
    .ivu-tabs-bar{
        margin-bottom: 0
    }
</style>
