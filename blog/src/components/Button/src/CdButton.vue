<template>
  <button
    :disabled="disabled"
    :class="['cd-btn',btnClass,
  {
    'btn-only-icon':onlyIcon,  
    'is-disabled':disabled
  }]"
  >
    <template v-if="icon!==''">
      <svg-icon :icon-class="`${icon}-btn`" class="btn-icon"></svg-icon>
      <slot name="btn" v-if="!onlyIcon" />
    </template>

    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class CdBotton extends Vue {
  @Prop({ default: "default" }) type!: String;
  @Prop({ default: "" }) icon!: String;
  @Prop({ default: false }) hasText!: Boolean;
  @Prop({ default: false }) plain!: Boolean;
  @Prop({ default: false }) disabled!: Boolean;
  get btnClass(): String {
    return this.plain ? `btn-plain-${this.type}` : `btn-${this.type}`;
  }
}
</script>

<style lang="scss" scoped>
.cd-btn {
  color: white;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1;
  border-radius: 3px;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.1s ease 0s;
  cursor: pointer;
  border: 1px solid;
}
.btn-only-icon {
  border-radius: 50%;
  padding: 12px;
  font-size: 14px;
}
.is-disabled {
  background-color: rgb(219, 217, 217) !important;
  border-color: rgb(177, 174, 174) !important;
}
$colors: (
  "default": #00d1b2,
  "success": rgb(103, 194, 58),
  "alert": #ff8936,
  "error": rgb(250, 42, 31)
);
$hoverColor: (
  "default": rgb(3, 192, 164),
  "success": rgb(133, 206, 97),
  "alert": rgb(235, 181, 99),
  "error": rgb(250, 98, 90)
);
@each $colorKey, $color in $colors {
  .btn-#{$colorKey} {
    background-color: $color;
    border-color: $color;
  }
  .btn-#{$colorKey}:hover {
    background: map-get($map: $hoverColor, $key: $colorKey);
    border-color: map-get($map: $hoverColor, $key: $colorKey);
  }
  .btn-plain-#{$colorKey} {
    background: rgb(236, 245, 255);
    color: $color;
    border-color: $color;
  }
  .btn-plain-#{$colorKey}:hover {
    color: #fff;
    background: map-get($map: $hoverColor, $key: $colorKey);
  }
}
</style>