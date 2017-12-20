
/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://192.168.152.128'
axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'X-CSRFToken': 'MoTbkJWyGfKKc41GdNd2vOzdqPH00peN',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
};
// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.dir(response);
        return response;
    },
    error => {
        if (error.response) {
            console.log(error.response)
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error)
    });

export default axios;
