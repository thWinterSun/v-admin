<template lang="html">
    <div class="netdata">
        <!-- <iframe src="http://192.168.188.128:19999/demo.html" width="100%" height="845">
        </iframe>   
        <div style="width: 100%; text-align: center;">
        	<div data-netdata="netdata.server_cpu"
        			data-dimensions="user"
        			data-chart-library="gauge"
        			data-width="250px"
        			data-after="-60"
        			data-points="60"
        			data-units="I am alive!"
        			data-colors="#ddd"
        			></div>
        	<br/>
        	<div data-netdata="netdata.server_cpu"
        			data-dimensions="user"
        			data-chart-library="dygraph"
        			data-dygraph-theme="sparkline"
        			data-width="200px"
        			data-height="30px"
        			data-after="-60"
        			data-points="60"
        			data-colors="#ccc"
        			></div>
        	<br/>
        	<div data-netdata="system.processes"
        		data-chart-library="dygraph"
        		data-width="100%"
        		data-height="200"
        		data-after="-300"
        		data-dt-element-name="time201"
        		></div>
	    </div> -->
    </div>
</template>

<script>
// import axios from 'axios'
// let url = "/api"
// // this.$http.get(url).then(res => {
// //     console.dir(res.data.subjects)
// // },res => {
// //   console.info('调用失败');
// // });
// axios({
//     method: 'get',
//     url: url
// }).then(res => {
//     console.dir(res.data)
// })
export default {
}
</script>

<style lang="css">
    iframe{
        border:0;
        overflow-y: hidden;
    }
</style>
