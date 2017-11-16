<template lang="html">
    <div class="">
        <Form :label-width="100">
            <FormItem label="日期选择：" prop="opinion">
                <DatePicker type="date" placeholder="Select date" class="with_200" v-model="date"></DatePicker>
            </FormItem>
        </Form>
        <Form :label-width="100">
            <FormItem label="日期范围：" required>
                <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" class="with_200" v-model="daterange"></DatePicker>
            </FormItem>
        </Form>
        <Form :label-width="100">
            <FormItem label="日期和时间：">
                <DatePicker type="datetime" placeholder="Select date and time" class="with_200"></DatePicker>
            </FormItem>
        </Form>
        <Form :label-width="100">
            <FormItem label="时间选择：">
                 <TimePicker type="time" placeholder="Select time" class="with_200"></TimePicker>
            </FormItem>
        </Form>
        <Form :label-width="100">
            <FormItem label="时间范围：">
                <TimePicker confirm type="timerange" placement="bottom-end" placeholder="Select time" class="with_200"></TimePicker>
            </FormItem>
        </Form>
        <Form :label-width="100">
            <FormItem label="时间格式：">
                <TimePicker format="HH点mm分ss秒" placeholder="Select time" class="with_200"></TimePicker>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            date: '',
            daterange: ''
        }
    }
}
</script>

<style lang="css">
</style>
