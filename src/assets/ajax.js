<template lang="html">
  
</template>

<script>
import axios from 'axios'
import qs from 'qs'
// import Cookies from 'js-cookie';
// axios.create({
//     headers: {
//         "X-CSRFToken": Cookies.get('csrftoken')
//     }
// })
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) => {
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});
axios.defaults.withCredentials = true; // cookies
axios.defaults.headers = {
    "X-CSRFToken": 'BNFUc1BDiPhFtQVNf4YwXKUIje1cwHOO'
}
console.log(axios.defaults);
axios.interceptors.response.use((res) => {
    if (res.data.success) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
});
export function fetch (url, data) {
    return new Promise((resolve, reject) => {
        // axios.create({
        //     headers: {'X-CSRFToken': 'aa'}
        // });
        axios({
            method: 'post',
            url: url,
            data: JSON.stringify(data)
        }).then(res => {
            if (res.data.code === 0) {
                alert(res.data.content);
            } else {
                alert(res.data.content);
            }
        },res => {
            alert(res.data.content);
            console.log('调用失败');
        })
    })
}
</script>

<style lang="css">
</style>
