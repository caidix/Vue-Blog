<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bfcbd9"
    :unique-opened="false"
    active-text-color="#409EFF"
    mode="vertical"
    style="height:100%"
  >
    <sidebar-item v-for="item in sidebar" :key="item.path" :item="item" :base-path="item.path"></sidebar-item>
  </el-menu>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import path from "path";
import { mapGetters } from "vuex";
import { filterSideBar } from "./filter";
import sidebarItem from "./sidebarItem";
export default {
  components: {
    sidebarItem
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeIndex() {
      let { path } = this.$route;
      return path;
    }
  }
};
</script>