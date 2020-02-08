<template>
  <div id="app">
    <NavBar />
    <transition name="fade" v-if="$route.meta.keepAlive">
      <keep-alive>
        <router-view v-cloak></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" v-if="!$route.meta.keepAlive">
      <router-view v-cloak :key="$route.fullPath"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Alert from "@/components/Alert/Alert.vue";
import NavBar from "@/components/NavTab/index.vue";
import Footer from "@/components/Footer/index.vue";
@Component({
  components: {
    Alert,
    NavBar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
}
body {
  width: 100%;
  margin: 0;
  line-height: 1.6;
  padding: 0;
  background: #03a9f4;
  background: url(./assets/bg.png) 100% 100%;
  background-size: 100% 100%;
}
h1,
h2,
h3,
h4 {
  margin: 10px 10px;
  padding: 0;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.slide-enter {
  transform: translate(-50%, 0);
}
.slide-leave-active {
  transform: translate(100%, 0);
}
</style>
