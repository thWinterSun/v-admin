<template lang="html">
    <chart :options="option" theme="dark" style="width:100%;height:500px"> </chart>
</template>

<script>
export default {
    name: 'state',
    data () {
        return {
            option: {
                title: {
                    text: "关系图",
                    top: 10,
                    left: 20
                },
                toolbox: {
                    show: true,
                    feature: {
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                animationDuration: 3000,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    name: '关系图',
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 850
                    },
                    data: [{
                        "name": '1.11.1.1',
                        "symbolSize": 20,
                        "draggable": "true",
                        "category": '1.11.1.1',
                        "value": 10
                    },
                    {
                        "name": '192.168.13.5',
                        "symbolSize": 20,
                        "draggable": "true",
                        "category": '192.168.13.5',
                        "value": 20
                    },
                    {
                        "name": '192.168.13.6',
                        "symbolSize": 50,
                        "draggable": "true",
                        "category": '192.168.13.6',
                        "value": 36
                    },
                    {
                        "name": '192.168.13.7',
                        "symbolSize": 20,
                        "draggable": "false",
                        "category": '192.168.13.7',
                        "value": 7
                    },
                    {
                        "name": '192.168.13.45',
                        "symbolSize": 20,
                        "draggable": "true",
                        "category": '192.168.13.45',
                        "value": 23
                    },
                    {
                        "name": '192.168.13.26',
                        "symbolSize": 20,
                        "draggable": "true",
                        "category": '192.168.13.26',
                        "value": 48
                    }],
                    links: [{
                        'source': '1.11.1.1',
                        'target': '192.168.13.5'
                    },
                    {
                        'source': '1.11.1.1',
                        'target': '192.168.13.6'
                    },
                    {
                        'source': '1.11.1.1',
                        'target': '192.168.13.45'
                    },
                    {
                        'source': '1.11.1.1',
                        'target': '192.168.13.26'
                    },
                    {
                        'source': '1.11.1.1',
                        'target': '192.168.13.7'
                    }],
                    categories: [
                        {
                            'name': '192.168.13.6'
                        },
                        {
                            'name': '192.168.13.5'
                        },
                        {
                            'name': '192.168.13.26'
                        },
                        {
                            'name': '1.11.1.1'
                        }
                    ],
                    focusNodeAdjacency: true,
                    roam: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0,
                            type: "solid"
                        }
                    }
                }]
            }
        }
    }
}
</script>

<style lang="css">
</style>
