<template>
  <div class="home-main">
    <!-- <TopBanner /> -->
    <div class="main-left">
      <div class="main-title">
        <h2>文章列表</h2>
      </div>
      <TopBanner srcBan="list" />
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
    <div class="main-right">
      <Author />
    </div>
    <div class="main-list category-list">
      <ul>
        <li :class="{'active':categoryActive === ''}">
          <svg-icon :icon-class="`plant-8`" size="24"></svg-icon>
          <span class="category-name" @click="articleFromTag('')">全部</span>
        </li>
        <li
          v-for="(item, index) in categoryList"
          :key="index"
          :class="{'active':categoryActive === item._id}"
          @click="articleFromTag(item._id)"
        >
          <svg-icon :icon-class="`plant-${index%9}`" size="24"></svg-icon>
          <span class="category-name">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator";
import Author from "@/components/Author/index.vue";
import TopBanner from "@/components/TopBanner/index.vue";
import Pagination from "@/components/Pagination/index.vue";

@Component({
  components: { Author, TopBanner, Pagination }
})
export default class Home extends Vue {
  mounted(): void {
    this.getArticle();
    this.getCategory();
  }
  private articleList = [];
  private categoryList = [];
  private categoryActive = "";
  private pageConfigTotal = { total: 0, pageSize: 5, pageNo: 1 };

  private async getArticle(): Promise<void> {
    const params = {
      _id: this.categoryActive,
      page: this.pageConfigTotal.pageNo,
      limit: this.pageConfigTotal.pageSize
    };
    let data: any = await this.$https({
      method: "get",
      url: "/article/main",
      params: params
    });
    console.log(data);
    if (data && data.data) {
      this.articleList = data.data;
      this.pageConfigTotal = { ...this.pageConfigTotal, total: data.count };
    }
  }
  private async getCategory(): Promise<void> {
    let data: any = await this.$https({
      method: "get",
      url: "/article/tagList"
    });
    if (data && data.length > 0) this.categoryList = data;
  }
  private async articleFromTag(id: any): Promise<void> {
    this.categoryActive = id;
    this.getArticle();
  }
  private changePage(page: any): void {
    this.pageConfigTotal = { ...this.pageConfigTotal, pageNo: page };
    this.getArticle();
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  li {
    margin: 5px;
    float: left;
    width: 45%;
    box-sizing: border-box;
    display: flex;
    // align-items: center;
    .category-name {
      padding-left: 5px;
    }
    cursor: pointer;
    &.active {
      color: rgb(27, 79, 248);
    }
  }
}
</style>
