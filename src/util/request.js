import axios from "axios"
import { Message } from 'element-ui'


// 添加请求拦截器  添加身份认知 token
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = sessionStorage.getItem('token')
  if(token && config.token === true) {
    config.headers['token'] = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});



// 添加响应拦截器
// 客户端错误的统一提示  全局的提示交互
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('success');
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error.response.data);
  if (error.response.data) {
     Message({
      message: error.response.data.msg,
      type: "error",
    });
  }
});

export default axios