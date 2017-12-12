<template lang="html">
    <div id="chart" style="width:500px;height:500px"></div>
</template>

<script>
import Chart from "frappe-charts/dist/frappe-charts.min.esm"
let data = {
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
};

let chart = new Chart({
    parent: "#chart", // or a DOM element
    title: "My Awesome Chart",
    data: data,
    type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', 'violet', 'blue'],
// hex-codes or these preset colors;
// defaults (in order):
// ['light-blue', 'blue', 'violet', 'red',
// 'orange', 'yellow', 'green', 'light-green',
// 'purple', 'magenta', 'grey', 'dark-grey']
    format_tooltip_x: d => (d + '').toUpperCase(),
    format_tooltip_y: d => d + ' pts'
})
</script>

<style lang="css">
</style>
