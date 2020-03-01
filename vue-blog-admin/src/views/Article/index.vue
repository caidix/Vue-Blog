<template>
  <div class="article-container">
    <h1>文章列表</h1>
    <el-table
      :data="item.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      v-loading="listLoading"
      border
    >
      <el-table-column type="expand">
        <template slot-scope="{row}">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="类型">
              <span>{{ row.origin|originFilter }}</span>
            </el-form-item>
            <el-form-item label="喜欢">
              <span>{{ row.likes }}</span>
            </el-form-item>
            <el-form-item label="文章描述">
              <span>{{ row.introduction }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="90"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="viewCount" label="阅读量"></el-table-column>
      <el-table-column prop="draft" label="状态">
        <template slot-scope="{row}">
          <el-tag :type="row.draft | statusFilter">{{ row.draft | draftFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="250" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" plain @click="editArticle(scope.row)">编辑</el-button>
          <el-button @click="handleDel(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="pagesize"
      :total="item.length"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <!-- <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />-->
  </div>
</template>


<script>
import api from "@/api/article.js";
export default {
  filters: {
    originFilter(value) {
      const originMap = ["原创", "转载", "混合"];
      return originMap[value];
    },
    draftFilter(draft) {
      const statusMap = ["已发布", "草稿"];
      return statusMap[draft];
    },
    statusFilter(status) {
      const statusMap = ["success", "info"];
      return statusMap[status];
    }
  },
  data() {
    return {
      item: [],
      currentPage: 1,
      pagesize: 10,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      }
    };
  },
  methods: {
    handleSizeChange: function(val) {
      this.pagesize = val;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    async getList() {
      this.listLoading = true;
      let params = {
        getContent: false
      };
      if (this.$route.query)
        params["userId"] = this.$route.query.userId
          ? this.$route.query.userId
          : "";

      let { data } = await api.getArticle(params);
      if (data.code === 0) {
        this.item = data.data;
        this.total = data.data.length;
      } else {
        this.$message({
          message: data.message || "获取失败",
          type: "error"
        });
      }
      this.listLoading = false;
    },
    editArticle(row){
      this.$router.push(`/article/edit/${row._id}`)
    },
    handleDel(row) {
      this.$confirm(`此操作将永久删除文章：${row.title}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        let { data } = await api.delArticle(row._id);
        if (data.code === 0) {
          this.getList();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        } else {
          this.$message({
            message: data.message || "删除失败",
            type: "error"
          });
        }
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="scss">
.article-container {
  .table-expand {
    font-size: 0;
  }
  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>