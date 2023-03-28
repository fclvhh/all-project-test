<template>
  <div id="app">
    <MainLayout v-if="path!=='/login'"></MainLayout>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";

export default {
  name: 'app',
  components: {
    MainLayout
  },
  mounted() {
    console.log()
  },
  computed: {
    path() {
      return this.$route.path
    }
  },
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
