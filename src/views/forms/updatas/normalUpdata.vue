<template lang="html">
    <Form class="p_10" :label-width="100">
        <FormItem label="配置类型：">
            <RadioGroup v-model="typeLogin">
                <Radio label="本地"></Radio>
                <Radio label="ftp"></Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="上传：" >
            <Upload action="http://jsonplaceholder.typicode.com/posts">
                <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
        </FormItem>
    </Form>
</template>

<script>
export default {
    data () {
        return {
            typeLogin: '本地'
        }
    }
}
</script>

<style lang="css">
</style>
