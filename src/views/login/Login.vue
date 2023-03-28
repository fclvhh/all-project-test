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
import { getToken } from "../../api/user"
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
           getToken(this.loginForm)
         }
          return false
      })
    }
  }
}
</script>

<style scoped>

</style>
