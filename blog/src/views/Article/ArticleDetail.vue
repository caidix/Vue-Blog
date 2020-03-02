<template>
  <div class="home-main">
    <div class="main-left">
      <div class="hambuger"></div>
      <div>
        <div
          class="detailed-title"
          v-setTitle="articleDetail.title"
        >{{articleDetail.title}}</div>

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
import "highlight.js/styles/monokai-sublime.css";

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
  font-size: 1.05rem;
  color: #000;
  line-height: 1.9rem;
  img {
    margin: 0 auto !important;
  }

  ol > ul {
    margin-left: 50px;
  }
  ul {
    margin-left: 40px;
  }
  h1 {
    padding-bottom: 1rem;
    border-bottom: 1px solid #d9dada;
    margin-bottom: 2rem;
    margin-top: 2rem;
    -webkit-margin-bottom-collapse: 2rem;
    color: #333;
    font-size: 1.8 rem;
    font-weight: bold;
  }
  h2 {
    border-bottom: 1px solid #d9dada;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    -webkit-margin-bottom-collapse: 2rem;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
  }
  h3 {
    border-left: 4px solid rgb(156, 203, 250);
    padding-left: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    -webkit-margin-bottom-collapse: 2rem;
    color: #666;
    font-size: 1.3rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1.2rem;
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
  .anchor-ul {
    margin-left: 10px;
    position: relative;
    box-shadow: 0 0px 0px #fff;
    list-style: disc;
    padding-bottom: 5px;
    ul {
      list-style: decimal;
      ul {
        list-style: circle;
        ul {
          list-style: square;
        }
      }
    }
  }
  li {
    &:hover {
      color: rgb(41, 17, 253);
    }
    // list-style: none;
    a {
      color: rgba(17, 6, 6, 0.952);
      &:hover {
        color: rgb(41, 17, 253);
      }
    }
  }
}
pre {
  display: block;
  background-color: #283646 !important;
  padding: 0.5rem !important;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  border-radius: 0.3rem;
}

pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  color: #ccc !important;
}
code {
  display: inline-block;
  background-color: #fff5f5;
  border-radius: 3px;
  padding-left: 5px;
  padding-right: 5px;
  color: #ff502c;
  margin: 0px 3px;
  line-height: 1.1rem;
}
table {
  margin: 0 auto;
}
table th {
  font-weight: bold;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 6px 13px;
}

table tr {
  border-top: 1px solid #ccc;
  background-color: #fff;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
blockquote {
  border-left: 4px solid #ddd;
  padding: 0 15px;
  color: #777;
  margin-left: 20px;
}

blockquote > :first-child {
  margin-top: 0px;
}

blockquote > :last-child {
  margin-bottom: 0px;
}
.hljs-comment {
  color: #ff6a6a;
}
</style>