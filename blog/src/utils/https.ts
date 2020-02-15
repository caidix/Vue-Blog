import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Vue from 'vue'
export interface ResponseData {
  code: Number;
  data?: any;
  message: string;
}

let https: AxiosInstance | any;

https = axios.create({
  baseURL: process.env.VUE_BLOG_API_URL || '/api/blog',
  // baseURL: 'http://localhost:3000/api/blog',
  timeout: 5000,
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
})


https.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
)

https.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data: ResponseData = res.data
      if (data.code === 0) {
        return data.data;
      } else {
        window.alert(data.message)
      }
    } else {
      window.alert('网络错误')
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error: any) => Promise.reject(error)
);

Vue.prototype.$https = https;