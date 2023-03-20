<template>
 <el-row :gutter="0"  style="margin-top: 200px">
   <el-col :span="12"  :offset="6" class="mt-5">
      <div class="card border-0">
        <div class="card-header text-center bg-white text-secondary border-0 pb-0">
          UNI-ADMIN
        </div>
        <div class="card-body">
         <el-form ref="loginForm" :model="loginForm">
           <el-form-item>
              <el-input v-model="loginForm.form" placeholder="请输入用户名"></el-input>
           </el-form-item>
           <el-form-item>
             <el-input v-model="loginForm.password" placeholder="请输入密码" show-password ></el-input>
           </el-form-item>
           <el-form-item>
                <el-button  class="bg-info w-100 text-white">登陆</el-button>
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
      }
    }
  }
}
</script>

<style scoped>

</style>
