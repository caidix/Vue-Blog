<template>
  <div class="error-page">
    <div class="error-main">
      <div class="error-main-header">
        <img src="@/assets/img/header.jpg" />
        <div>您所进入的页面已丢失呐~点击下方链接跳转至其他页面哦</div>
        <div class="error-button">
          <template v-for="(item, index) in Object.entries(pageList)">
            <router-link :to="item[1]" :key="index">
              <button class="btn">{{item[0]}}</button>
            </router-link>
          </template>
          <a href="https://www.baidu.com/">
            <button class="btn">百度</button>
          </a>
        </div>
      </div>
      <div class="error-filter"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pageList: {
        首页: "/index",
        文章: "/list",
        生活: "list"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.error-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/error-bg.jpg') top left no-repeat #666666;
  .error-main {
    display: table;
    width: 100%;
    height: 100%;

    .error-main-header {
      position: relative;
      z-index: 800;
      color: #fff;
      vertical-align: middle;
      text-align: center;
      display: table-cell;

      img {
        height: 250px;
        width: 250px;
        overflow: hidden;
        border-radius: 50%;
        border: 3px solid white;
        transition: all 1s;
        margin-bottom: 20px;

        &:hover {
          border-color: red;
          transform: rotate(360deg);
        }
      }

      .error-button {
        margin-top: 20px;
      }

      .btn {
        margin: 0 10px;
        color: hsl(var(--hue), 100%, 41%);
        --hue: 180;
        position: relative;
        padding: 0.375rem 0.75rem;
        border: 1px solid hsl(var(--hue), 100%, 41%);
        font-weight: 500;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
        overflow: hidden;
        outline: transparent;
        background: transparent;

        &::before,
        &::after {
          position: absolute;
          left: 0;
          background-color: hsl(var(--hue), 100%, 41%);
          z-index: -1;
          content: "";
          width: 100%;
          height: 50%;
          transform: scaleX(0);
          transition: transform 0.5s;
        }

        &::before {
          top: 0;
          transform-origin: left;
        }

        &::after {
          top: 50%;
          transform-origin: right;
        }

        &:hover {
          color: white;

          &::before,
          &::after {
            transform: scaleX(1);
          }

          &::before {
            transform-origin: right;
          }

          &::after {
            transform-origin: left;
          }
        }
      }
    }

    .error-filter {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      display: block;
      background-image: linear-gradient(
        140deg,
        rgba(61, 66, 96, 0.6) 20%,
        rgba(21, 23, 34, 0.8)
      );
    }
  }
}
</style>