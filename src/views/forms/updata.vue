<template lang="html">
    <div class="">
        <Card>
            <Upload action="jsonplaceholder.typicode.com/posts">
                <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            url: './'
        }
    },
    methods: {
    }
}
</script>

<style lang="css">
</style>
