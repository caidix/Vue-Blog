<template>
  <transition @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="modal-container" v-show="show" :key="key">
      <div class="modal-content" :style="style">
        <div class="modal-header">
          <slot name="title">
            <span class="modal-title">{{ title }}</span>
            <span class="modal-close" v-if="closebtn">
              <svg-icon icon-class="close" @click="handleClose"></svg-icon>
            </span>
          </slot>
        </div>
        <div class="modal-body" v-if="rendered">
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="footer">
          <slot name="footer"></slot>
          <div class="modal-btn">
            <cd-button plain="true" type="exit" @click="handleClose" style="margin-right:10px">取消</cd-button>
            <cd-button>{{okText}}</cd-button>
          </div>
        </div>
      </div>
      <div class="modal-mask" v-if="mask"></div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Modal extends Vue {
  @Prop({ default: "模态框" }) title!: string;
  @Prop({ default: false }) show!: Boolean; // 显示隐藏
  // @Prop({ default: this.afterCloseMethod }) afterClose!: Function; // 关闭之后的回掉
  @Prop({ default: true }) closebtn!: Boolean; // 是否显示右上角关闭按钮
  @Prop({ default: true }) footer!: Boolean; //是否展示底部按钮
  @Prop({ default: true }) mask!: Boolean; // 是否用遮罩
  @Prop({ default: false }) maskClosable!: Boolean; // 是否可点击遮罩层关闭
  @Prop({ default: 500 }) width!: any; //对话框宽度
  @Prop({ default: false }) center!: Boolean; //对话框居中显示
  @Prop({ default: "30vh" }) top!: any; //距离顶部高度
  @Prop({ default: "确定" }) okText!: string; // 提交按钮文字
  @Prop() onOk!: Function; // 提交执行函数
  @Prop() beforeClose!: Function; // 关闭前的回调，会传入一个关闭函数
  @Prop({ default: false }) destroyOnClose!: Boolean; // 关闭时是否销毁元素
  private rendered = true;
  private key = 0;
  get style(): any {
    let style: any = {};
    if (this.center) {
      style.top = "50%";
      style.transform = "translateY(-50%)";
    } else {
      style.marginTop = this.top;
    }
    if (typeof this.width == "number") {
      style.width = this.width + "px";
    } else {
      style.width = this.width;
    }
    return style;
  }
  @Watch("show")
  private showChanged(val: Boolean, oldVal: Boolean): void {
    if (val) {
    } else {
      if (this.destroyOnClose) {
        this.$nextTick(() => {
          console.log("ok");
          this.key++;
        });
      }
    }
  }

  private handleClose() {
    if (typeof this.beforeClose === "function") {
      this.beforeClose(this.hide);
    } else {
      this.hide();
    }
  }
  private hide() {
    this.$emit("update:show", false);
  }
  private afterEnter() {
    //进入前的回调
    this.$emit("opened");
  }
  private afterLeave() {
    // 关闭动画结束时的回调
    this.$emit("closed");
  }
}
</script>
<style lang="scss" scoped>
@keyframes xSpread {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  z-index: 2020;
  .modal-content {
    position: relative;
    z-index: 1000;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    overflow: hidden;
    -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    pointer-events: auto;
    animation: xSpread 0.3s;
  }
  .modal-header {
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    .modal-title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
  }
  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-body {
    padding: 16px 24px;
  }
  .modal-footer {
    padding: 10px 16px;
    border-top: 1px solid #f0f0f0;
    position: relative;
  }
  .modal-btn {
    text-align: right;
    background: transparent;
    border-radius: 0 0 4px 4px;
  }
}
</style>
