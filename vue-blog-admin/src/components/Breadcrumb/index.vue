<template>
  <div class="navbar">
    <div class="hamburger-container">
      <el-breadcrumb class="app-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <template v-for="(item, index) in breadList">
          <el-breadcrumb-item :key="index">{{item.title}}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <div class="user">{{username}}</div>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>主页</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["username", "introduce"]),
    breadList() {
      let { matched } = this.$route;
      let data = matched.map(item => {
        return {
          url: item.path,
          title: item.meta.title
        };
      });
      return data;
    }
  },
  methods: {
    logout() {
      this.$confirm(`确定登出?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("user/loginOut");
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    float: left;
    line-height: 50px;
    height: 100%;
    .app-breadcrumb.el-breadcrumb {
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;

      .no-redirect {
        color: #97a8be;
        cursor: text;
      }
    }
  }
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        top: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>