<template>
  <div class="nav-tab">
    <div class="top-bar">
      <div class="author-card">
        <span class="header-logo">CD</span>
        <span class="header-txt">二斤桃花酿作酒 万杯不及你温柔</span>
      </div>
    </div>
    <!-- <div class="tab-banner">
      <img src="../../assets/CD-Blog.png" alt />
    </div>-->
    <div class="tab-bar">
      <ul>
        <router-link class="navtab-item" active-class="active" to="/" exact tag="li">
          <svg-icon icon-class="home" size="24"></svg-icon>
          <span>首页</span>
        </router-link>
        <router-link class="navtab-item" active-class="active" to="/article" tag="li">
          <svg-icon icon-class="article" size="24"></svg-icon>
          <span>文章</span>
        </router-link>
        <router-link class="navtab-item" active-class="active" to="/list" tag="li">
          <svg-icon icon-class="list" size="24"></svg-icon>
          <span>列表</span>
        </router-link>
        <router-link class="navtab-item" active-class="active" to="/about" tag="li">
          <svg-icon icon-class="about-me" size="24"></svg-icon>
          <span>关于我</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class NavTab extends Vue {}
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-tab {
  position: relative;
}
.top-bar {
  padding: 0.4rem;
  overflow: hidden;
  height: 1rem;
  background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
  line-height: 1;
  width: 100%;
  .author-card {
    float: left;
  }
  .header-logo {
    color: #1e90ff;
    font-size: 1.4rem;
    text-align: left;
  }

  .header-txt {
    font-size: 0.8rem;
    color: #edd1d8;
    display: inline-block;
    padding-left: 0.3rem;
  }
}
.tab-banner {
  max-width: 1100px;
  margin: 0 auto;
  height: 300px;
  overflow: hidden;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}
.tab-bar {
  z-index: 200;
  --navtab-width: 300px;
  --navtab-item-width: calc(var(--navtab-width) / 4 - 20px);
  --navtab-overlay-width: calc(var(--navtab-item-width) + 50px);
  --active-index: 0;
  position: fixed;
  top: 0;
  width: var(--navtab-width);
  height: 50px;
  left: 50%;
  transform: translate(-50%);
  background: white;
  border: 1em solid white;
  box-shadow: 0 1px 1px 1px #0288d1;
  border-radius: 5% 5% 15% 15% / 15% 15% 50% 50%;
  overflow: hidden;
  ul {
    @include center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .navtab-item {
    @include center;
    z-index: 2;
    flex-direction: column;
    width: var(--navtab-item-width);
    height: 100%;
    color: #0288d1;
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;
    span {
      font-size: 14px;
      user-select: none;
      opacity: 0;
      transition: 0.5s ease;
    }
    .svg-icon {
      transition: 0.5s ease;
      width: 25px;
      height: 25px;
      transform: translateY(6px);
    }
    &.active {
      width: var(--navtab-overlay-width);

      .svg-icon {
        transform: translateY(-3px);
      }

      span {
        opacity: 1;
      }
      &::after {
        opacity: 1;
      }
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      z-index: -1;
      left: 0;
      height: 100%;
      width: var(--navtab-overlay-width);
      background: #b3e5fc;
      border-radius: 20px;
      opacity: 0;
      transition: 0.5s ease;
    }
  }
}
</style>