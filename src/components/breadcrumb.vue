<template lang="html">
    <div class="layout-breadcrumb">
        <Breadcrumb separator=">>" replace>
            <BreadcrumbItem >{{path}}</BreadcrumbItem>
            <BreadcrumbItem>{{$route.name}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
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

<style lang="css">
    .layout-breadcrumb{
        height: 40px;
        z-index: 5;
        width: 100%;
        line-height: 40px;
        padding: 0 2%;
    }
    .ivu-tabs-bar{
        margin-bottom: 0
    }
    .ivu-breadcrumb,.ivu-breadcrumb-item-separator{
        color:#1c2438;
    }
</style>
