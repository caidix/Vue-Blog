import axios from 'axios';
import { Message } from 'element-ui'
import store from '@/store'
import Vue from 'vue';

const http = axios.create({
  baseURL: process.env.VUE_ADMIN_API_URL|| '/api',
  timeout: 5000,
  withCredentials: true,
  header:{ 'Access-Control-Allow-Origin':'*' }
});
http.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = store.getters.token;
  }
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
})
http.interceptors.response.use(res => {
  // 根据业务修改
  return res;
}, error => {
  console.log('err' + error)// for debug
  Message({
    message: error.message || '未知错误',
    type: 'error',
    duration: 2000
  })
  return Promise.reject(error)
})
export default http;
Vue.prototype.$http = http;