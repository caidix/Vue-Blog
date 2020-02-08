<template>
  <div class="home-main">
    <!-- <TopBanner /> -->

    <div class="main-right">
      <Author />
    </div>
    <div class="main-left">
      <div class="main-title">
        <h2>最新文章</h2>
      </div>
      <TopBanner srcBan="home" />
      <div class="article-container" v-if="articleList.length>0">
        <ul v-for="(item, index) in articleList" :key="index">
          <li>
            <div class="content-info-box">
              <div class="list-title">
                <router-link
                  target="_blank"
                  :to="{path:'/article/detail',query:{id:item.id}}"
                  tag="a"
                >{{item.title}}</router-link>
              </div>
              <div class="list-icon">
                <svg-icon icon-class="date" style="color: blue" />
                <span>{{item.addTime}}</span>
                <template v-if="item.category.length>0">
                  <svg-icon icon-class="category" />
                  <span v-for="(category, index) in item.category" :key="index">{{category.name}}</span>
                </template>
                <svg-icon icon-class="fire" />
                <span>{{item.viewCount}}人</span>
              </div>

              <div class="list-context">{{item.introduction}}</div>
            </div>
            <div class="thumb-box">
              <div
                class="article-img"
                v-if="item.img_url"
                :style="`background-image:url(${item.img_url})`"
              ></div>
              <div class="list-go">
                <svg-icon icon-class="file" />&nbsp;
                <router-link
                  target="_blank"
                  :to="{path:'/article/detail',query:{id:item.id}}"
                  tag="a"
                >查看全文</router-link>
              </div>
            </div>
          </li>
        </ul>
        <Pagination :page-config="pageConfigTotal" @changeCurrentPage="changePage" />
      </div>
      <div style="text-align:center" v-else>暂无内容~~</div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator";
import Author from "@/components/Author/index.vue";
import TopBanner from "@/components/TopBanner/index.vue";

@Component({
  components: { Author, TopBanner }
})
export default class Home extends Vue {
  mounted(): void {
    this.getArticle();
  }
  private articleList = [];
  private async getArticle(): Promise<void> {
    let data: any = await this.$https({
      method: "get",
      url: "/article/main",
      params: {
        limit: 10
      }
    });
    this.articleList = data.data;
  }
}
</script>

<style lang="scss">
</style>
