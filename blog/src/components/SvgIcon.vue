<template>
  <svg :class="svgClass" :style="iconSize" aria-hidden="true" v-on="$listeners">
    <title>{{title}}</title>
    <use :href="iconName" />
  </svg>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class SvgIcon extends Vue {
  @Prop({ default: false }) iconClass!: string;
  @Prop({ default: "" }) className!: string;
  @Prop({ default: 16 }) size!: Number;
  @Prop({ default: "" }) title!: string | Number;
  get iconName(): any {
    return `#icon-${this.iconClass}`;
  }
  get iconSize(): Object {
    if (this.size && Number(this.size)) {
      return {
        width: this.size + "px",
        height: this.size + "px"
      };
    } else {
      return {};
    }
  }
  get svgClass(): any {
    if (this.className) {
      return `svg-icon ` + this.className;
    } else {
      return `svg-icon`;
    }
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>