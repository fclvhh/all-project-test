<template>
  <div id="app">
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import MainLayout from "./views/MainLayout";

export default {
  name: 'app',
  components: {
    MainLayout
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
