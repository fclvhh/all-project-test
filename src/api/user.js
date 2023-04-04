import request from "@/util/request.js"

// 获取token
// 1. 拿到token 2. token 存储到vuex 3.token持久化到localstorage 4.设置请求头
export async function getToken(data) {
 try{
  const ret = await request.post('/admin/login',data)
  return ret
 }catch(err) {
  // const errMsg = err.response.data
  // console.log(errMsg);
  // return errMsg
 }
}


export async function signOut(data) {
  try{
    const ret = await request.post('/admin/logout',{}, data)
    return ret
  }catch(err) {
    const errMsg = err.response.data
    return errMsg
  }
}