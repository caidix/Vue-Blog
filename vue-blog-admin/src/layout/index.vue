<template>
  <el-container style="height: 100vh;">
    <el-aside width="210px">
      <Container />
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px;padding: 0;background:#fff">
        <Breadcrumb />
      </el-header>

      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view :key="$route.path" />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>


<style scoped lang="scss">
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
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
export default {
  data() {},
  components: {
    Container,
    Breadcrumb
  }
};
</script>