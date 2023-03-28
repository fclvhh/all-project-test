import request from "@/util/request.js"

// 获取token
// 1. 拿到token 2. token 存储到vuex 3.token持久化到localstorage 4.设置请求头
export async function getToken(data) {
  const ret = await request.post('/admin/login',data)
  const token = ret.data.data.token
  console.log(token);
  
  return token
}

