<template>
  <div class="line">
    <div :class="['text',`${contentPosition}`]" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class CDLine extends Vue {
  @Prop({ default: "center" }) contentPosition!: string;
}
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background: #dcdfe6;
  box-sizing: border-box;
  margin: 24px 0;
  position: relative;
}
.text {
  font-size: 14px;
  background: #fff;
  position: absolute;
  padding: 0 20px;
  font-weight: 500;
  z-index: 1;
}
.center {
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.left {
  left: 5%;
  transform: translateY(-50%);
}
.right {
  right: 5%;
  transform: translateY(-50%);
}
</style>