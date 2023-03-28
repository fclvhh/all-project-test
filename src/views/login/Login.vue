<template>
 <el-row :gutter="0"  style="margin-top: 200px">
   <el-col :span="12"  :offset="6" class="mt-5">
      <div class="card border-0">
        <div class="card-header text-center bg-white text-secondary border-0 pb-0">
          UNI-ADMIN
        </div>
        <div class="card-body">
         <el-form ref="loginForm" :model="loginForm" :rules="rules">
           <el-form-item  prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
           </el-form-item>
           <el-form-item  prop="password">
             <el-input v-model="loginForm.password" placeholder="请输入密码" show-password ></el-input>
           </el-form-item>
           <el-form-item>
                <el-button class="bg-info w-100 text-white" @click="submit">登陆</el-button>
           </el-form-item>
          </el-form>
        </div>
      </div>
   </el-col>
 </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm:{
        username:'',
        password:''
      },
      rules:{
        username: [
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password: [
          {required:true,message:'请输入密码',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
     submit() {
        this.$refs.loginForm.validate((valid)=>{
         if (valid) {
            this.axios.post('/admin/login',{
             username:this.loginForm.username,
             password:this.loginForm.password
           }).then((data)=>{
             // 1. 拿到token 2. token 存储到vuex 3.token持久化到localstorage 4.设置请求头
              const token = data.data.data.token

            }).catch((err)=>{
              console.log(err.response.data);
            })


           // this.$router.push({name:"MainLayout"})
         }
          return false
      })
    }
  }
}
</script>

<style scoped>

</style>
