<template>
  <div class="wrapper">
    <header style="height: 60px;background-color: #545c64;" class=" flex sp-bt" >
      <div class="logo text-white"  style="width: 150px;font-size: 20px; padding: 15px 22px;" >
        UNI-ADMIN
      </div>
      <nav style="width:510px;" >
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo p-0"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">商品</el-menu-item>
          <el-menu-item index="3">订单</el-menu-item>
          <el-menu-item index="4">会员</el-menu-item>
          <el-menu-item index="5">设置</el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              summer
            </template>
            <el-menu-item index="6-1">修改</el-menu-item>
            <el-menu-item index="6-2">推出</el-menu-item>
          </el-submenu>
        </el-menu>
      </nav>
    </header>
   <main class="flex">
     <aside style="width: 180px;height: calc(100vh - 60px);overflow: auto"
            >
       <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">
         <el-menu-item index="1">
             <i class="el-icon-s-home"></i>
             <span>后台首页</span>
         </el-menu-item>
         <el-menu-item index="2">
           <i class="el-icon-picture"></i>
           <span slot="title">相册管理</span>
         </el-menu-item>
         <el-menu-item index="3" >
           <i class="el-icon-s-management"></i>
           <span slot="title">商品列表</span>
         </el-menu-item>
         <el-menu-item index="4">
           <i class="el-icon-bangzhu"></i>
           <span slot="title">商品规格</span>
         </el-menu-item>
       </el-menu>
     </aside>

     <article style="height: calc(100vh - 60px);"  class="grow-1 bg-danger">
       <section>
         <router-view></router-view>
       </section>
     </article>
   </main>

  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
 .wrapper {
   min-width: 960px;
 }
 .flex {
   display: flex;
   &.sp-bt {
     justify-content: space-between;
   }
 }
 .grow-1 {
   flex-grow: 1;
 }
</style>
