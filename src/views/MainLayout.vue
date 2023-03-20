<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped lang="scss">
 .container {
   min-width: 960px;
 }
</style>
