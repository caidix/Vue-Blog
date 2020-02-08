<template>
  <div class="message-alert">
    <div class="mask"></div>
    <svg-icon icon-class="error-btn"></svg-icon>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Alert extends Vue {}
</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  width: 100%;
  height: 100%;
  // .mask {
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.85);
  // }
}
</style>