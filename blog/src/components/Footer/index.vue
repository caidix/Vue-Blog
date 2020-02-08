<template>
  <div class="footer-div">
    <div>奥利给，干就完了...</div>
    <div>CD的个人博客</div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Author extends Vue {}
</script>

<style lang="scss" scoped>
.footer-div {
  text-align: center;
  width: 100%;
  padding: 1rem;
  color: #9d2933;
  font-weight: 600;
}
</style>