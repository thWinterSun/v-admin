<template lang="html">
    <div class="layout-breadcrumb">
        <Breadcrumb separator=">">
            <BreadcrumbItem href="/table">table</BreadcrumbItem>
            <BreadcrumbItem href="/table/basictable">basic-table</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    data () {
        return {
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
        box-shadow: 0 1px 4px 0 #bbbec4;
        padding: 0 2%;
        margin-bottom: 5px;
    }    
</style>
