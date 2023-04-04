<template>
  <div id="app">
    <MainLayout v-if="path!=='/login'"></MainLayout>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    MainLayout
  },
  mounted() {
    this.getUserLogin()
  },
  computed: {
    path() {
      return this.$route.path
    }
  },
  methods:{
    ...mapMutations('user',['getUserLogin'])
  }
}
</script>

<style>
*::-webkit-scrollbar {
  width: 10px;

}

*::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;

}

* {
  scrollbar-width: 10px;
  scrollbar-base-color: green;
  scrollbar-track-color: red;
  scrollbar-arrow-color: blue;
}

</style>
