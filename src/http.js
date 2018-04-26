/*
 * http配置
 */
import axios from 'axios'
import Cookies from 'js-cookie'
// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://' + window.location.host;
axios.defaults.baseURL = '/api';
// axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
}
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (Cookies.get('csrftoken')) {
            config.headers['X-CSRFToken'] = Cookies.get('csrftoken');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // console.dir(response);
        return response;
    },

    error => {
        if (error.response) {
            console.log(error.response)
        }
        return Promise.reject(error)
    });

export default axios;
/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}
