<template>
  <div class="wrapper">
    <header style="height: 60px;background-color: #545c64;" class=" flex sp-bt">
      <div class="logo text-white" style="width: 150px;font-size: 20px; padding: 15px 22px;">
        UNI-ADMIN
      </div>
      <nav style="width:510px;">
        <el-menu
            :default-active="navData.active"
            class="el-menu-demo p-0"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item v-for="(item,index) in navData.list" :key="index" :index="(index+1)|numToString">{{ item.bar }}
          </el-menu-item>

          <el-submenu index="6">
            <template slot="title">
              <el-avatar size="small"
                         src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              summer
            </template>
            <el-menu-item index="6-1">修改</el-menu-item>
            <el-menu-item index="6-2">推出</el-menu-item>
          </el-submenu>
        </el-menu>
      </nav>
    </header>
    <main class="flex">

      <aside style="width: 180px;height: calc(100vh - 60px);overflow: auto;"
             class="border-0"
      >
        <el-menu
            @select="handleAsideSelect"
            :default-active="navData.list[cIndex].children.active"
            class="el-menu-vertical-demo "
            active-text-color="#ffd04b"
            style="height: calc(100vh - 60px)"
        >
          <el-menu-item :index="(index+1)|numToString" v-for="(item,index) in navData.list[cIndex].children.list"
                        :key="index">
            <i :class="item.icon"></i>
            <span>{{ item.asideBar }}</span>
          </el-menu-item>

        </el-menu>
      </aside>
      <article style="height: calc(100vh - 60px);overflow: auto;" class="grow-1 article bg-light">
        <!--面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 15px 5px; position: fixed; z-index: 100;"
                       class="bg-white w-100"
        >

          <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="index" :to="item.path">
            {{ item.meta.navTitle }}
          </el-breadcrumb-item>

        </el-breadcrumb>

        <section class="mt-5">

          <none>
            <router-view></router-view>
          </none>
          <el-backtop target=".article" :bottom="100">
            <div
                style="
                    height: 100%;
                    width: 100%;
                    background-color: #f2f5f6;
                    box-shadow: 0 0 6px rgba(0,0,0, .12);
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  "
            >
              UP
            </div>
          </el-backtop>
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
      asideListIndex: '1',
      crumbCache: [],
      navData: {
        active: '1',
        list: [
          {
            bar: '首页',
            children: {
              active: '1',
              list: [
                {
                  asideBar: '后台首页',
                  icon: 'el-icon-s-home',
                  name: "HomeIndex"
                },
                {
                  asideBar: '相册管理',
                  icon: 'el-icon-picture',

                },
                {
                  asideBar: '商品列表',
                  icon: 'el-icon-collection',
                  name: "GoodsList"
                },
                {
                  asideBar: '商品规格',
                  icon: 'el-icon-help',
                }
              ]
            }
          },
          {
            bar: '商品',
            children: {
              active: '2',
              list: []
            }
          },
          {
            bar: '订单',
            children: {
              active: '3',
              list: []
            }
          },
          {
            bar: '会员',
            children: {
              active: '4',
              list: []
            }
          },
          {
            bar: '设置',
            children: {
              active: '5',
              list: []
            }
          },
        ]
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.asideListIndex = key
    },
    handleAsideSelect(a, b) {
      let name = this.navData.list[this.asideListIndex - 1].children.list[a - 1].name;
      this.$router.push({name: `${name}`})
    },
  },
  computed: {
    cIndex() {
      return this.asideListIndex - 1
    },
    breadCrumbList() {
      console.log(this.$route.matched)
      return this.$route.matched
    }
  },
  filters: {
    numToString: function (value) {
      return value.toString();
    }
  },
  watch: {
    $route(to) {
      // this.$router.push({name:`${to.name}`})
      console.log(this.$route.matched)
    }
  },


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

.father {
  position: relative;

  & > .son {
    position: absolute;

    &.p-vc {
      top: 50%;
      transform: translateY(-50%);
    }

    &.p-c {
      left: 50%;
      transform: translateX(-50%);
    }

    &.p-center {
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      transform: translateY(-50%);
    }
  }

}
</style>
