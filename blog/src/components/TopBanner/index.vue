<template>
  <div style="margin-bottom:10px;border-bottom: 1px solid #dcdfe6;">
    <div class="article-ban">
      <img v-if="srcBan ==='list'" src="https://cd-blog.oss-cn-shenzhen.aliyuncs.com/blog/articlelist.png" alt />
      <img v-if="srcBan === 'home'" src="https://cd-blog.oss-cn-shenzhen.aliyuncs.com/blog/blog.png" alt />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TopBanner extends Vue {
  @Prop({ default: "" }) srcBan!: string;
}
</script>