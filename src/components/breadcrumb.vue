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
        padding: 10px 15px;
    }    
</style>
