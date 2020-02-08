<template>
  <div class="home-main">
    <div class="main-left">
      <div class="hambuger"></div>
      <div>
        <div class="detailed-title">{{articleDetail.title}}</div>

        <div class="list-icon center">
          <span class="item">作者：{{articleDetail.author}}</span>
          <span class="item">
            <svg-icon icon-class="date" />
            {{articleDetail.addTime}}
          </span>
          <span class="item">
            <svg-icon icon-class="fire" />
            {{articleDetail.viewCount}}人
          </span>
        </div>
        <div
          class="detail-introduction"
          v-if="articleDetail.introduction"
        >{{articleDetail.introduction}}</div>
        <cd-line v-else></cd-line>
        <div
          id="article-Main"
          ref="articleMain"
          class="detailed-content markdown-body"
          v-html="articleDetail.articleContent"
        ></div>
      </div>
    </div>
    <div class="main-right">
      <Author />
    </div>
    <div class="main-list" v-if="articleDetail.toc">
      <div class="detailed-nav comm-box">
        <div class="nav-title">文章目录</div>
        <div class="toc-list" v-html="articleDetail.toc"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Author from "@/components/Author/index.vue";
import markdown from "@/utils/markdown.js";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: { Author }
})
export default class ArticleDetail extends Vue {
  mounted() {
    window.scrollTo(0, 0);
    this.$route.query.id && this.fetchDetail();
  }
  private articleDetail = {};
  private async fetchDetail(): Promise<void> {
    let data = await this.$https({
      method: "get",
      url: "/article/detail",
      params: {
        id: this.$route.query.id
      }
    });
    const articleContent = markdown.marked(data.articleContent.content);

    await articleContent.then((response: any) => {
      data.articleContent = response.content;
      data.toc = response.toc;
    });
    this.articleDetail = data;
  }
}
</script>

<style lang="scss">
.detailed-container {
  max-width: 1100px;
}
.hambuger {
  height: 40px;
  background: #e1f0ff;
}
.nav-title {
  text-align: center;
  color: #888;
  border-bottom: 1px solid rgb(30, 144, 255);
  font-size: 1rem;
}
.detailed-title {
  font-size: 1.8rem;
  text-align: center;
  padding: 1rem;
}
.center {
  text-align: center;
}

.detailed-content {
  padding: 1.3rem;
  font-size: 1rem;
  img {
    margin: 0 auto !important;
  }
}
.detail-introduction {
  border: 3px solid #f6f6f6;
  text-align: center;
  padding: 5px;
  margin: 5px 10px;
  box-shadow: 3px 3px 0 0 #f6f6f6;
}
.toc-list {
  margin: 0 10px;
  li a {
    color: rgba(17, 6, 6, 0.952);
    &:hover {
      color: rgb(41, 17, 253);
    }
  }
}
</style>