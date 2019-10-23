<template>
    <chart :options="option" theme="dark" style="width:100%;height:300px"> </chart>
</template>

<style scoped>


</style>

<script>
export default {
    name: 'pie',
    computed: {
    },
    data () {
        return {
            option: {
                title: {
                    text: '通航作业企业数分析',
                    x: 'center',
                    left: 5,
                    top: 10
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    top: 'middle',
                    left: 'left',
                    data: ['','','','','']
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['30%','50%'],
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                formatter: '{b}：{c}'
                            }
                        },
                        data: [
                            {value: 111, name: '空中游览', selected: true},
                            {value: 97, name: '执照培训'},
                            {value: 88, name: '航空拍摄'},
                            {value: 72, name: '空中巡查'},
                            {value: 74, name: '空中喷洒'},
                            {value: 70, name: '空中广告'},
                            {value: 61, name: '包机飞行'},
                            {value: 42, name: '航空护林'},
                            // {value: 35, name: '空中拍照'},
                            // {value: 34, name: '科学实验'},
                            // {value: 19, name: '医疗救援'},
                            {value: 11, name: '跳伞飞行'},
                            {value: 6, name: '航空表演'}
                        ]
                    }
                ]
            }
        }
    }
}
</script>