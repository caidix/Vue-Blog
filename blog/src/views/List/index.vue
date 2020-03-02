<template>
  <div class="about home-main">
    <div class="main-left">
      <h1 class="about-title" v-setTitle="'文章归档'">文章归档</h1>
      <div v-if="gatherList.length >0" class="gather-list">
        <cd-modal
          :footer="false"
          :width="900"
          :destroyOnClose="true"
          :show.sync="showDialog"
          :title="gatherTitle"
        >
          <div class="gather-article-list">
            <router-link
              v-for="(item, index) in articleList"
              :key="index"
              target="_blank"
              :to="{path:'/article/detail',query:{id:item.id}}"
              tag="a"
            >
              <p>[{{index+1}}] {{item.title}}</p>
              <span>
                <svg-icon icon-class="date" style="color:blue"></svg-icon>
                {{item.addTime}}
              </span>
            </router-link>
          </div>
        </cd-modal>
        <div class="gather-item" v-for="(item,index) in gatherList" :key="index">
          <div class="gather-inner" @click="getArticleByGather(item)">
            <div
              class="gather-banner"
              :style="`background-image:url(${item.img || 'https://cd-blog.oss-cn-shenzhen.aliyuncs.com/blog/guidang.jpg'})`"
            ></div>
            <div class="gather-message">
              <p class="gather-title">
                <svg-icon icon-class="desc"></svg-icon>
                {{item.name}}
              </p>
              <span class="gather-desc">
                <i style="margin:10px"></i>
                {{item.desc}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="text-align:center;height:200px;line-height:200px">暂无信息</div>
    </div>
    <div class="main-right">
      <Author />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Author from "@/components/Author/index.vue";
@Component({
  components: { Author }
})
export default class List extends Vue {
  mounted() {
    this.getGather();
  }
  private gatherList = [];
  private articleList = [];
  private showDialog = false;
  private gatherTitle = "";
  private async getGather(): Promise<void> {
    let data: any = await this.$https({
      method: "get",
      url: "/gather/list"
    });
    if (data) {
      this.gatherList = data.concat(data);
    }
  }
  private async getArticleByGather(elem: any): Promise<void> {
    let data: any = await this.$https({
      method: "post",
      url: "/gather/getArticle",
      data: {
        id: elem._id
      }
    });
    if (data) {
      this.articleList = data.concat(data);
      this.showDialog = true;
      this.gatherTitle = elem.name;
    }
  }
}
</script>
<style lang="scss" scoped>
.about-title {
  border-bottom: 1px solid #ccc;
}
.gather-list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-top: 10px;
  .gather-item::before {
    content: "";
    position: absolute;
    left: 7px;
    right: 7px;
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #fff;
    transition: all 0.2s linear;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.15);
  }
  .gather-item {
    cursor: pointer;
    width: 33%;
    padding-left: 7px;
    padding-right: 7px;
    box-sizing: border-box;
    transition: all 0.2s linear;
    position: relative;
    margin-bottom: 30px;
    z-index: 0;
    background-color: transparent;
    &:hover {
      transform: translateY(-3px);
      &::before {
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
      }
    }
    .gather-inner {
      border-radius: 5px;
      overflow: hidden;
      color: #333;
    }
    .gather-banner {
      padding-top: 58.82%;
      background-color: #ccc;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .gather-message {
      padding: 10px 12px 15px;
    }
    .gather-title {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      font-weight: 700;
      margin: 5px 0;
    }
    .gather-desc {
      color: rgb(99, 95, 95);
    }
  }
  .gather-article-list {
    padding: 10px;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      color: #303133;
      margin-bottom: 10px;
      &:hover {
        text-shadow: 1px 1px 1px rgb(179, 168, 168);
      }
      p {
        width: 70%;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>