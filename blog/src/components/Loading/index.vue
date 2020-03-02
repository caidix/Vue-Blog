<template>
  <div class="loading-container">
    <slot></slot>
    <div v-if="show">
      <svg-icon icon-class="loading-btn" size="70" class="trans-icon"></svg-icon>
      <div :class="window?'loading-all':'loading-spiner'"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Loading extends Vue {
  @Prop({ default: false }) window!: Boolean;
  @Prop({ default: false }) show!: Boolean;
  get getStyle(): any {
    if (this.window) {
      return "loading-all";
    }
    return true;
  }
}
</script>
<style lang="scss" scoped>
.loading-container {
  position: relative;
}
.loading-spiner {
  position: absolute;
  z-index: 99;
  background: rgb(235, 207, 207);
  opacity: 0.8;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading-all {
  z-index: 99;
  background: rgb(235, 207, 207);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
}
.trans-icon {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  animation: xuanzhuan 1s linear 0s infinite;
}
@keyframes xuanzhuan {
  0% {
    transform: translate(-50%, -50%) rotateZ(0);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}
</style>