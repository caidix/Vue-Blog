<template>
  <div class="author">
    <div class="avatar-box">
      <img class="avatar circle" src="@/assets/avatar.jpg" alt />
    </div>
    <div class="author-introduction">
      <cd-line>CD</cd-line>一枚在前端路上爬行的搬砖青年
      <cd-line>社交账号</cd-line>
      <!-- <a >
        <Avatar size="{28}" icon="github" class="account" />
      </a>
      <Avatar title="380141132" size="{28}" icon="qq" class="account" />
      <Avatar size="{28}" title="后端由MongoDB+Nodejs支持" icon="database" class="account" />-->
      <div class="author-context">
        <a href="https://github.com/caidix/" target="_blank">
          <svg-icon size="32" icon-class="github"></svg-icon>
        </a>
        <svg-icon size="32" icon-class="vx"></svg-icon>
        <svg-icon size="32" icon-class="qq" :title="380141132"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Author extends Vue {}
</script>

<style lang="scss" scoped>
.author {
  text-align: center;
  .author-context {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    justify-items: center;

    .svg-icon {
      cursor: pointer;
      color: #999;
      border-radius: 50%;
      &:hover {
        color: #f47983;
      }
    }
  }
}
.avatar {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  height: 100px;
  width: 100px;
  vertical-align: middle;
}
.circle {
  border-radius: 50%;
}
</style>