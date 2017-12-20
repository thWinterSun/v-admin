<template lang="html">
    <div class="">
        <div id="chart" style="width:500px;height:500px"></div>
        <Button type="primary" @click="charts">
            获取
        </Button>
    </div>
</template>

<script>
import Chart from "frappe-charts/dist/frappe-charts.min.esm"
export default {
    data () {
        return {
            frappeData: {
                labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm","12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],
                datasets: [
                    {
                        title: "Some Data",
                        values: [25, 40, 30, 35, 8, 52, 17, -4]
                    },
                    {
                        title: "Another Set",
                        values: [25, 50, -10, 15, 18, 32, 27, 14]
                    },
                    {
                        title: "Yet Another",
                        values: [15, 20, -3, -15, 58, 12, -17, 37]
                    }
                ]
            }
        }
    },
    method: {
        charts () {
            new Chart({
                parent: "#chart",
                title: "My Awesome Chart",
                data: this.frappeData,
                type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
                height: 250,
                colors: ['#7cd6fd', 'violet', 'blue'],
                format_tooltip_x: d => (d + '').toUpperCase(),
                format_tooltip_y: d => d + ' pts'
            })
        }
    }
}
</script>

<style lang="css">
</style>
