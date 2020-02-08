<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Layout from '@/layout'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
