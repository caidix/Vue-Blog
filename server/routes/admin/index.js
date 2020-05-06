module.exports = (app) => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });
  const authMiddleware = require("../../middleware/auth");
  const { upload } = require("../../utils/alioss");

  let adminArticle = require("../../controllers/Article");
  let adminCategory = require("../../controllers/Category");
  let adminTag = require("../../controllers/Tag");
  let adminGather = require("../../controllers/Gather");

  app.use("/api/admin", router);
  // app.use('/api/admin', authMiddleware(), router);
  router.post("/upload", upload.single("file"), adminArticle.alioss_update);

  // 文章路由
  router.post("/article/add", adminArticle.add);
  router.post("/article/edit", adminArticle.editArticle);
  router.get("/article/list", adminArticle.list);
  router.get("/article/findOne", adminArticle.findOne);
  router.get("/article/fuzzySearch", adminArticle.fuzzySearch);
  router.delete("/article/delOne/:id", adminArticle.delOne);

  // 分类路由
  router.get("/category/add", adminCategory.add);
  router.get("/category/list", adminCategory.list);
  router.get("/category/del", adminCategory.del);
  router.post("/category/edit", adminCategory.edit);

  // 标签路由
  router.get("/tag/add", adminTag.add);
  router.get("/tag/list", adminTag.list);
  router.get("/tag/del", adminTag.del);
  router.post("/tag/edit", adminTag.edit);

  // 归档路由
  router.get("/gather/add", adminGather.add);
  router.get("/gather/list", adminGather.list);
  router.get("/gather/del", adminGather.del);
  router.post("/gather/edit", adminGather.edit);

  // 错误反馈
  app.use(async (err, req, res, next) => {
    res.render("error");
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  });
};
